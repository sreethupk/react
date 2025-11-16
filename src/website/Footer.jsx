import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="big-footer">
      <div className="footer-content">
        <h2 className="footer-title">MyShop</h2>
        <p className="footer-desc">
          Discover stylish bags, shoes, and accessories that define your look.  
          Quality products. Affordable prices. Fast delivery.
        </p>
        <div className="footer-social">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 MyShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
