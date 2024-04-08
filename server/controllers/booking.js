import { db } from "../connect.js";
import { calculateNumberOfDays } from "../utils.js/utils.js";

export const bookReservation = async (req, res) => {
  try {
    console.log(req.body);

    const {
      email,
      fname,
      guests,
      lname,
      phone,
      roomNo,
      checkin,
      checkout,
      roomId,
    } = req.body;

    const q = `
      SELECT 
        R.RoomID,
        R.RoomTypeID,
        RT.TypeName AS RoomType,
        RT.Price,
        R.Description AS RoomDescription,
        RT.Description AS RoomTypeDescription
      FROM 
        rooms R
      INNER JOIN 
        roomtypes RT ON R.RoomTypeID = RT.RoomTypeID
      WHERE 
        R.RoomID = ? AND
        R.RoomID NOT IN (
          SELECT DISTINCT RoomID
          FROM bookings
          WHERE 
            (
              CheckInDate BETWEEN ? AND ?
              OR CheckOutDate BETWEEN ? AND ?
              OR ? BETWEEN CheckInDate AND CheckOutDate
              OR ? BETWEEN CheckInDate AND CheckOutDate
            )
          AND RoomID = ?
        )
    `;

    const data = await new Promise((resolve, reject) => {
      db.query(
        q,
        [
          roomId,
          checkin,
          checkout,
          checkin,
          checkout,
          checkin,
          checkout,
          roomId,
        ],
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        }
      );
    });

    if (data.length > 0 && data[0].RoomID == roomId) {
      const numberOfDays = calculateNumberOfDays(checkin, checkout);
      const totalPrice = data[0].Price * numberOfDays;

      const insertUserQuery = `
        INSERT INTO users (FirstName, LastName, Email, Phone)
        VALUES (?, ?, ?, ?)
      `;

      const userData = await new Promise((resolve, reject) => {
        db.query(
          insertUserQuery,
          [fname, lname, email, phone],
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        );
      });

      const insertBookingQuery = `
        INSERT INTO bookings (UserId, RoomId, CheckinDate, CheckoutDate, Price)
        VALUES (?, ?, ?, ?, ?)
      `;

      const bookingResult = await new Promise((resolve, reject) => {
        db.query(
          insertBookingQuery,
          [userData.insertId, roomId, checkin, checkout, totalPrice],
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        );
      });

      return res.status(200).json({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        checkin: checkin,
        checkout: checkout,
        totalPrice: totalPrice,
        numberOfDays: numberOfDays,
        roomId: roomId,
        bookingId: bookingResult.insertId,
      });

      console.log(bookingResult);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const searchUsersBookingDetails = async (req, res) => {
  try {
    const email = req.query.email;

    const results = await new Promise((resolve, reject) => {
      const query = `
        SELECT
            b.BookingId,
            u.UserId,
            u.FirstName,
            u.LastName,
            u.Email,
            u.Phone,
            b.RoomId,
            b.CheckinDate,
            b.CheckoutDate,
            b.Price,
            rt.TypeName AS RoomType
        FROM
            users u
        INNER JOIN
            bookings b ON u.UserId = b.UserId
        INNER JOIN
            rooms r ON b.RoomId = r.RoomId
        INNER JOIN
            roomtypes rt ON r.RoomTypeId = rt.RoomTypeId
        WHERE
            u.Email = ?
      `;

      db.query(query, [email], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    const processedResult = results.map((item) => ({
      bookingId: item.BookingId,
      checkin: item.CheckinDate.toISOString().split("T")[0],
      checkout: item.CheckoutDate.toISOString().split("T")[0],
      email: item.Email,
      fname: item.FirstName,
      lname: item.LastName,
      numberOfDays: calculateNumberOfDays(
        item.CheckinDate.toISOString().split("T")[0],
        item.CheckoutDate.toISOString().split("T")[0]
      ),
      phone: item.Phone,
      roomId: item.RoomId,
      totalPrice: item.Price,
    }));

    res.status(200).json(processedResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
