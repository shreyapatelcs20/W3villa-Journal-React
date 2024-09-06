import './style.css'; // Import your styles
import screenshot1 from '../assets/Screenshot 2024-08-28 165306.png';
import screenshot2 from '../assets/Screenshot 2024-08-28 165318.png';
import screenshot3 from '../assets/Screenshot 2024-08-28 165331.png';
import screenshot4 from '../assets/Screenshot 2024-08-28 165341.png';
import screenshot5 from '../assets/Screenshot 2024-08-28 165349.png';


const GalleryModule = () => {
  return (
    <div className="gallery-container">
      <h2>Improved Gallery Module</h2>
      <div className="gallery-p">
        <p>
          The Gallery module supports images, videos, and can also act as banners that can point to any
          other page or open other Popup modules. Create different modules with images, videos, banners
          or a combination of all. Add your modules on any page in any grid format.
        </p>
      </div>
      <div className="gallery-contain">
        <div className="gallery">
          <img src={screenshot1} alt="" />
        </div>
        <div className="gallery">
          <img src={screenshot2} alt="" />
        </div>
        <div className="gallery">
          <img src={screenshot3} alt="" />
        </div>
        <div className="gallery">
          <img src={screenshot4} alt="" />
        </div>
        <div className="gallery">
          <img src={screenshot5} alt="" />
        </div>
        <div className="gallery">
          <img src={screenshot1} alt="" />
        </div>
        <div className="gallery">
          <img src={screenshot2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryModule;
