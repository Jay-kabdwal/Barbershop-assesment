import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import About from './components/about';
import Contact from './components/contact';
import CTA from './components/cta';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <Contact />
                <CTA />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={
              <>
                <Contact />
                <CTA />
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;