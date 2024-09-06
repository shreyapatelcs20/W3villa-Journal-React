import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './style.css'; // Optional: if you have custom CSS

// Import images (ensure the paths are correct)
import dress2Img from '../assets/dress2.jpg';
import dressImg from '../assets/dress.jpeg';
import sweaterImg from '../assets/Sweater.jpg';
import tshirtImg from '../assets/tshirt.jpg';

function FeaturedCategory() {
  return (
    <div className="featured-category">
      <h1>Featured Category</h1>
      <div className="para" style={{ paddingTop: '3rem' }}>
        <p>
          Easily create category based modules and display products from specific categories or brands only.
          The advanced page builder allows you to create any grid layout with full control at any breakpoint.
        </p>
      </div>

      <div style={{ paddingLeft: '3rem' }}>
        <div className="fashion-category">
          <div className="category">
            <h4>Fashion</h4>
            <img src={dress2Img} alt="Fashion Category" />
            <div className="list">
              <li className="list-group-item">Accesories</li>
              <li className="list-group-item">Dresses</li>
              <li className="list-group-item">Pants</li>
              <li className="list-group-item">T-Shirts</li>
              <a href="">See all in Fashion</a>
            </div>
          </div>

          <div
            className="new-fashion"
            style={{ width: '70%', height: '30rem', alignItems: 'center', backgroundColor: 'white' }}
          >
            <div style={{ paddingLeft: '1rem', marginTop: '1rem', textAlign: 'left' }}>
              <h4>New Fashion</h4>
            </div>

            <div className="new-fashion-contain" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-around' }}>
              <div className="fashion-contain" style={{ width: '13rem', height: '22rem' }}>
                <img src={dressImg} className="card-img-top" alt="Fairy Dress" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: 'blue' }}>Fairy Dress</p>
                  <p>$399.00</p>
                </div>
                <div className="card-footer">
                  <div>
                    <button className="feature-add">ADD TO CART</button>
                  </div>
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </div>
                </div>
              </div>

              <div className="fashion-contain" style={{ width: '13rem' }}>
                <img src={sweaterImg} className="card-img-top" alt="Sweater" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: 'blue' }}>Fairy Dress</p>
                  <p>$399.00</p>
                </div>
                <div className="card-footer">
                  <div>
                    <button className="feature-add">ADD TO CART</button>
                  </div>
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </div>
                </div>
              </div>

              <div className="fashion-contain" style={{ width: '13rem' }}>
                <img src={dress2Img} className="card-img-top" alt="Dress" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: 'blue' }}>Fairy Dress</p>
                  <p>$399.00</p>
                </div>
                <div className="card-footer">
                  <div>
                    <button className="feature-add">ADD TO CART</button>
                  </div>
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </div>
                </div>
              </div>

              <div className="fashion-contain" style={{ width: '13rem' }}>
                <img src={tshirtImg} className="card-img-top" alt="T-Shirt" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ color: 'blue' }}>Fairy Dress</p>
                  <p>$399.00</p>
                </div>
                <div className="card-footer">
                  <div>
                    <button className="feature-add">ADD TO CART</button>
                  </div>
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-solid fa-arrow-right-arrow-left"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategory;
