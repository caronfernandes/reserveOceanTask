import React, { useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

import { useWizard } from "react-use-wizard";

const ReservationRegistrationForm = ({
  roomDetails,
  AvailiblityformState,
  setBookingStep,
  setBookingConfirmationDetails,
}) => {
  const { handleStep, previousStep, nextStep } = useWizard();

  const [
    ReservationRegistrationFormState,
    setReservationRegistrationFormState,
  ] = useState({
    email: "",
    fname: "",
    guests: 1,
    lname: "",
    phone: "",
    roomNo: roomDetails.Rooms[0].roomId,
  });

  const [reservationRegistrationState, setReservationRegistrationState] =
    useState({
      init: true,
      loading: false,
      loaded: false,
      error: false,
      data: undefined,
    });

  const postUserBookingInfo = () => {
    const BOOKING_CONFIRM_URL = `/api/v1/booking`;
    setReservationRegistrationState({
      init: false,
      loading: true,
      loaded: false,
      error: false,
      data: undefined,
    });
    try {
      axios
        .post(BOOKING_CONFIRM_URL, {
          ...ReservationRegistrationFormState,
          ...AvailiblityformState,
          roomId: ReservationRegistrationFormState.roomNo,
        })
        .then(function (response) {
          setReservationRegistrationState({
            init: false,
            loading: false,
            loaded: true,
            error: false,
            data: response.data,
          });
          setBookingConfirmationDetails(response.data);
          nextStep();
        })
        .catch(function (error) {
          console.log(error);

          setReservationRegistrationState({
            init: false,
            loading: false,
            loaded: false,
            error: true,
            data: undefined,
          });
        });
    } catch (err) {
      console.log(err);

      setReservationRegistrationState({
        init: false,
        loading: false,
        loaded: false,
        error: true,
        data: undefined,
      });
    }
  };

  if (reservationRegistrationState.loading) {
    return (
      <div
        style={{
          maxWidth: "80px",
          minHeight: "200px",
          margin: "auto",
          marginBottom: "40px",
        }}>
        <Oval
          visible={true}
          height="80"
          width="80"
          color="#d4af37"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        console.log(e.target[0].value);

        e.preventDefault();
        postUserBookingInfo();
      }}
      className="jumbotron-form"
      style={{
        maxWidth: "600px",
        maxHeight: "800px",
        margin: "auto",
      }}>
      {/* Put the form here */}
      <h3>Please Enter Your Details For Booking.</h3>
      <br />
      <label
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="fname"
        htmlFor="fname">
        First Name
      </label>
      <input
        value={ReservationRegistrationFormState.fname}
        onChange={(e) =>
          setReservationRegistrationFormState((prevState) => {
            return {
              ...prevState,
              fname: e.target.value,
            };
          })
        }
        type="text"
        id="fname"
        name="fname"
        maxLength="32"
        pattern="[A-Za-z]{1,32}"
        required
      />
      <label
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="lname"
        htmlFor="lname">
        Last Name
      </label>
      <input
        value={ReservationRegistrationFormState.lname}
        onChange={(e) =>
          setReservationRegistrationFormState((prevState) => {
            return {
              ...prevState,
              lname: e.target.value,
            };
          })
        }
        type="text"
        id="lname"
        name="lname"
        maxLength="32"
        pattern="[A-Za-z]{1,32}"
        required
      />
      <label
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="email"
        htmlFor="email">
        Email
      </label>
      <input
        value={ReservationRegistrationFormState.email}
        onChange={(e) =>
          setReservationRegistrationFormState((prevState) => {
            return {
              ...prevState,
              email: e.target.value,
            };
          })
        }
        type="email"
        id="email"
        name="email"
        required
      />
      <label
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className="phone"
        htmlFor="phone">
        Phone
      </label>
      <input
        value={ReservationRegistrationFormState.phone}
        onChange={(e) =>
          setReservationRegistrationFormState((prevState) => {
            return {
              ...prevState,
              phone: e.target.value,
            };
          })
        }
        type="tel"
        id="phone"
        name="phone"
        required
      />
      <label
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className=""
        htmlFor="guests">
        Guests
      </label>
      <select
        name="guests"
        id="guests"
        placeholder="Guests"
        value={ReservationRegistrationFormState.guests}
        onChange={(e) =>
          setReservationRegistrationFormState((prev) => {
            return { ...prev, guests: e.target.value };
          })
        }>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <label
        style={{
          width: "80%",

          marginTop: "5px",
          fontSize: "16px",
        }}
        className=""
        htmlFor="roomNo">
        Room Number
      </label>
      <select
        name="roomNo"
        id="roomNo"
        placeholder="Room No"
        value={ReservationRegistrationFormState.roomNo}
        onChange={(e) =>
          setReservationRegistrationFormState((prev) => {
            return { ...prev, roomNo: e.target.value };
          })
        }>
        {roomDetails["Rooms"]?.map((room) => (
          <option key={room.roomId} value={room.roomId}>
            {room.roomId}
          </option>
        ))}
      </select>
      <br />
      Total Price : {roomDetails.TotalPrice}
      <br />
      <br />
      <button type="submit" className="rates" onClick={() => {}}>
        Confirm Booking
      </button>
    </form>
  );
};

export default ReservationRegistrationForm;
