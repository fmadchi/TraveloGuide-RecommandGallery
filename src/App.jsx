import React, { useEffect } from "react";
import{ useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GuideModels from "./components/GuideModels";
import AddGuideInfo from "./components/AddGuideInfo";
import MarrakeshDestPage from "./components/pages/MarrakeshDestPage";
import FesDestPage from "./components/pages/FesDestPage";


/*
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
*/

export default function App() {
/*
  const [showSignIn, setShowSignIn] = useState(false);
  const [activeComponent, setActiveComponent] = useState('main');

   useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  */
  return (

    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/GuideModels" element={<GuideModels />} />
      <Route path="/add-guide-info" element={<AddGuideInfo />} />
      <Route path="/destination/1" element={<MarrakeshDestPage />} />
      <Route path="/destination/2" element={<FesDestPage />} />





      {/* Ajoutez d'autres routes si nécessaire */}
    </Routes>
  </Router>









    /*
    <>
        <Navbar onSignInClick={() => setActiveComponent('SignIn')} />
      {activeComponent === 'main' && (
        <>
         <Hero/>
         <ScrollToTop />
         <Services />
         <Recommend />
         <Testimonials />
         <Footer />
        </>
      )}
      {activeComponent === 'SignIn' && <SignIn />}
    </>
    */  
  );
}
