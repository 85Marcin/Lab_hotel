import BookingItem from "./BookingItem";

const BookingsList = ({ bookings, removeBooking }) => {
  const allBookings = bookings.map((booking) => {
    return (
      <BookingItem
        key={booking._id}
        booking={booking}
        removeBooking={removeBooking}
      />
    );
  });

  return (
    <>
      <ul>{allBookings}</ul>
    </>
  );
};

export default BookingsList;
