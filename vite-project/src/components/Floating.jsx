import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation library
import "/src/css/Floating.css";

function Floating() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false); // State to toggle visibility
  const navigate = useNavigate();

  // Close button logic
  const goToHome = () => {
    navigate("/"); // Navigate home
  };

  // Toggle logic for "2 personer" button
  const handleTwoPersonClick = () => {
    if (selectedOption === "2 personer" && showAdditionalOptions) {
      // Deselect "2 personer" and hide the options
      setSelectedOption(null);
      setShowAdditionalOptions(false);
    } else {
      // Select "2 personer" and show the options
      setSelectedOption("2 personer");
      setShowAdditionalOptions(true);
    }
  };

  // Logic for "1 person" button (deselects "2 personer" if active)
  const handleOnePersonClick = () => {
    setSelectedOption("1 person");
    setShowAdditionalOptions(false); // Hide the additional options
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
      <p className="floating-description">alskdjalskdlaks</p>

      {/* Booking Options */}
      <div className="booking-section">
        <p className="session-title">Enkelt session: Floating spa</p>
        <div className="button-group">
          <button
            className={`option-btn ${
              selectedOption === "1 person" ? "selected" : ""
            }`}
            onClick={handleOnePersonClick}
          >
            1 person
          </button>
          <button
            className={`option-btn ${
              selectedOption === "2 personer" ? "selected" : ""
            }`}
            onClick={handleTwoPersonClick}
          >
            2 personer
          </button>
        </div>
      </div>

      {/* Additional Options Box */}
      {showAdditionalOptions && selectedOption === "2 personer" && (
        <div className="additional-options-container">
          <h3 className="additional-title">Tilvalg for 2 personer</h3>
          <div className="option-list">
            <p>Option 1: Massage</p>
            <p>Option 2: Champagne</p>
            <p>Option 3: Ekstra tid</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Floating;
