import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBookingDetailsForm from "./components/SearchBookingDetailsForm";
import { Wizard } from "react-use-wizard";
import BookingDetails from "./components/BookingDetails";

const MyBookings = () => {
  const [searchedBookingDetails, setSearchBookingDetails] = useState();

  return (
    <>
      <Navbar />
      <div>
        <Wizard>
          <SearchBookingDetailsForm
            setSearchBookingDetails={setSearchBookingDetails}
          />
          <BookingDetails
            isSearchedBooking={true}
            bookingConfirmationDetails={searchedBookingDetails}
          />
        </Wizard>
      </div>

      <Footer />
    </>
  );
};

export default MyBookings;
