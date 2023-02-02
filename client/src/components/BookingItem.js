import { deleteBooking } from "./BookingService";
const BookingItem = ({ booking, removeBooking }) => {
  console.log(booking);
  const handleDelete = () => {
    deleteBooking(booking._id)
      .then(() => {
        removeBooking(booking._id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <li>
        <span>{booking.guestName}</span>
        <br></br>
        <span>{booking.guestEmail}</span>
        <br />
        <span>
          Status: {booking.checkInStatus ? "checked-in" : "not checked-in"}
        </span>
        <br />
        <button onClick={handleDelete}> 🗑 </button>
        <hr></hr>
      </li>
    </>
  );
};

export default BookingItem;
