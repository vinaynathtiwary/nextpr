import React from 'react';
import Image from 'next/image';

const YourComponent = () => {
  // Define function to handle call action
  const handleCall = () => {
    window.location.href = 'tel:+918376897716'; // Replace with your phone number
  };

  // Define function to handle mail action
  const handleMail = () => {
    window.location.href = 'mailto:nextconceptdesk@gmail.com'; // Replace with your email address
  };

  return (
    <div>
      <footer className="footerStyle">
        <div className="footerContent">
          <div className="newsletterStyle">
            <div>
              <h1 className="newsletterSubtitle">STAY IN THE LOOP</h1>
            </div>
            <div className="newsletterForm">
              <div className="inputContainer">
                <label htmlFor="email" className="inputLabel">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="inputEmail"
                  placeholder='Enter Your Mail'
                />
                <button type="submit" className="submitButton">Submit</button>
              </div>
            </div>
          </div>

          <div className="contactStyle">
            <h3 style={{ fontSize: '24px', marginBottom: '10px', fontWeight: 'bold' }}>CONTACT US</h3>
            <p className="contactParagraph" style={{ marginBottom: '10px' }}>
              603 A Wing Royal Sands, Royal Apartments, Sastri Nagar Rd, Phase D, Shastri Nagar, Andheri West, Mumbai, Maharashtra 400053.
            </p>
            <p className="contactParagraph" onClick={handleCall}>
              <img src='/assets/phone-icon.png' alt="Phone" className="contactImage" />
              Call Now
            </p>
            <p className="contactParagraph" onClick={handleMail}>
              <img src='/assets/mail-icon.png' alt="Mail" className="contactImage" />
              Mail Now
            </p>
          </div>
        </div>
        <div className="footerBottom">
          <div className="socialMediaStyle">
            <div className="socialMediaIcon">
            <a href="https://www.youtube.com"><img src="/assets/youtube.png" alt="Youtube" className="socialIconStyle" /></a>
              <a href="https://www.instagram.com"><img src="/assets/instagram-icon.png" alt="Instagram" className="socialIconStyle" /></a>
              <a href="https://www.telegram.com"><img src="/assets/telegram-icon.png" alt="Telegram" className="socialIconStyle" /></a>
              <a href="https://www.facebook.com"><img src="/assets/facebook-icon.png" alt="Facebook" className="socialIconStyle" /></a>
              <a href="https://www.linkedin.com"><img src="/assets/linkedin-icon.png" alt="Linkedin" className="socialIconStyle" /></a>
            </div>
          </div>
          <div className="copyrightStyle">
            <p>© 2024-2025 Next Concept. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YourComponent;
