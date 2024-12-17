import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // Importer BrowserRouter
import "./css/index.css"; // Opdateret sti til index.css
import App from "./components/App"; // Opdateret sti til App.jsx

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/Pause-studio-eksamen/"}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
