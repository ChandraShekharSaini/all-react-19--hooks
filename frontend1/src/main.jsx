import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./DefaultProps.jsx";
import ClassComponent from "./ClassComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <ClassComponent />
  </StrictMode>
);
