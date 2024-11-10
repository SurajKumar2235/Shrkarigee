import React, { useEffect } from 'react';
import AboutVideo from "../../assets/About_videos.mp4"; // Adjusted import path
import './About.css'; // Ensure you have appropriate CSS for styling

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      {/* Video Player at the top */}
      <div className="video-section">
        <video width="100%" height="400" controls>
          <source src={AboutVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1>About SanskritiGhee</h1>
      <p>
        <strong>SanskritiGhee</strong> - Bringing the taste of the village to your city!
      </p>
      <p>
        Finding authentic village-style desi ghee in the city used to be a challenge, but not anymore! 
        <strong>Sanskriti Ghee</strong> offers 100% pure desi ghee, packed in earthen pots and delivered 
        straight from the village to your home.
      </p>
      <p>
        Experience genuine flavor, nutrition, and the warmth of village love in every spoonful! Order now at 
        <strong>SanskritiGhee.com</strong> or contact us via WhatsApp/call at <strong>9568513893</strong>.
      </p>
      <p>
        Enjoy the aroma and authentic taste of the village right at your doorstep! Our fresh desi ghee is 
        made following traditional methods. Just give us a call or send a WhatsApp message to savor this 
        delightful taste: <strong>9568513893</strong>.
      </p>

      <h2>Our Journey</h2>
      <p>
        Founded in 2024, SanskritiGhee is committed to bringing the essence of rural life into your home. 
        Our desi ghee is made from fresh milk, prepared traditionally, and stored in earthen pots, 
        ensuring you enjoy rich flavors and authenticity in every bite.
      </p>

      <h2>Our Promise</h2>
      <p>
        We assure you that our ghee is 100% pure and unadulterated. 
        With every order, we deliver not just a product but a piece of village life—its traditions, 
        flavors, and love—right to your city.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any inquiries or assistance, please reach out to us via:
      </p>
      <p>
        Phone: <strong>+91-9568513893</strong>
      </p>
      <p>
        Email: <strong>contact@sanskritighee.com</strong>
      </p>
      <p>
        Website: <a href="https://sanskritighee.com" target="_blank" rel="noopener noreferrer">https://sanskritighee.com</a>
      </p>
    </div>
  );
};

export default About;
