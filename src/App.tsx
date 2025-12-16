
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Header from './components/LandingPage/Header';
import Banner from './components/LandingPage/Banner';
import InstallSection from './components/LandingPage/InstallSection';
import Group from './components/LandingPage/Group';
import Benifit from './components/LandingPage/Benifit';
import Architechture from './components/LandingPage/Architechture';
import Features from './components/LandingPage/Features';
import DataProcess from './components/LandingPage/DataProcess';
import Tastimonial from './components/LandingPage/Tastimonial';
import Pricing from './components/LandingPage/Pricing';
import FAQsection from './components/LandingPage/FAQsection';
import Resources from './components/LandingPage/Resources';
import Footer from './components/LandingPage/Footer';
import CopyRight from './components/LandingPage/CopyRight';
import { useState } from 'react';


function App() {
  const [isDarkMode, setIsDarkMode] =  useState(false);
  const handleToggleDarkMode = (DarkMode: boolean | ((prevState: boolean) => boolean)) => {
    setIsDarkMode(DarkMode);
  }
  return (
    <>
      <div className={`light-bg-color min-vh-100 ${isDarkMode ? 'dark' : '' }`}>
        <Header onDarkMode={handleToggleDarkMode} />
        <Banner />
        <InstallSection />
        <Group />
        <Benifit />
        <Architechture />
        <Features />
        <DataProcess />
        <Tastimonial />
        <Pricing />
        <FAQsection />
        <Resources />
        <Footer />
        <CopyRight />
      </div>
    </>
  )
}

export default App
