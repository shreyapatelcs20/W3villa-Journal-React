import './style.css'; // Import the CSS file if you have custom styles for the slider

// Array of image URLs
const brandImages = [
  "https://cdn.freebiesupply.com/logos/thumbs/2x/mcdonalds-black-logo.png",
  "https://cdn.freebiesupply.com/images/large/2x/starbucks-logo-black-and-white.png",
  "https://cdn.freebiesupply.com/logos/large/2x/general-electric-black-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/nfl-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/mercedes-benz-6-logo-png-transparent.png",
  "https://cdn.freebiesupply.com/logos/large/2x/hogwarts-logo-png-transparent.png",
];

const BrandSlider = () => {
  return (
    <div className="brand-container">
      <div className="slider">
        <h1>Shop by Brands</h1>
        <div className="slide-track">
          {brandImages.concat(brandImages).map((src, index) => (
            <div key={index} className="slide-img">
              <img src={src} alt={`Brand ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
