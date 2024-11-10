// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1>
            Sanskriti<span>Ghee</span>
          </h1>
          <p>It's a real website.</p>

          {/* Added FSSAI logo and registration number */}
          <div className="footer-registration">
            <img
              src={assets.fssai_logo} // Make sure this points to your imported image
              alt="FSSAI Logo"
              className="footer-logo"
            />
            <p>Registration Number: 20424303000003</p>
          </div>

          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/policy">Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9568513893</li>
            <li>contact@sanskritighee.com</li>
            <li>Address: Sector 63, Noida, 201301</li>
            <li>Gautam Buddha Nagar, Uttar Pradesh</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        Copyright 2024 © SanskritiGhee - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
