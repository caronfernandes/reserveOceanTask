import React from "react";
import { useWizard } from "react-use-wizard";

const BookingDetails = ({ bookingConfirmationDetails, isSearchedBooking }) => {
  const { handleStep, previousStep, nextStep } = useWizard();

  console.log(bookingConfirmationDetails);

  return (
    <div
      className="jumbotron-form"
      style={{
        maxWidth: "600px",
        maxHeight: "800px",
        margin: "auto",
      }}>
      {/* Put the form here */}
      {!isSearchedBooking && <h4>Room Booking Successfull.</h4>}
      <h3>Your Booking Details.</h3>
      <br />
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="fname">
        First Name : {bookingConfirmationDetails?.fname}
      </div>
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="lname">
        Last Name : {bookingConfirmationDetails?.lname}
      </div>
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="email">
        Email : {bookingConfirmationDetails?.email}
      </div>
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="phone">
        Phone : {bookingConfirmationDetails?.phone}
      </div>
      {/* <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="">
        Guests : {bookingConfirmationDetails.guests}
      </div> */}
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="">
        Room Number : {bookingConfirmationDetails?.roomId}
      </div>
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="phone">
        Booking Id : {bookingConfirmationDetails?.bookingId}
      </div>
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="phone">
        Checkin Date : {bookingConfirmationDetails?.checkin}
      </div>
      <div
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="phone">
        Checkout Date : {bookingConfirmationDetails?.checkout}
      </div>
      <br />
      Total Price : {bookingConfirmationDetails?.totalPrice}
      <br />
      <br />
    </div>
  );
};

export default BookingDetails;
