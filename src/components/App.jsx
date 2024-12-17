import { Routes, Route, useLocation } from "react-router-dom";
import Menubar from "./Menubar"; // Import Menubar component
import Forside from "./Forside";
import Booking from "./Booking";
import Login from "./Login";
import Profil from "./Profil";
import Medlemsfordele from "./Medlemsfordele";
import Program from "./Program";
import Onboarding from "./Onboarding";
import Floating from "./Floating";
import Booket from "./Booket";

function App() {
  const location = useLocation(); // Get the current location (route)

  return (
    <>
      {/* Conditionally render Menubar, hide it on the login page and onboarding page */}
      {location.pathname !== "/" && location.pathname !== "/Onboarding" && <Menubar />}  {/* Menubar hidden on / and /Onboarding */}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Forside" element={<Forside />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Profil" element={<Profil />} />
        <Route path="/Medlemsfordele" element={<Medlemsfordele />} />
        <Route path="/Onboarding" element={<Onboarding />} />
        <Route path="/Floating" element={<Floating />} />
        <Route path="/Booket" element={<Booket />} />
        <Route path="/Program" element={<Program />} />
      </Routes>
    </>
  );
}

export default App;
