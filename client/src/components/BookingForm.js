import { useState } from "react";
import { postBooking } from "./BookingService";

const BookingForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    guestName: "",
    guestEmail: "",
    checkInStatus: false,
  });

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    if (e.target.type === "checkbox") {
      newFormData[e.target.name] = e.target.checked;
    } else {
      newFormData[e.target.name] = e.target.value;
    }
    setFormData(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.guestName || !formData.guestEmail) {
      return alert("Both name and email are required");
    }
    postBooking(formData).then((data) => {
      addBooking(data);
    });

    setFormData({
      guestName: "",
      guestEmail: "",
      checkInStatus: false,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Add booking</h2>
      <div>
        <label htmlFor="guest-name">Guest name</label>
        <input
          onChange={onChange}
          type="text"
          id="guest-name"
          name="guestName"
          value={formData.guestName}
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={onChange}
          type="text"
          id="email"
          name="guestEmail"
          value={formData.guestEmail}
        ></input>
      </div>
      <div>
        <label htmlFor="check-in-status">Check-In Status</label>
        <input
          onChange={onChange}
          type="checkbox"
          id="check-in-status"
          name="checkInStatus"
          checked={formData.checkInStatus}
        ></input>
      </div>

      <input type="submit" value="Add Booking" />
    </form>
  );
};

export default BookingForm;
