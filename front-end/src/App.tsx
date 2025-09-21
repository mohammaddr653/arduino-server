import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/home-page";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
