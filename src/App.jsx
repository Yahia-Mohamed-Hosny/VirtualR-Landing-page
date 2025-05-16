import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection  from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />    
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <PricingSection />
        <TestimonialsSection />  
        <Footer />
      </div>
    </>
  );
}

export default App;
