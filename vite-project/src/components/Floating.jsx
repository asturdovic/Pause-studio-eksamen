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

  return (
    <div className="floating-container">
      {/* Close Button */}
      <button className="close-btn-booking" onClick={goToHome}>
        &times;
      </button>

      <h2 className="header-title">Book tid her</h2>

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
            {selectedOption === "1 person" && (
              <>
                <button
                  className={`option-btn ${selectedService === "45min" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("45min")}
                >
                  Floating for 1 (45 min) DK 695,-
                </button>
                <button
                  className={`option-btn ${selectedService === "60min" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("60min")}
                >
                  Floating for 1 (60 min) DK 795,-
                </button>
              </>
            )}

            {selectedOption === "2 personer" && (
              <>
                <button
                  className={`option-btn ${selectedService === "45min" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("45min")}
                >
                  Floating for 2 (45 min) DK 695,-
                </button>
                <button
                  className={`option-btn ${selectedService === "60min" ? "selected" : ""}`}
                  onClick={() => handleServiceSelect("60min")}
                >
                  Floating for 2 (60 min) DK 795,-
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Booking Date and Time Section - Only visible if a service is selected */}
      {selectedService && (
        <div className="booking-details">
          <h3>Vælg Dato og Tidspunkt</h3>

          {/* Date Picker */}
          <div className="calendar-container">
            <DatePicker
              selected={bookingDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}  // Prevent selecting past dates
              placeholderText="Vælg en dato"
            />
          </div>

          {/* Time Selection */}
          {bookingDate && (
            <div className="time-selector">
              <h4>Vælg tid</h4>
              <select value={selectedTime} onChange={handleTimeChange}>
                <option value="">Vælg tidspunkt</option>
                <option value="10:00">10:00</option>
                <option value="12:00">12:00</option>
                <option value="14:00">14:00</option>
                <option value="16:00">16:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Floating;
