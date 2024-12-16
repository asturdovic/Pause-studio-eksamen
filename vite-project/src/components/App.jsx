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
import Floating from "./Floating";
import Booket from "./Booket";

useEffect(() => {
  if (!hasLoaded) {
    setHasLoaded(true); // Set to true so loading screen only shows once
    navigate("/Login"); // Redirect to loading screen on first load
  }
}, [hasLoaded, navigate]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Forside"
          element={
            <>
              <Forside />
              <Menubar />
            </>
          }
        />
        <Route
          path="/Booking"
          element={
            <>
              <Booking />
              <Menubar />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/Profil"
          element={
            <>
              <Profil />
              <Menubar />
            </>
          }
        />
        <Route
          path="/Medlemsfordele"
          element={
            <>
              <Medlemsfordele />
              <Menubar />
            </>
          }
        />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Floating" element={<Floating />} />
        <Route path="/Booket" element={<Booket />} />
        <Route
          path="/Program"
          element={
            <>
              <Program />
              <Menubar />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
