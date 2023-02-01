import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    guestName: "",
    guestEmail: "",
    checkInStatus: false,
  });

  return (
    <form>
      <h2>Add booking</h2>
      <div>
        <label htmlFor="guest-name">Guest name</label>
        <input
          onChange={onChange}
          type="text"
          id="guest-name"
          value={formData.guestName}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={onChange}
          type="text"
          id="email"
          value={formData.guestEmail}
        ></input>
      </div>
      {/* <div>
        <label htmlFor="check-in-status">Check-In Status</label>
        <input
          type="checkbox"
          id="check-in-status"
          value={formData.checkInStatus}
        ></input>
      </div> */}

      <input type="submit" value="Add Booking" />
    </form>
  );
};

export default BookingForm;
