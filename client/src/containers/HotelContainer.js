import { useState, useEffect } from "react";
import { getBookings } from "../components/BookingService";
import BookingsList from "../components/BookingsList";
import BookingForm from "../components/BookingForm";

const HotelContainer = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    });
  }, []);

  return (
    <>
      <BookingForm />
      <BookingsList bookings={bookings} />;
    </>
  );
};

export default HotelContainer;
