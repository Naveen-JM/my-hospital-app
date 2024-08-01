import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'; // Import CSS for Footer styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="left-section">
          <p className="footer-heading">Terms & Conditions</p>
          <ul className="terms-list">
            <li>All litigations would be handeled</li>
            <li>Please select appointment timings </li>
            <li>Information on doctors are updated</li>
            <li></li>
          </ul>
          <p className="copyright">Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
        <div className="line"></div> {/* Add a div for the line */}
        <div className="right-section">
          <p className="footer-heading">Follow us on:</p>
          <div className="social-icons">
            <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
