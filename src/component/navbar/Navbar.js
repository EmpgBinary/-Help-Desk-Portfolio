

// import React from 'react';
// import './navbar.css'; 
// import logoImage from "../assets/logo1.jpg";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to= "/">
//         <img src={logoImage} alt='Logo' />
//         </Link>
//       </div>
//       <div>
//         <h1>Empg Binary HelpDesk</h1>
//       </div>
//       <ul className="nav-links">
//        <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './navbar.css'; 
import logoImage from "../assets/logo1.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logoImage} alt='Logo' />
        </Link>
      </div>
      <div>
        <h1>Empg Binary HelpDesk</h1>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>
        <li><Link to="/contact" onClick={toggleMobileMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
