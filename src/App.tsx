import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import SeoManager from './components/SeoManager';
import ContactPage from './components/ContactPage';
import CookiesPolicy from './components/CookiesPolicy';

function App() {
  return (
    <Router>
      <SeoManager />
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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;