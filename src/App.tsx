
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Header from './components/Header';
import Banner from './components/Banner';
import InstallSection from './components/InstallSection';
import Group from './components/Group';
import Benifit from './components/Benifit';
import Architechture from './components/Architechture';
import Features from './components/Features';
import DataProcess from './components/DataProcess';
import Tastimonial from './components/Tastimonial';

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
      </div>
    </>
  )
}

export default App
