import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Hero/HeroSection";
import Discover from "./Components/Discover/Discover";
import GridPage from "./Components/Grid/Grid";
import AllahNamesSection from "./Components/Names/AllahNames";
import Footer from "./Components/Footer/Footer";
import QuranPage from "./Components/Quran/Quran";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Discover />
              <GridPage />
              <AllahNamesSection />
              <Footer />
            </>
          }
        />
        <Route path="/quran" element={<QuranPage />} />
      </Routes>
    </div>
  );
}

export default App;
