import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Properties from './components/Properties';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Properties />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
