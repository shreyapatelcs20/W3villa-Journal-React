import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './style.css'; // Optional: if you have custom CSS

// Import images (ensure the paths are correct)
import headphoneImg from '../assets/w3villa-headphones.jpeg';
import heelImg from '../assets/w3villa-heel.jpeg';
import tvImg from '../assets/w3villa-tv.jpeg';
import cameraImg from '../assets/w3villa-Camera.png';
import Button2 from './button2.jsx';

function FeaturedProducts() {
  return (
    <div className="featured-container">
      <h1>Featured Products</h1>
      <div className="para">
        <p>
          Display any products as tabs or accordions with optional grid or carousel mode. Custom products per
          row per module and per breakpoint. Each module can display products in either grid or list view with
          different styles per module.
        </p>
      </div>

      {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" defaultChecked />
        <label className="btn btn-outline-primary" htmlFor="btnradio5">FEATURED</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio6" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio6">LATEST</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio7" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio7">BESTSELLERS</label>

        <input type="radio" className="btn-check" name="btnradio" id="btnradio8" autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor="btnradio8">SPECIALS</label>
      </div> */}
      <Button2 />

      <div className="row row-cols-1 row-cols-md-3" style={{ paddingLeft: '4rem', paddingRight: '1rem', paddingTop: '3rem' }}>
        <div className="col" style={{ width: '24%' }}>
          <div className="card h-100">
            <img src={headphoneImg} className="card-img-top" alt="Headphones" />
            <div className="erickson">
              <h6>Ericksson</h6>
              <h6>Model 519</h6>
            </div>
            <div className="card-body">
              <div className="headphone">
                <h5>Headphones</h5>
                <h6 style={{ color: 'grey' }}>$999.00</h6>
              </div>
              <div className="text">
                <input className="value" type="number" value="1" />
                <button className="add">ADD TO CART</button>
                <div style={{textAlign: 'right', gap: '2px'}}>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="buy-now">
                <i className="fa-solid fa-dollar-sign" style={{ color: 'green', paddingTop: '5px' }}></i>
                <p>Buy Now</p>
              </div>
              <div className="buy-now">
                <i className="fa-regular fa-circle-question" style={{ color: 'red', paddingTop: '5px' }}></i>
                <p>Questions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat for other products, updating the image source and content */}
        <div className="col" style={{ width: '24%' }}>
          <div className="card h-100">
            <img src={heelImg} className="card-img-top" alt="Heel" />
            <div className="erickson">
              <h6>NY Fashion</h6>
              <h6>Model 206</h6>
            </div>
            <div className="card-body">
              <div className="headphone">
                <h5>Women Maria Pump</h5>
                <h6 style={{ color: 'grey' }}>$425.00</h6>
              </div>
              <div className="text">
                <input className="value" type="number" value="1" />
                <button className="add">ADD TO CART</button>
                <div style={{textAlign: 'right'}}>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="buy-now">
                <i className="fa-solid fa-dollar-sign" style={{ color: 'green', paddingTop: '5px' }}></i>
                <p>Buy Now</p>
              </div>
              <div className="buy-now">
                <i className="fa-regular fa-circle-question" style={{ color: 'red', paddingTop: '5px' }}></i>
                <p>Questions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col" style={{ width: '24%' }}>
          <div className="card h-100">
            <img src={tvImg} className="card-img-top" alt="TV" />
            <div className="erickson">
              <h6>Ericksson</h6>
              <h6>Model 995</h6>
            </div>
            <div className="card-body">
              <div className="headphone">
                <h5>Toshiba 5009 Smart TV</h5>
                <h6 style={{ color: 'grey' }}>$0.00</h6>
              </div>
              <div className="text">
                <input className="value" type="number" value="1" />
                <button className="add">ADD TO CART</button>
                <div style={{textAlign: 'right'}}>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="buy-now">
                <i className="fa-solid fa-dollar-sign" style={{ color: 'green', paddingTop: '5px' }}></i>
                <p>Buy Now</p>
              </div>
              <div className="buy-now">
                <i className="fa-regular fa-circle-question" style={{ color: 'red', paddingTop: '5px' }}></i>
                <p>Questions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col" style={{ width: '24%' }}>
          <div className="card h-100">
            <img src={cameraImg} className="card-img-top" alt="Camera" />
            <div className="erickson">
              <h6>Ericksson</h6>
              <h6>Model 994</h6>
            </div>
            <div className="card-body">
              <div className="headphone">
                <h5>Lesica Digital Camera</h5>
                <h6 style={{ color: 'grey' }}>$2,198.00</h6>
              </div>
              <div className="text">
                <input className="value" type="number" value="1" />
                <button className="add">ADD TO CART</button>
                <div style={{textAlign: 'right'}}>
                <i className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="buy-now">
                <i className="fa-solid fa-dollar-sign" style={{ color: 'green', paddingTop: '5px' }}></i>
                <p>Buy Now</p>
              </div>
              <div className="buy-now">
                <i className="fa-regular fa-circle-question" style={{ color: 'red', paddingTop: '5px' }}></i>
                <p>Questions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="all-button">
        <button className="top">SEE ALL PRODUCTS <i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
}

export default FeaturedProducts;
