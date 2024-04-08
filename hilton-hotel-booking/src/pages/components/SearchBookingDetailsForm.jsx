import React, { useState } from "react";
import axios from "axios";

import { Oval } from "react-loader-spinner";
import { useWizard } from "react-use-wizard";
import { toast } from "react-toastify";

const SearchBookingDetailsForm = ({ setSearchBookingDetails }) => {
  const [searchBookingDetailsState, setSearchBookingDetailsState] = useState({
    init: true,
    loading: false,
    loaded: false,
    error: false,
    data: undefined,
  });
  const { handleStep, previousStep, nextStep } = useWizard();
  const [searchBookingDetailsFormState, setSearchBookingDetailsFormState] =
    useState({ email: "" });

  const fetchUsersBookingDetails = () => {
    const SEARCHBOOKINGURL = `https://reserveoceantask.onrender.com/api/v1/booking?email=${searchBookingDetailsFormState.email}`;
    setSearchBookingDetailsState({
      init: false,
      loading: true,
      loaded: false,
      error: false,
      data: undefined,
    });
    try {
      axios
        .get(SEARCHBOOKINGURL)
        .then((response) => {
          setSearchBookingDetailsState({
            init: false,
            loading: false,
            loaded: true,
            error: false,
            data: response.data,
          });
          console.log(response.data[0]);

          if (response.data.length > 0) {
            setSearchBookingDetails(response.data[0]);
            nextStep();
          } else {
            toast.error("No rooms Booked", {
              position: "top-center",
            });
          }
        })
        .catch((err) =>
          setSearchBookingDetailsState({
            init: false,
            loading: false,
            loaded: false,
            error: true,
            data: undefined,
          })
        );
    } catch (err) {
      console.log(err);

      setSearchBookingDetailsState({
        init: false,
        loading: false,
        loaded: false,
        error: true,
        data: undefined,
      });
    }
  };

  if (searchBookingDetailsState.loading) {
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
        e.preventDefault();
        fetchUsersBookingDetails();
      }}
      style={{ maxWidth: "600px", margin: "auto", marginBottom: "40px" }}
      className="jumbotron-form">
      {/* Put the form here */}
      <h3>Search For Booking Details.</h3>
      <br />

      <label className="email" htmlFor="email">
        Email
      </label>
      <input
        value={searchBookingDetailsFormState.email}
        onChange={(e) =>
          setSearchBookingDetailsFormState((prev) => {
            return { ...prev, email: e.target.value };
          })
        }
        type="email"
        id="email"
        required
        name="email"
      />

      <br />
      <button type="submit" className="rates" onClick={() => {}}>
        SEARCH BOOKING
      </button>
    </form>
  );
};

export default SearchBookingDetailsForm;
