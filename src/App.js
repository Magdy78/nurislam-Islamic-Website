import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Discover from './Components/Discover/Discover';
import GridPage from './Components/Grid/Grid';
import AllahNamesSection from './Components/Names/AllahNames';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <HeroSection />
    <Discover></Discover>
    <GridPage></GridPage>
    <AllahNamesSection></AllahNamesSection>
   <Footer></Footer>
    </div>
  );
}

export default App;
