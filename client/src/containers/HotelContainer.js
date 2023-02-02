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

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  const removeBooking = (id) => {
    const nextBookings = bookings.filter((booking) => booking._id !== id);
    setBookings(nextBookings);
  };

  return (
    <>
      <BookingForm addBooking={addBooking} />
      <BookingsList bookings={bookings} removeBooking={removeBooking} />;
    </>
  );
};

export default HotelContainer;
