import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Discover from './Components/Discover/Discover';
import GridPage from './Components/Grid/Grid';
import AllahNamesSection from './Components/Names/AllahNames';
import Footer from './Components/Footer/Footer';
import QuranPage from './Components/Quran/Quran';
import React, { useState } from "react";

const App = () => {
  const [showQuranPage, setShowQuranPage] = useState(false);

  const handleQuranButtonClick = () => {
    setShowQuranPage(true);
  };

  return (
    <div>
      <Navbar />
      {showQuranPage ? (
        <QuranPage />
      ) : (
        <>
          <HeroSection />
          <Discover />
          <GridPage />
          <AllahNamesSection />
          <Footer />
          <button onClick={handleQuranButtonClick}>Go to Quran Page</button>
        </>
      )}
    </div>
  );
};

export default App;