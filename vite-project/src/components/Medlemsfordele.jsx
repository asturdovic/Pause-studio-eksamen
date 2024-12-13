import { useState } from "react";
import "/src/css/Medlemsfordele.css";

function Medlemsfordele() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="medlemsfordele-container">
        <h1 className="medlemsfordele-title">Medlemsfordele</h1>
      </div>
      {/* Progress Section */}
      <div className="progress-section">
        <p>Hver 10 behandling er på vores regning</p>
        <p>Se hvor mange behandlinger du mangler her:</p>
        <div className="progress-bar">
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className={`circle ${index < 3 ? "filled" : ""}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefit-card">
        <img src="/public/img/medlemsfordele.png" alt="Benefit 1" />
        <div className="benefit-text">
          <p>Optjen større rabatter, jo flere behandlinger du booker</p>
          <button>Se rabatsystemet</button>
        </div>
      </div>

      <div className="benefit-card">
        <div className="benefit-text">
          <p>Adgang til vores hjemme pause program</p>
          <button>Prøv det her</button>
        </div>
      </div>

      <div className="benefit-card">
        <img src="/public/img/gavekort.png" alt="Benefit 3" />
        <div className="benefit-text">
          <p>15% på gavekort</p>
        </div>
      </div>

      <div className="benefit-card">
        <img src="/public/img/produkter.png" alt="Benefit 4" />
        <div className="benefit-text">
          <p>15% på alle varer og produkter købt i butikken</p>
        </div>
      </div>
    </>
  );
}
export default Medlemsfordele;
