// src/pages/PrivacyPolicy/PrivacyPolicy.jsx
import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  // Scroll to the top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to Sanskriti Ghee! This Privacy Policy explains how we collect, use, and protect the information you provide when using our website,{' '}
        <a href="https://sanskritighee.com" target="_blank" rel="noopener noreferrer">
          https://sanskritighee.com
        </a>. By using our website, you agree to the terms outlined in this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>To provide you with a smooth shopping experience, we collect the following information:</p>
      <ul>
        <li>
          <strong>Personal Information</strong>: When you create an account, place an order, or contact us, we may collect personal information such as your name, mobile number, email address, and password.
        </li>
        <li>
          <strong>Payment Information</strong>: We offer the option to securely save payment details to make future transactions faster and easier. However, this is completely optional, and we prioritize the security of all payment information.
        </li>
        <li>
          <strong>Usage Information</strong>: We may collect information about your usage of our website, such as your browsing activity, device information, and IP address, to help improve your experience and our services.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>Your information is used solely to provide you with quality products and a seamless shopping experience. Specifically, we use your information to:</p>
      <ul>
        <li>Process orders and payments.</li>
        <li>Communicate with you regarding your orders, deliveries, and support requests.</li>
        <li>Improve our website functionality, products, and services based on your feedback.</li>
        <li>Offer personalized recommendations based on your preferences.</li>
      </ul>
      <p>We do <strong>not</strong> share your personal information with any third-party organizations for their marketing purposes.</p>

      <h2>3. Data Security</h2>
      <p>We take data security seriously and employ industry-standard practices to protect your personal information. Payment details, if saved, are stored securely in compliance with relevant regulations and security standards.</p>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>Our website uses cookies and similar technologies to enhance user experience, track site usage, and improve functionality. Cookies help us remember your preferences and provide customized content.</p>

      <h2>5. Your Rights</h2>
      <p>As a user, you have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal information in your account settings.</li>
        <li>Opt-out of receiving promotional emails at any time.</li>
        <li>Request the removal of any saved payment information.</li>
      </ul>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. Any changes will be posted on this page, and we encourage you to review the policy periodically.
      </p>

      <h2>7. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or how we handle your information, please contact us at:</p>
      <ul>
        <li>
          <strong>Email</strong>: support@sanskritighee.com
        </li>
        <li>
          <strong>Phone</strong>: +91-9568513893
        </li>
      </ul>

      <p>Thank you for trusting Sanskriti Ghee with your information. We are committed to maintaining your privacy and ensuring a secure shopping experience.</p>
    </div>
  );
};

export default PrivacyPolicy;
