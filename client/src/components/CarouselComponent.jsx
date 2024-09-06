
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Assuming you have relevant styles in a CSS file

const CarouselComponent = () => {
  return (
    <div className="mobile-container">
      <div id="carouselExampleCaptions" className="carousel slide" style={{ width: '70%' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner" style={{ borderRadius: '1rem' }}>
          <div className="carousel-item active" style={{ height: '62vh' }}>
            <div className="mobile">
              <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-md-block" style={{ textAlign: 'left', paddingBottom: '5rem' }}>
              <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>Mobile</button>
              <p style={{ fontSize: '3rem', color: 'black' }}><b>Best mobile options <br /> at any resolution</b></p>
              <button className="carousal-btn">LEARN MORE <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="carousel-item" style={{ height: '62vh' }}>
            <div className="mobile">
              <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-md-block" style={{ textAlign: 'left', paddingBottom: '5rem' }}>
              <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>Mobile</button>
              <p style={{ fontSize: '3rem', color: 'black' }}><b>Best mobile options <br /> at any resolution</b></p>
              <button className="carousal-btn">LEARN MORE <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>

          <div className="carousel-item" style={{ height: '62vh' }}>
            <div className="mobile">
              <img src="https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/s3-960x450h.png.webp" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-md-block" style={{ textAlign: 'left', paddingBottom: '5rem' }}>
              <button className="btn" style={{ backgroundColor: 'blue', color: 'white' }}>Mobile</button>
              <p style={{ fontSize: '3rem', color: 'black' }}><b>Best mobile options <br /> at any resolution</b></p>
              <button className="carousal-btn">LEARN MORE <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      <div className="watch-pc">
        <div className="watch" style={{ backgroundImage: 'url(https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b1-320x210w.png.webp)', backgroundColor: 'rgba(240, 242, 245, 1)' }}>
          <div className="phone" style={{ paddingTop: '1.5rem' }}>
            <span>
              <h6 style={{ color: 'rgba(13, 82, 214, 1)',textAlign:'left' }}>WEARABLE</h6>
              <h5 style={{ width: '6rem' }}>Intelligent & Durable Design</h5>
            </span>
          </div>
        </div>
        <div className="watch" style={{ backgroundImage: 'url(https://www.journal-theme.com/1/image/cache/catalog/journal3/slider/demo1/b1-320x210w.png.webp)', backgroundColor: 'rgba(240, 242, 245, 1)' }}>
          <div className="phone">
            <span>
              <h6 style={{ color: 'rgba(13, 82, 214, 1)',textAlign:'left' }}>COMPUTERS</h6>
              <h5 style={{ width: '6rem' }}>Build your own high powered PC</h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
