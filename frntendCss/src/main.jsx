import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Home as MeraHome } from "./Home.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MeraHome />
  </StrictMode>
);
