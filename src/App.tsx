import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import JobOpportunities from './components/JobOpportunities';
import Benefits from './components/Benefits';
import ApplicationProcess from './components/ApplicationProcess';
import Testimonials from './components/Testimonials';
import PartnersResources from './components/PartnersResources';
import InternalLinkBooster from './components/InternalLinkBooster';
import RecruitmentFAQ from './components/RecruitmentFAQ';
import Footer from './components/Footer';
import ApplicationPage from './components/ApplicationPage';
import PaymentPage from './components/PaymentPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import SeoManager from './components/SeoManager';
import ContactPage from './components/ContactPage';
import CookiesPolicy from './components/CookiesPolicy';
import JobDetailPage from './components/JobDetailPage';
import BlogListPage from './components/BlogListPage';
import BlogDetailPage from './components/BlogDetailPage';
import SalaryPage from './components/SalaryPage';
import LocationsPage from './components/LocationsPage';

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
            <PartnersResources />
            <InternalLinkBooster />
            <RecruitmentFAQ />
          </>
        } />
        <Route path="/apply" element={<ApplicationPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:postId" element={<BlogDetailPage />} />
        <Route path="/salary" element={<SalaryPage />} />
        <Route path="/locations" element={<LocationsPage />} />
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