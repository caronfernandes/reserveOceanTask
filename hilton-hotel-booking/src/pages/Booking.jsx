import React, { useState } from "react";
import "./Booking.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AvailiblityCheck from "./components/AvailiblityCheck";
import ReservationRegistrationForm from "./components/ReservationRegistrationForm";
import BookingDetails from "./components/BookingDetails";
import { Wizard } from "react-use-wizard";

const Booking = () => {
  const [bookingStep, setBookingStep] = useState(1);
  const [roomTypeSelection, setRoomTypeSelection] = useState();
  const [bookingConfirmationDetails, setBookingConfirmationDetails] =
    useState();
  const [AvailiblityformState, setAvalivlityFormState] = useState({
    checkin: new Date().toISOString().substring(0, 10),
    checkout: new Date().toISOString().substring(0, 10),
    guests: 1,
  });
  return (
    <>
      <Navbar />

      <div>
        <Wizard>
          <AvailiblityCheck
            setRoomTypeSelection={setRoomTypeSelection}
            setBookingStep={setBookingStep}
            AvailiblityformState={AvailiblityformState}
            setAvalivlityFormState={setAvalivlityFormState}
          />

          <ReservationRegistrationForm
            roomDetails={roomTypeSelection}
            setBookingStep={setBookingStep}
            setBookingConfirmationDetails={setBookingConfirmationDetails}
            AvailiblityformState={AvailiblityformState}
          />

          <BookingDetails
            setBookingStep={setBookingStep}
            bookingConfirmationDetails={bookingConfirmationDetails}
          />
        </Wizard>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
