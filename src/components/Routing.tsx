import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Creeers from '../pages/Creers';
import ContactUs from '../pages/ContactUs';
import Gallery from '../pages/Gallery';
import Faq from '../pages/Faq';
// import Services from './Services';
import Resources from '../pages/Resources';
import BlogPage from '../pages/BlogPage';
// Add imports for other pages as necessary

const Routing: React.FC = () => {
  return (
    <Routes>
      {/* Define the Home route */}
      <Route path="/" element={<Home />} />
      
      {/* Define routes for other navItems */}
      <Route path="/about-us" element={<AboutUs />} />
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="/resources" element={<Resources />} />
      <Route path="/careers" element={<Creeers />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/faq" element={<Faq />} />
     
      {/* Add a fallback for undefined routes */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Routing;
