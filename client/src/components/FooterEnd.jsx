import './style.css'; // Import CSS file if additional styling is needed

const FooterEnd = () => {
  return (
    <div className="footer-end">
      {/* Copyright Section */}
      <div className="footer-p">
        <p>
          Copyright <i className="fa-regular fa-copyright"></i> 2014, Your Store, All Rights Reserved
        </p>
      </div>

      {/* Payment Logos Section */}
      <div className="logo-end">
        <i className="fa-brands fa-cc-visa" style={{ backgroundColor: 'white', color: 'navy' }}></i>
        <i className="fa-brands fa-cc-mastercard" style={{ backgroundColor: 'white', color: 'navy' }}></i>
        <i className="fa-brands fa-cc-discover" style={{ backgroundColor: 'white', color: 'navy' }}></i>
        <i className="fa-brands fa-cc-paypal" style={{ backgroundColor: 'white', color: 'navy' }}></i>
        <i className="fa-brands fa-cc-stripe" style={{ backgroundColor: 'white', color: 'navy' }}></i>
        <i className="fa-solid fa-square-arrow-up" style={{ backgroundColor: 'white', color: 'navy' }}></i>
      </div>
    </div>
  );
};

export default FooterEnd;
