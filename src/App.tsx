
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


function App() {
  return (
    <>
      <div className='light-bg-color min-vh-100'>
        <Header />
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
        <hr />
        <CopyRight />
      </div>
    </>
  )
}

export default App
