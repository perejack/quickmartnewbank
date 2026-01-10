import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import JobOpportunities from './components/JobOpportunities';
import Benefits from './components/Benefits';
import ApplicationProcess from './components/ApplicationProcess';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ApplicationPage from './components/ApplicationPage';
import PaymentPage from './components/PaymentPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <JobOpportunities />
            <Benefits />
            <ApplicationProcess />
            <Testimonials />
          </>
        } />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;