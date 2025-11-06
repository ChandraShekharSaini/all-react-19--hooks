import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import ErrorPage from "./pages/ErrorPage";
import { Suspense } from "react";

const ServicePage = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(import("./pages/Service")), 3000);
  });
});

const AboutPage = React.lazy(() => import("./pages/About"));

const App = () => {
  return (
    <Suspense fallback={<p>Loading.....</p>}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/service" element={<ServicePage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
