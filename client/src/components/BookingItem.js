const BookingItem = ({ booking }) => {
  return (
    <>
      <li>
        <span>{booking.guestName}</span>
        <br></br>
        <span>{booking.guestEmail}</span>
        <hr></hr>
      </li>
    </>
  );
};

export default BookingItem;
