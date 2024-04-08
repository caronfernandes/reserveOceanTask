import React, { useState } from "react";

import RoomListItem from "./RoomListItem";
import { Oval } from "react-loader-spinner";
import axios from "axios";

import { useWizard } from "react-use-wizard";

const AvailiblityCheck = ({
  setBookingStep,
  setRoomTypeSelection,
  AvailiblityformState,
  setAvalivlityFormState,
}) => {
  const { handleStep, previousStep, nextStep } = useWizard();

  const [AvailiblityCheckState, setAvalivlityState] = useState({
    init: true,
    loading: false,
    loaded: false,
    error: false,
    data: undefined,
  });

  const fetchRoomAvailablity = () => {
    const AVAILIBLITYURL = `/api/v1/room/availablity?checkin=${AvailiblityformState.checkin}&checkout=${AvailiblityformState.checkout}&guests=${AvailiblityformState.guests}`;
    setAvalivlityState({
      init: false,
      loading: true,
      loaded: false,
      error: false,
      data: undefined,
    });
    try {
      axios
        .get(AVAILIBLITYURL)
        .then((response) => {
          console.log(response);

          setAvalivlityState({
            init: false,
            loading: false,
            loaded: true,
            error: false,
            data: [...response.data.rooms],
          });
        })
        .catch((err) => {
          setAvalivlityState({
            init: false,
            loading: false,
            loaded: false,
            error: true,
            data: undefined,
          });
        });
    } catch {
      setAvalivlityState({
        init: false,
        loading: false,
        loaded: false,
        error: true,
        data: undefined,
      });
    }
  };

  return (
    <div className="booking-check-parent">
      <form action="" className="jumbotron-form">
        {/* Put the form here */}
        <h3>Check for availaible rooms.</h3>
        <br />

        <label className="hide" htmlFor="arrival">
          arrival date
        </label>
        <input
          value={AvailiblityformState.checkin}
          min={new Date().toISOString().substring(0, 10)}
          onChange={(e) =>
            setAvalivlityFormState((prevState) => {
              if (
                new Date(AvailiblityformState.checkout) <
                new Date(e.target.value)
              ) {
                return {
                  ...prevState,
                  checkin: e.target.value,
                  checkout: e.target.value,
                };
              } else return { ...prevState, checkin: e.target.value };
            })
          }
          type="date"
          id="arrival"
          name="arrival_date"
        />
        <br />
        <label className="hide" htmlFor="departure">
          departure date
        </label>
        <input
          type="date"
          value={AvailiblityformState.checkout}
          min={AvailiblityformState.checkin}
          onChange={(e) =>
            setAvalivlityFormState((prevState) => {
              return { ...prevState, checkout: e.target.value };
            })
          }
          id="departure"
          name="departure_date"
          placeholder="Departure Date"
        />
        <br />
        <label className="" htmlFor="guests">
          Guests
        </label>

        <select
          name="guests"
          id="guests"
          placeholder="Guests"
          value={AvailiblityformState.guests}
          onChange={(e) =>
            setAvalivlityFormState((prev) => {
              return { ...prev, guests: e.target.value };
            })
          }>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <br />
        <button
          type="button"
          className="rates"
          onClick={() => fetchRoomAvailablity()}>
          CHECK AVAILABLITY
        </button>
      </form>
      <div className="room-list-parent">
        <div
          className="row center-lg "
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "250px",
            height: "100%",
            width: "100%",
          }}>
          {AvailiblityCheckState.init && "Search for the Best rooms"}
          {AvailiblityCheckState.loading && (
            <Oval
              visible={true}
              height="80"
              width="80"
              color="#d4af37"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
          {AvailiblityCheckState.error && "Something went wrong..."}
          {AvailiblityCheckState.loaded &&
            AvailiblityCheckState.data.length === 0 &&
            "No rooms available for selected days"}
          {AvailiblityCheckState.loaded &&
            AvailiblityCheckState.data?.length > 0 &&
            AvailiblityCheckState.data?.map((roomType) => (
              <RoomListItem
                key={roomType.RoomType}
                roomType={roomType.RoomType}
                totalPrice={roomType.TotalPrice}
                roomTypeDetails={roomType}
                setRoomTypeSelection={setRoomTypeSelection}
                nextStep={nextStep}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AvailiblityCheck;
