import { BrowserRouter as Router , Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import ScrollToTop from "./scrollToTop";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import LoadingScreen from './loadingScreen';
import LanguageHandler from "./components/LanguageHandler";



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

          <Route
  path="/"
  element={
    <Navigate to={`/${localStorage.getItem('i18nextLng') || 'en'}`} replace />
  }
/>

          <Route path="/:lang" element={loading ? <LoadingScreen /> : <><LanguageHandler /><Home /></>} />
    
        </Routes>
      </Router>
      <div className="iconForma flex justify-center items-center"><i className="fa-solid fa-file-circle-question text-white text-[18px]"></i></div>
    </>
  );
}

export default App;
