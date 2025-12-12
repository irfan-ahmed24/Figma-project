
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Header from './components/Header';
import Banner from './components/Banner';
import InstallSection from './components/InstallSection';
import Group from './components/Group';

function App() {
  return (
    <>
      <div className='light-bg-color min-vh-100'>
        <Header />
        <Banner />
        <InstallSection />
        <Group />
      </div>
    </>
  )
}

export default App
