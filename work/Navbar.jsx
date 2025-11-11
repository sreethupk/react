// import React from "react";
// import './navbar.css';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h2 className="logo">MyWebsite</h2>
//             <div className="nav-links">
//                 <Link to="/" className="nav-item">Home</Link>
//                 <Link to="/about" className="nav-item">About</Link>
//                 <Link to="/contact" className="nav-item">Contact</Link>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">MyWebsite</h2>
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
