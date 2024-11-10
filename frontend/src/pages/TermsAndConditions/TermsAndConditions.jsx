import React, { useEffect } from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <h1>SanskritiGhee Terms and Conditions</h1>
      <p>
        Welcome to SanskritiGhee.com! By accessing or using our website, you agree to comply
        with and be bound by the following terms and conditions. Please read them carefully.
      </p>

      <section>
        <h2>1. General Use</h2>
        <p>
          By using SanskritiGhee.com, you affirm that you are at least 18 years old or have the
          consent of a guardian to make purchases on our platform. SanskritiGhee.com reserves
          the right to change these terms at any time. Continued use of the site implies
          acceptance of any revised terms.
        </p>
      </section>

      <section>
        <h2>2. Product Information and Availability</h2>
        <p>
          All products listed on SanskritiGhee.com are 100% pure desi ghee. Product descriptions
          and availability may change without notice. While we strive to accurately display
          product details, there may be minor differences in appearance due to variations in
          monitor displays.
        </p>
      </section>

      <section>
        <h2>3. Pricing</h2>
        <p>
          Prices listed on our website are in ₹ (Indian Rupees) and include all applicable taxes unless
          otherwise stated. SanskritiGhee.com reserves the right to change prices at any time.
          Orders confirmed prior to a price change will not be affected.
        </p>
      </section>

      <section>
        <h2>4. Ordering and Payment</h2>
        <p>
          Orders placed on SanskritiGhee.com constitute an offer to purchase our products.
          SanskritiGhee.com reserves the right to accept or decline orders for any reason.
          Accepted payment methods include credit cards, debit cards, and other specified
          options on our website. For online payments, you agree to provide accurate payment
          details. SanskritiGhee is not responsible for errors or delays in the payment process.
        </p>
      </section>

      <section>
        <h2>5. Delivery and Returns</h2>
        <p>
          We will endeavor to deliver your order within the estimated timeframe provided, but
          SanskritiGhee.com is not liable for delays beyond our control. Returns are allowed only
          at the time of delivery if the product does not meet your satisfaction. Once the
          delivery is accepted, returns are no longer possible.
        </p>
      </section>

      <section>
        <h2>6. Cancellation and Refunds</h2>
        <p>
          Orders may be canceled any time before dispatch by contacting customer support. Once
          dispatched, cancellations are not possible. Refunds for eligible returns or canceled
          orders will be processed within 0-7 business days for online payments. Cash on
          Delivery refunds will be issued upon product return at delivery.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          SanskritiGhee.com is not liable for any indirect, incidental, or consequential damages
          arising from the use or inability to use our site, including but not limited to
          damages for loss of profits, use, or data. In no event shall our liability exceed the
          purchase price of the product(s) ordered.
        </p>
      </section>

      <section>
        <h2>8. Intellectual Property</h2>
        <p>
          All content, including text, images, and graphics, on SanskritiGhee.com is the property
          of SanskritiGhee and protected by applicable intellectual property laws. Unauthorized
          reproduction, distribution, or use of site content is prohibited without prior written
          consent from SanskritiGhee.
        </p>
      </section>

      <section>
        <h2>9. User Account and Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account information
          and password. SanskritiGhee.com reserves the right to suspend or terminate accounts
          suspected of unauthorized activities.
        </p>
      </section>

      <section>
        <h2>10. Privacy Policy</h2>
        <p>
          Your personal information is protected and handled in accordance with our Privacy
          Policy. By using this site, you consent to the collection, use, and sharing of
          information as described in our Privacy Policy.
        </p>
      </section>

      <section>
        <h2>11. Contact Us</h2>
        <p>
          For any questions or concerns regarding these terms, please contact us at: <br />
          <strong>Email:</strong> contact@sanskritighee.com <br />
          <strong>Phone:</strong> +91-9568513893
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
