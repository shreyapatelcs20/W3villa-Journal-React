import './style.css'; // Import CSS file for additional styling if needed

const Footer = () => {
  return (
    <div className="footer">
      {/* Social Media Icons */}
      <div className="logo-container">
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-square-twitter"></i>
        <i className="fa-brands fa-square-instagram"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-square-youtube"></i>
        <i className="fa-brands fa-skype"></i>
        <i className="fa-brands fa-square-google-plus"></i>
      </div>

      {/* About Us, Customer Services, My Account, Newsletter Sections */}
      <div className="about-us-container">
        {/* About Us Section */}
        <div className="about-us">
          <div>
            <h4>About Us</h4>
            <p>About Us</p>
            <p>Delivery</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Custom Links</p>
          </div>
        </div>

        {/* Customer Services Section */}
        <div className="about-us">
          <div>
            <h4>Customer Services</h4>
            <p>Contact</p>
            <p>Returns</p>
            <p>Site Map</p>
            <p>Brands</p>
            <p>Unlimited Links</p>
          </div>
        </div>

        {/* My Account Section */}
        <div className="about-us">
          <div>
            <h4>My Account</h4>
            <p>My Account</p>
            <p>Order History</p>
            <p>Affiliates</p>
            <p>Newsletter</p>
            <p>Gift Certificates</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="about-us">
          <div>
            <h4>Newsletter</h4>
            <div style={{ width: '80%' }}>
              <p style={{ color: 'black' }}>
                Stay up to date with news and promotions by signing up for our newsletter
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <div>
                <input type="text" className="mail" placeholder="Your email" />
              </div>
              <div style={{ display: 'flex' }}>
                <button type="submit" className="send-btn">
                  <span>
                    <i className="fa-regular fa-envelope" style={{ color: 'white' }}></i> Send
                  </span>
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px', paddingTop: '1rem' }}>
              <input type="checkbox" name="policy" value="privacy" />
              <label>
                I have read and agree to the <a href="">privacy policy</a>
              </label>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
