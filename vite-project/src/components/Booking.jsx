import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook
import '/src/css/Booking.css';

function Booking() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();  // Initialize the navigate function

  // Handle item click event to navigate to the page
  const handleSelectOption = (option) => {
    // Set the selected option (optional for visual feedback)
    setSelectedOption(option);
    
    // Navigate to different pages based on the option clicked
    if (option === 'Floating') {
      navigate('/floating'); // Navigate to the Floating page
    } 
  };

  return (
    <>
      <div className="container">
        {/* Title */}
        <h1>Book din næste pause</h1>
        <p>Hvad ønsker du at booke tid til?</p>

        {/* Buttons for selecting between Enkelt session or Wellnesspakke */}
        <div className="button-group">
          <button
            className={`option-button ${selectedOption === 'Enkelt session' ? 'active' : ''}`}
            onClick={() => handleSelectOption('Enkelt session')}
          >
            Enkelt session
          </button>
          <button
            className={`option-button ${selectedOption === 'Wellnesspakke' ? 'active' : ''}`}
            onClick={() => handleSelectOption('Wellnesspakke')}
          >
            Wellnesspakke
          </button>
        </div>

        {/* Booking options grid */}
        <div className="options-grid">
          {/* Each div with option-item will navigate to corresponding page when clicked */}
          <div className="option-item" onClick={() => handleSelectOption('Floating')}>
            <img src="/public/img/floating.png" alt="Floating" />
            <p>Floating</p>
          </div>
          <div className="option-item" onClick={() => handleSelectOption('Infrared sauna')}>
            <img src="/public/img/infrarød.png" alt="Infrared sauna" />
            <p>Infrared sauna</p>
          </div>
          <div className="option-item" onClick={() => handleSelectOption('Recovery boots')}>
            <img src="/public/img/recoveryboots.png" alt="Recovery boots" />
            <p>Recovery boots</p>
          </div>
          <div className="option-item" onClick={() => handleSelectOption('Cryosauna')}>
            <img src="/public/img/cryosauna.png" alt="Cryosauna" />
            <p>Cryosauna</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
