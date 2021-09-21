import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Cta from './components/Cta';
import Reviews from './components/Reviews';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Card />
      <Cta />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
