import BookingItem from "./BookingItem";

const BookingsList = ({ bookings }) => {
  const allBookings = bookings.map((booking) => {
    return <BookingItem key={booking._id} booking={booking} />;
  });
  //   console.log(allBookings);

  return (
    <>
      <ul>{allBookings}</ul>
    </>
  );
};

export default BookingsList;
