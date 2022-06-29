import './App.css';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import GetStarted from './components/Get Started/GetStarted';
import Header from './components/Navigation/Header/Header';
import Roadmap from './components/Roadmap/Roadmap';
import Shop from './components/Shop/Shop';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      {/* <GetStarted />
      <About />
      <Roadmap />
      <Gallery />
      <Team />
      <FAQ /> */}
      <Shop/>
      <Footer />
    </div>
  );
}

export default App;
