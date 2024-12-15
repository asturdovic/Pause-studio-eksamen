import React from 'react';
import '/src/css/Program.css';

function Program() {
  return (
    <div className="program-container">
      <div className="intro-section">
        <h1>11 minutters pause</h1>
        <p>Afslappende øvelser som giver dig indre ro, og ikke tager mere end 11 min</p>
      </div>

      <div className="program-cards">
        <div className="card">
          <div className="image-placeholder">Billede</div>
          <h2>30 day challenge →</h2>
        </div>

        <div className="card">
          <div className="image-placeholder">Billede</div>
          <h2>Det hurtige program →</h2>
        </div>
      </div>
    </div>
  );
}

export default Program;
