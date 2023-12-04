import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/Hero/HeroSection';
import Discover from './Components/Discover/Discover';

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <HeroSection />
    <Discover></Discover>
    </div>
  );
}

export default App;
