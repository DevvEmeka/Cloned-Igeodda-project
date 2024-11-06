import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Creeers from "./pages/Creers";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import BlogPage from "./pages/BlogPage";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
import Header from "./components/Headers";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="p-6">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs /> } />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Creeers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faq" element={<Faq />} />

          {/* Add a fallback for undefined routes */}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;




