import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import './Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`menu-bars ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
        {menuActive ? <FaTimes /> : <FaBars />}
      </div>
      <header className={menuActive ? 'active' : ''}>
        <RouterLink to='/' className='logo' onClick={closeMenu}>
          {/* <img src={my_img} className='my_img' alt='Profile' /> */}
          <span>Bhawana</span> Jadaun
        </RouterLink>
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><RouterLink to='/' onClick={closeMenu}>Home</RouterLink></li>
            <li><RouterLink to='/about' onClick={closeMenu}>About</RouterLink></li>
            <li><RouterLink to='/services' onClick={closeMenu}>Services</RouterLink></li>
            <li><RouterLink to='/portfolio' onClick={closeMenu}>Portfolio</RouterLink></li>
            <li><RouterLink to='/contact' onClick={closeMenu}>Contact</RouterLink></li>
          </ul>
        </nav>
        <div className='follow'>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:example@example.com"><IoMailUnread /></a>
        </div>
      </header>
    </>
  );
};

export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
// import { IoMailUnread } from "react-icons/io5";
// import './Navbar.css';
// import my_img from '../../assets/my.jpg';

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const [headerActive, setHeaderActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//     setHeaderActive(!headerActive);
//   };

//   const handleScroll = () => {
//     setHeaderActive(window.scrollY > 0);
//     setMenuActive(false);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`menu-bars ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
//         {menuActive ? <FaTimes /> : <FaBars />}
//       </div>
//       <header className={headerActive ? 'active' : ''}>
//         <RouterLink to='/' className='logo'>
//           <img src={my_img} className='my_img' alt='Profile' /><span>Bhawana</span> Jadaun
//         </RouterLink>
//         <nav className={`navbar ${headerActive ? 'active' : ''}`}>
//           <ul>
//             <li><RouterLink to='/' onClick={toggleMenu}>Home</RouterLink></li>
//             <li><RouterLink to='/about' onClick={toggleMenu}>About</RouterLink></li>
//             <li><RouterLink to='/services' onClick={toggleMenu}>Services</RouterLink></li>
//             <li><RouterLink to='/portfolio' onClick={toggleMenu}>Portfolio</RouterLink></li>
//             <li><RouterLink to='/contact' onClick={toggleMenu}>Contact</RouterLink></li>
//           </ul>
//         </nav>
//         <div className='follow'>
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           <a href="mailto:example@example.com"><IoMailUnread /></a>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
// import { IoMailUnread } from "react-icons/io5";
// import './Navbar.css';
// import my_img from '../../assets/my.jpg'

// const Navbar = () => {
//   const [menuActive, setMenuActive] = useState(false);
//   const [headerActive, setHeaderActive] = useState(false);

//   const toggleMenu = () => {
//     setMenuActive(!menuActive);
//     setHeaderActive(!headerActive); // Optionally toggle header active state
//   };

//   const handleScroll = () => {
//     setHeaderActive(window.scrollY > 0);
//     setMenuActive(false);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`menu-bars ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
//         {menuActive ? <FaTimes /> : <FaBars />}
//       </div>
//       <header className={headerActive ? 'active' : ''}>
//         <a href='#home' className='logo'><img src= {my_img} className='my_img'/><span>Bhawana</span> Jadaun</a>
//         <nav className={`navbar ${headerActive ? 'active' : ''}`}>
//           <ul>
//             <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
//             <li><Link to='about' smooth={true} offset={-260} duration={500}>About</Link></li>
//             <li><Link to='services' smooth={true} offset={-150} duration={500}>Services</Link></li>
//             <li><Link to='portfolio' smooth={true} offset={-260} duration={500}>Portfolio</Link></li>
//             <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact</Link></li>
//           </ul>
//         </nav>
//         <div className='follow'>
//           <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//           <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
//           <a href="mailto:example@example.com"><IoMailUnread /></a>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
