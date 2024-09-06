import './style.css'; // Assuming you have relevant styles in a CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import img1 from '../assets/w3villa-fashion.jpg';
import img2 from '../assets/w3villa-bag.jpeg';
import img3 from '../assets/w3villa-makeup.jpg';
import img4 from '../assets/w3vila-homedecor.jpg';
import Button from './Button.jsx';

const BuyComponent = () => {
  return (
    <div className="buy-container">
      <h1 style={{ paddingBottom: '2rem' }}>Why buy from us?</h1>
      <div className="para">
        <p>
          Journal has been the best selling and most loved Opencart theme since first launch in 2013. Tried and
          tested by over 20K people, Journal is the best Opencart theme framework on the market today.
          <a href="" style={{ color: 'rgba(13, 82, 214, 1)' }}> Learn More</a>
        </p>
      </div>

      {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio1">TOP CATEGORIES</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio2">ELECTRONICS</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio3">BEAUTY</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio4">FASHION</label>
      </div> */}
      <Button />

      <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="images">
              <div className="col-md-3">
                <div className="fashion">
                  <img src={img1} className="d-block w-100" alt="Fashion" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '6.5rem' }}>FASHION</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="fashion">
                  <img src={img2} className="d-block w-100" alt="Bags" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '6.5rem' }}>BAGS</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="fashion">
                  <img src={img3} className="d-block w-100" alt="Health & Beauty" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '12rem' }}>HEALTH & BEAUTY</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="fashion">
                  <img src={img4} className="d-block w-100" alt="Home Decor" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '10rem' }}>HOME DECOR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="images">
              <div className="col-md-3">
                <div className="fashion">
                  <img src={img1} className="d-block w-100" alt="Fashion" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '10rem' }}>FASHION</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="fashion">
                  <img src={img2} className="d-block w-100" alt="Bags" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '10rem' }}>BAGS</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="fashion">
                  <img src={img3} className="d-block w-100" alt="Health & Beauty" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '12rem' }}>HEALTH & BEAUTY</button>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="fashion">
                  <img src={img4} className="d-block w-100" alt="Home Decor" />
                  <div className="carousel-caption d-none d-md-block">
                    <button className="button" style={{ width: '10rem' }}>HOME DECOR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyComponent;
