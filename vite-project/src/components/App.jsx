import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import '../css/App.css'; // Sørg for, at denne sti er korrekt
import Forside from "./Forside"; // Sørg for, at Forside er importeret korrekt
import Booking from "./Booking";  // Og de andre sider
import Login from "./Login";
import Profil from "./Profil";
import Menubar from "./Menubar";
import Medlemsfordele from "./Medlemsfordele";
import Program from "./Program";
import Onboarding from "./Onboarding";

// Placeholder for BottomNav, hvis den ikke allerede eksisterer
function BottomNav() {
  return <div>Bottom Navigation</div>;
}

function App() {
  const [showBottomNav, setShowBottomNav] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forside" element={<Forside />} /> {/* Opdateret rute til /forside */}
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Menubar" element={<Menubar />} />
        <Route path="/Medlemsfordele" element={<Medlemsfordele />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Onboarding" element={<Onboarding />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </BrowserRouter>
  );
}

export default App;
