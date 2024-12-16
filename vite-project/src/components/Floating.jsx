import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import styling
import "/src/css/Floating.css"; // Import styling

function Floating() {
  const [selectedOption, setSelectedOption] = useState(null); // Store selected option (1 person or 2 personer)
  const [selectedService, setSelectedService] = useState(null); // Store selected service (45min or 60min)
  const [showServices, setShowServices] = useState(false); // Toggle for showing the Ydelser section
  const [bookingDate, setBookingDate] = useState(null); // Store selected booking date
  const [selectedTime, setSelectedTime] = useState(null); // Store selected time
  const navigate = useNavigate();

  // Close button logic
  const goToHome = () => {
    navigate("/"); // Navigate home
  };
  const handleBooking = () => {
    navigate("/booket"); // Navigate to Booket route
  };

  // Handle session type clicks (1 person or 2 persons)
  const handleOnePersonClick = () => {
    setSelectedOption("1 person");
    setShowServices(true);
    setSelectedService(null); // Reset service when changing session type
    setBookingDate(null);  // Reset date when changing options
    setSelectedTime(null); // Reset time when changing options
  };

  const handleTwoPersonClick = () => {
    setSelectedOption("2 personer");
    setShowServices(true);
    setSelectedService(null); // Reset service when changing session type
    setBookingDate(null);  // Reset date when changing options
    setSelectedTime(null); // Reset time when changing options
  };

  // Handle service selection (45min or 60min)
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setBookingDate(null);  // Reset date when service changes
    setSelectedTime(null);  // Reset time when service changes
  };

  // Handle date changes
  const handleDateChange = (date) => {
    setBookingDate(date);
  };

  // Handle time selection
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Time slot data for 45min and 60min
  const timeSlots = {
    "45min-1": ["10:00-10:45", "11:00-11:45", "13:00-13:45", "14:00-14:45"],
    "60min-1": ["10:00-11:00", "11:30-12:30", "13:30-14:30", "15:00-16:00"],
    "45min-2": ["10:00-10:45", "11:00-11:45", "13:00-13:45", "14:00-14:45"],
    "60min-2": ["10:00-11:00", "11:30-12:30", "13:30-14:30", "15:00-16:00"],
  };

  return (
    <div className="floating-container">
      {/* Close Button */}
      <button className="close-btn-booking" onClick={goToHome}>
        &times;
      </button>

      <h2 className="header-title">Book tid her</h2>

       {/* Image */}
       <div className="floating-booking">
        <img src="/public/img/floating.png" alt="Floating" />
        <p>Floating</p>
      </div>

      {/* Booking Selection - Choosing session type (1 or 2 persons) */}
      <div className="booking-section">
        <h3 className="session-title">Enkelt session</h3>
        <div className="button-group">
          <button
            className={`option-btn ${selectedOption === "1 person" ? "selected" : ""}`}
            onClick={handleOnePersonClick}
          >
            1 person
          </button>
          <button
            className={`option-btn ${selectedOption === "2 personer" ? "selected" : ""}`}
            onClick={handleTwoPersonClick}
          >
            2 personer
          </button>
        </div>
      </div>

      {/* Ydelser Section */}
      {selectedOption && (
        <div className="ydelser-section">
          <h3 className="services-title">Ydelser</h3>
          <div className="button-group-ydelser">
            {/* For 1 person */}
            {selectedOption === "1 person" && (
              <>
                <button
                  className={`option-btn ${selectedService === "45min-1" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("45min-1")}
                >
                  Floating for 1 (45 min) DK 695,-
                </button>
                <button
                  className={`option-btn ${selectedService === "60min-1" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("60min-1")}
                >
                  Floating for 1 (60 min) DK 795,-
                </button>
              </>
            )}

            {/* For 2 personer */}
            {selectedOption === "2 personer" && (
              <>
                <button
                  className={`option-btn ${selectedService === "45min-2" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("45min-2")}
                >
                  Floating for 2 (45 min) DK 695,-
                </button>
                <button
                  className={`option-btn ${selectedService === "60min-2" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("60min-2")}
                >
                  Floating for 2 (60 min) DK 795,-
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Calendar - Renders for any selected service */}
      {selectedService && (
        <div className="custom-calendar">
          <DatePicker
            selected={bookingDate}
            onChange={handleDateChange}
            inline
            minDate={new Date()}
          />
        </div>
      )}

      {/* Time Slots */}
      {selectedService && bookingDate && (
        <div className="time-slots">
          <h4>Vælg tidspunkt</h4>
          <div className="time-buttons">
            {timeSlots[selectedService]?.map((time) => (
              <button
                key={time}
                className={`time-btn ${selectedTime === time ? "selected" : ""}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Book Button */}
      {selectedTime && (
        <button className="book-btn" onClick={handleBooking}>
        Book tid
      </button>
      )}
    </div>
  );
}

export default Floating;
