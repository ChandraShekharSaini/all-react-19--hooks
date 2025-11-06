import { Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import File from "./customHook/File"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <File/> */}
  </StrictMode>
);
