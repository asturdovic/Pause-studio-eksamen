import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Forside from "./Forside";
import Booking from "./Booking";
import Login from "./Login";
import Profil from "./Profil";
import Menubar from "./Menubar";
import Medlemsfordele from "./Medlemsfordele";
import Program from "./Program";
import Onboarding from "./Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Forside /><Menubar /></>} />
        <Route path="/Booking" element={<><Booking /><Menubar /></>} />
        <Route path="/Login" element={<><Login /><Menubar /></>} />
        <Route path="/Profil" element={<><Profil /><Menubar /></>} />
        <Route path="/Medlemsfordele" element={<><Medlemsfordele /><Menubar /></>} />
        <Route path="/Program" element={<><Program /><Menubar /></>} />
        <Route path="/Onboarding" element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
