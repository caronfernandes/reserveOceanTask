import { db } from "../connect.js";
import {
  aggregateAvailableRoomsByRoomTyp as aggregateAvailableRoomsByRoomType,
  calculateNumberOfDays,
} from "../utils.js/utils.js";

export const getAvailableRooms = async (req, res) => {
  try {
    const checkInDate = req.query.checkin;
    const checkOutDate = req.query.checkout;
    const numberOfDatys = calculateNumberOfDays(checkInDate, checkOutDate);

    const q = `
      SELECT 
        R.RoomID,
        R.RoomTypeID,
        RT.Price,
        RT.TypeName AS RoomType,
        R.Description AS RoomDescription,
        RT.Description AS RoomTypeDescription
      FROM 
        rooms R
      INNER JOIN 
        roomtypes RT ON R.RoomTypeID = RT.RoomTypeID
      WHERE 
        R.RoomID NOT IN (
          SELECT DISTINCT RoomID
          FROM bookings
          WHERE 
            (CheckInDate BETWEEN ? AND ?)
            OR (CheckOutDate BETWEEN ? AND ?)
            OR (? BETWEEN CheckInDate AND CheckOutDate)
            OR (? BETWEEN CheckInDate AND CheckOutDate)
        )
    `;

    db.query(
      q,
      [
        checkInDate,
        checkOutDate,
        checkInDate,
        checkOutDate,
        checkInDate,
        checkOutDate,
      ],
      (err, data) => {
        console.log("queryError ", err);

        if (err) return res.status(500).json({ error: err.message });

        const aggregatedRooms = aggregateAvailableRoomsByRoomType(data);
        const aggregatedRoomsWithTotalPrices = aggregatedRooms.map(
          (roomType) => {
            return {
              ...roomType,
              TotalPrice: roomType.RoomPrice * numberOfDatys,
            };
          }
        );

        return res.status(200).json({ rooms: aggregatedRoomsWithTotalPrices });
      }
    );
  } catch (error) {
    console.log("getAvailableRoomsErr ", error);

    res.status(500).json({ message: "Error fetching available rooms" });
  }
};
