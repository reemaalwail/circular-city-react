import { BrowserRouter as Router , Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ScrollToTop from "./scrollToTop";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoadingScreen from './loadingScreen';
import LanguageHandler from "./components/LanguageHandler";
import OurServices from './pages/ourServices.tsx';
import OurProjects from './pages/ourProjects.tsx';
import OurPartners from './pages/ourPartners.tsx';
import AboutUs from './pages/aboutUs.tsx';
import ContactUs from './pages/contactUs.tsx';
import Footer from './components/footer.tsx';
function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="desktop-device"><Navbar /></div> 
        <Routes>
          <Route path="/" element={ <Navigate to="/en" replace />}/>
          <Route path="/:lang" element={loading ? <LoadingScreen /> : <><LanguageHandler /><Home /></>} />
           <Route path="/:lang/ourServices" element={loading ? <LoadingScreen /> : <><OurServices /></>} />
           <Route path="/:lang/ourProjects" element={loading ? <LoadingScreen /> : <><OurProjects /></>} />
           <Route path="/:lang/ourPartners" element={loading ? <LoadingScreen /> : <><OurPartners /></>} />
           <Route path="/:lang/aboutUs" element={loading ? <LoadingScreen /> : <><AboutUs /></>} />
           <Route path="/:lang/contactUs" element={loading ? <LoadingScreen /> : <><ContactUs /></>} />
        </Routes>
        <div><Footer /></div> 
      </Router>
      <div className="iconForma flex justify-center items-center cursor-pointer"><i className="fa-solid fa-file-circle-question text-white text-[18px]"></i></div>
    </>
  );
}

export default App;
