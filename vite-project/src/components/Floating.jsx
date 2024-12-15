import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation library
import "/src/css/Floating.css";

function Floating() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // Close button logic
  const goToHome = () => {
    navigate("/"); // Navigate home
  };

  return (
    <div className="floating-container">
      {/* Close Button */}
      <button className="close-btn-booking" onClick={goToHome}>
        &times;
      </button>

      {/* Title */}
      <h2 className="header-title">Book tid her</h2>

      {/* Image */}
      <div className="floating-booking">
            <img src="/public/img/floating.png" alt="Floating" />
            <p>Floating</p>
          </div>

      {/* Description */}
      <p className="floating-description">Floating</p>

      {/* Booking Options */}
      <div className="booking-section">
        <p className="session-title">Enkelt session: Floating spa</p>
        <div className="button-group">
          <button
            className={`option-btn ${
              selectedOption === "1 person" ? "selected" : ""
            }`}
            onClick={() => setSelectedOption("1 person")}
          >
            1 person
          </button>
          <button
            className={`option-btn ${
              selectedOption === "2 personer" ? "selected" : ""
            }`}
            onClick={() => setSelectedOption("2 personer")}
          >
            2 personer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Floating;