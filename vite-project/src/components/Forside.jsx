import { useState } from 'react';
import '../css/Forside.css';

function Forside() {
  const [count, setCount] = useState(0);

  console.log("Forside component rendered!");  // Log, når komponenten rendres

  return (
    <>
      <div>
        <h1 style={{ color: 'black' }}>Vite + React</h1>
        <p>Velkommen til vores side! Dette er noget tekst under overskriften.</p>
      </div>
    </>
  );
}

export default Forside;
