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
          <img src="/public/img/profil.png" alt="Profile" />
        </div>
        <div className="profile-name">
          <p>Sasha</p>
          <span>Min profil</span>
        </div>

        {/* Main profil muligheder */}
        <div className="profile-options">
          <button className="option-button">
            <img
              src="/public/img/badge.png"
              alt="Medlemsfordele"
              className="option-icon"
            />
            Medlemsfordele
          </button>
          <button className="option-button">
            <img
              src="/public/img/kalender.png"
              alt="Mine bookings"
              className="option-icon"
            />
            Mine bookings
          </button>
          <button className="option-button">
            <img
              src="/public/img/brugertilpasning.png"
              alt="Brugertilpasning"
              className="option-icon"
            />
            Brugertilpasning
          </button>
          <button className="option-button">
            <img
              src="/public/img/hjaelp.png"
              alt="Hjælpecenter"
              className="option-icon"
            />
            Hjælpecenter
          </button>
        </div>
        <button className="option-button">
          <img
            src="/public/img/om.png"
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
