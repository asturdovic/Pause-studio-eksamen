import React from "react";
import "../css/Forside.css";

function Forside() {

  return (
    <div className="forside-container">
      {/* Velkomstsektion */}
      <div className="forside-welcome-section">
        <h1 className="forside-welcome-text">Velkommen Sascha,</h1>
        <p className="forside-pause-text">Tid til at tage en pause?</p>
        <button className="forside-book-button" onClick={handleBookingClick}>
          Book tid
        </button>
      </div>

      {/* Belønningssektion */}
      <div className="forside-reward-section-wrapper">
        <h3 className="forside-reward-title">
          Hver 10 behandling er på vores regning
        </h3>
        <div className="forside-reward-section">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="forside-circle">
              {index < 3 ? "✖" : ""}
            </div>
          ))}
        </div>
      </div>

      {/* Services-sektion */}
      <div className="forside-services-wrapper">
        <h3 className="forside-services-title">SERVICES</h3>
        <div className="forside-services-section">
          <img
            src="/public/img/service1.png"
            alt="Massage"
            className="forside-service-image service-image-1"
          />
          <img
            src="/public/img/service2.png"
            alt="Sauna"
            className="forside-service-image service-image-2"
          />
          <img
            src="/public/img/service3.png"
            alt="Floating"
            className="forside-service-image service-image-3"
          />
          <img
            src="/public/img/service4.png"
            alt="Sauna"
            className="forside-service-image service-image-4"
          />
        </div>
      </div>
    </div>
  );
}

export default Forside;
