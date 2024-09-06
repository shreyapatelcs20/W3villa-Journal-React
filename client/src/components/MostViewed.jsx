
import sunglasses from '../assets/sunglasses.jpeg'; // Import your images
import headphones from '../assets/w3villa-headphones.jpeg';
import heels from '../assets/w3villa-heel.jpeg';
import handbag from '../assets/handbag.webp';
import './style.css'; // Import CSS for additional styling if needed

const MostViewed = () => {
  return (
    <div className="most-viewed">
      <h5 style={{ color: 'white', paddingLeft: '3rem', paddingTop: '1.5rem' }}>
        <u>MOST VIEWED</u>
      </h5>
      <div className="cards">
        {/* Card 1 */}
        <div className="card mb-3" style={{ maxWidth: '350px', height: '120px' }}>
          <div className="row g-0">
            <div className="col-md-4" style={{ paddingTop: '6px', paddingLeft: '8px' }}>
              <img src={sunglasses} className="img-fluid rounded-start" alt="Sunglasses" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6>Oversized sunglasses for...</h6>
                <p>$ 397.00</p>
                <div className="card-logo">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card mb-3" style={{ maxWidth: '350px', height: '120px' }}>
          <div className="row g-0">
            <div className="col-md-4" style={{ paddingTop: '12px', paddingLeft: '8px' }}>
              <img src={headphones} className="img-fluid rounded-start" alt="Headphones" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6>Headphones</h6>
                <p>$ 999.00</p>
                <div className="card-logo">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card mb-3" style={{ maxWidth: '350px', height: '120px' }}>
          <div className="row g-0">
            <div className="col-md-4" style={{ paddingTop: '12px', paddingLeft: '8px' }}>
              <img src={heels} className="img-fluid rounded-start" alt="Women's Maria Pump" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6>Women Maria Pump</h6>
                <p>$ 425.00</p>
                <div className="card-logo">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card mb-3" style={{ maxWidth: '350px', height: '120px' }}>
          <div className="row g-0">
            <div className="col-md-4" style={{ paddingTop: '17px', paddingLeft: '8px' }}>
              <img src={handbag} className="img-fluid rounded-start" alt="Handbags" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6>Handbags</h6>
                <p>$ 209.15</p>
                <div className="card-logo">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostViewed;
