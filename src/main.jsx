import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AuthPage from "./pages/AuthPage";
import Service from "./pages/Service";
import Payments from "./pages/Payments";
import LandingPage from "./pages/LandingPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="service" element={<Service />} />
        <Route path="pay" element={<Payments />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    <Toaster richColors />
  </StrictMode>
);
