import React from "react";

import checkSquareImg from "../../assets/img/check-square.svg";

import bedIcon from "../../assets/img/bed.png";

const RoomListItem = ({
  roomType,
  totalPrice,
  roomTypeDetails,
  nextStep,
  setRoomTypeSelection,
}) => {
  return (
    <div
      style={{ maxWidth: "350px", background: "white", padding: "10px" }}
      className="rooms ">
      <img
        src={
          roomType === "standard"
            ? "https://res.cloudinary.com/start-ng/image/upload/v1591638448/Rectangle_42_nastdj.png"
            : "https://res.cloudinary.com/start-ng/image/upload/v1591638449/Rectangle_43_d9eepu.png"
        }
        alt=""
        className="rooms-img"
      />
      <h3 className="room-title">
        {roomType === "standard" ? "Standard Room" : "Deluxe Room"}
      </h3>
      <p className="room-text">
        {roomType === "standard" ? (
          <>
            Designed specifically for Practicality and <br /> comfort"
          </>
        ) : (
          <>
            Designed specifically for Luxury and <br /> vanity
          </>
        )}
      </p>
      <div>
        <div className="details-container">
          <img src={checkSquareImg} alt="tick" className="list-icon" />
          <p className="list-text">2 Persons</p>
        </div>
        <div className="details-container">
          <img src={bedIcon} alt="tick" className="list-icon" />
          <p className="list-text">
            {roomType === "standard"
              ? "1 Standard Size Bed"
              : "1 King Size Bed"}
          </p>
        </div>
      </div>
      <p className="amount-text">
        {roomType === "standard"
          ? "GBP 100 Per Day/Night"
          : "GBP 200 Per Day/Night"}
      </p>
      <p className="amount-text">
        {`Total Price for your stay is ${totalPrice} `}
      </p>
      <div className="buttons-container">
        <a href="#" className="btn btn-ghost">
          View Details
        </a>
        <span
          className="btn btn-fill"
          onClick={() => {
            setRoomTypeSelection(roomTypeDetails);
            nextStep();
          }}>
          Book Now
        </span>
      </div>
    </div>
  );
};

export default RoomListItem;
