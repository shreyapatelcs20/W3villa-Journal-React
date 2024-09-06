
import './style.css'; // Assuming you have relevant styles in a CSS file

const ShippingComponent = () => {
  return (
    <div className="shipping-container">
      <div className="shipp">
        <div className="logo">
          {/* Replace with alternative icon or text */}
          <span role="img" aria-label="truck" style={{ fontSize: '2rem', color: 'red' }}>🚚</span>
        </div>
        <div>
          <h6>Free Shipping</h6>
          <h6>Free delivery over $100</h6>
        </div>
      </div>

      <div className="shipp">
        <div className="logo">
          {/* Replace with alternative icon or text */}
          <span role="img" aria-label="return" style={{ fontSize: '2rem', color: 'red' }}>🔄</span>
        </div>
        <div>
          <h6>Hassle Free Returns</h6>
          <h6>Hassle free returns</h6>
        </div>
      </div>

      <div className="shipp">
        <div className="logo">
          {/* Replace with alternative icon or text */}
          <span role="img" aria-label="shield" style={{ fontSize: '2rem', color: 'red' }}>🛡️</span>
        </div>
        <div>
          <h6>Secure Shopping</h6>
          <h6>Best security features</h6>
        </div>
      </div>

      <div className="shipp">
        <div className="logo">
          {/* Replace with alternative icon or text */}
          <span role="img" aria-label="cube" style={{ fontSize: '2rem', color: 'red' }}>🧊</span>
        </div>
        <div>
          <h6>Unlimited Blocks</h6>
          <h6>Any content, any page</h6>
        </div>
      </div>
    </div>
  );
};

export default ShippingComponent;
