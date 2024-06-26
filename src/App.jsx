// // App.jsx
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Services from './Components/Services/services';
import Portfolio from './Components/Portfolio/portfolio';
import Contact from './Components/Contact/contact';
import { scroller } from 'react-scroll';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.getElementById(pathname.substring(1));
    if (element) {
      scroller.scrollTo(pathname.substring(1), {
        duration: 500,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70 // Adjust offset for fixed header
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Components/Home/home'
// import About from './Components/About/about'
// import Services from './Components/Services/services';
// import Portfolio from './Components/Portfolio/portfolio';
// import Contact from './Components/Contact/contact';

// function App() {
//   // let cursor1 = document.querySelector('.cursor-1');
//   // let cursor2 = document.querySelector('.cursor-2');
//   // window.onmousemove = ()=> {
//   //   cursor1.style.top = e.pageY + 'px';
//   //   cursor1.style.top = e.pageX + 'px';
//   //   cursor2.style.top = e.pageY + 'px';
//   //   cursor2.style.top = e.pageX + 'px';

//   // }
//   // let links = document.querySelectorAll('a')
//   return (
//     <>
      
//       <Navbar />
//        <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           <Route path="about" element={<About />} />
//           <Route path="services" element={<Services />} />
//           <Route path="portfolio" element={<Portfolio />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
  
//   {/* <div className='cursor-1'></div>
//       <div className='cursor-2'></div> */}
//       {/* <main>
//         <section id="home">
//           <Home />
//         </section>
//         <section id="about">
//           <About />
//         </section>
//         <section id="services">
//           <Services />
//         </section>
//         <section id="portfolio">
//           <Portfolio />
//         </section>
//         <section id="contact">
//           <Contact />
//         </section>

//       </main> */}
  
//     </>
//   );
// }

// export default App;
