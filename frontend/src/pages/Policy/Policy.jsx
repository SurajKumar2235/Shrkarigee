import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Policy.css';

const Policy = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Scroll to top on every navigation to this component
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`policy-container ${darkMode ? 'dark' : 'light'}`}>
      {/* Dark mode toggle */}
      <div className="toggle-mode">
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>

      <h1>SanskritiGhee Policies</h1>
      <p>
        Welcome to SanskritiGhee.com! By placing an order on our website, you agree to the following policies regarding purchases, returns, cancellations, and refunds. Please read carefully to ensure a smooth and satisfying experience with SanskritiGhee.
      </p>

      <section className="policy-section">
        <h2>1. Return Policy</h2>
        <p>
          We are committed to providing 100% pure desi ghee to our valued customers. If you are not completely satisfied with your order at the time of delivery, you may return it immediately following these guidelines:
        </p>
        <ul>
          <li>Customers are allowed to check the product at the time of delivery.</li>
          <li>If, upon inspection, you are not happy with the product, you may return it instantly through the delivery person.</li>
          <li>Once the delivery is complete and accepted, returns will not be accepted.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>2. Cancellation Policy</h2>
        <p>Our cancellation policy is as follows:</p>
        <ul>
          <li><strong>Before Dispatch:</strong> You can cancel the order anytime before it is dispatched for delivery by contacting our customer support team.</li>
          <li><strong>After Dispatch:</strong> If the order is already out for delivery, cancellation is not possible. However, you can still return the product upon delivery following our Return Policy.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>3. Refund Policy</h2>
        <p>Your satisfaction is important to us, and we aim to make the refund process as straightforward as possible:</p>
        <ul>
          <li><strong>Online Payment Refunds:</strong> If you have paid online, the refund will be processed within 0-7 business days after the return is confirmed.</li>
          <li><strong>Cash on Delivery Refunds:</strong> For orders paid by Cash on Delivery (COD), refunds will be processed instantly upon return through the delivery person.</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>4. Shipping Policy</h2>
        <p>We strive to deliver your order as quickly as possible. The estimated shipping times are as follows:</p>
        <ul>
          <li><strong>Minimum Timeline:</strong> Orders will be dispatched within 0-3 business days.</li>
          <li><strong>Maximum Timeline:</strong> Delivery may take up to 1-10 business days, depending on your location and the shipping method selected.</li>
        </ul>
        <p>Please note that these timelines may vary during peak seasons or due to unforeseen circumstances.</p>
      </section>

      <section className="policy-section">
        <h2>5. Quality Commitment</h2>
        <p>At SanskritiGhee, we prioritize quality and purity. Each product is carefully inspected to ensure it meets our high standards. If you have any concerns about the quality of your order, please contact our customer service team.</p>
      </section>

      <section className="policy-section">
        <h2>6. Contact Us</h2>
        <p>For any inquiries or assistance, please reach out to us via:</p>
        <ul>
          <li><strong>Phone:</strong> +91-9568513893</li>
          <li><strong>Email:</strong> contact@sanskritighee.com</li>
          <li><strong>Website:</strong> <a href="https://sanskritighee.com" target="_blank" rel="noopener noreferrer">https://sanskritighee.com/</a></li>
          <li><strong>Address:</strong> Sector 63, Noida, 201301, Gautam Buddha Nagar, Uttar Pradesh</li>
        </ul>
        <p>Our team at SanskritiGhee is here to help you with any questions or concerns you may have.</p>
      </section>

      <p>Thank you for choosing SanskritiGhee, your trusted source for 100% pure desi ghee. We are honored to serve you and committed to providing a great experience.</p>
    </div>
  );
};

export default Policy;
