import { useState } from "react";
import "/src/css/Profil.css";

function Profil() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="profil-container">
        <header className="profil-header">
          <div>
            <h1>Min profil</h1>
          </div>
        </header>

        <div className="profile-picture">
          <img src="img/profilbillede.svg" alt="Profile" />
        </div>
        <div className="profile-name">
          <p>Sasha</p>
          <span>Min profil</span>
        </div>

        {/* Main profil muligheder */}
        <div className="profile-options">
          <button className="option-button">
            <img
              src="ikoner/medlemsfordele.svg"
              alt="Medlemsfordele"
              className="option-icon"
            />
            Medlemsfordele
          </button>
          <button className="option-button">
            <img
              src="ikoner/minebookings.svg"
              alt="Mine bookings"
              className="option-icon"
            />
            Mine bookings
          </button>
          <button className="option-button">
            <img
              src="ikoner/brugertilpasning_ikon.svg"
              alt="Brugertilpasning"
              className="option-icon"
            />
            Brugertilpasning
          </button>
          <button className="option-button">
            <img
              src="ikoner/hjælpecenter_ikon.svg"
              alt="Hjælpecenter"
              className="option-icon"
            />
            Hjælpecenter
          </button>
        </div>
        <button className="option-button">
          <img
            src="ikoner/info_ikon.svg"
            alt="Om pause studio"
            className="option-icon"
          />
          Om Pause studio recovery
        </button>
      </div>
    </>
  );
}
export default Profil;
