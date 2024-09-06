
import { FaQuoteLeft } from 'react-icons/fa'; // Import the quote icon from React Icons
import './style.css'; // Import your CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2>What are people saying about us</h2>
      <div className="about">
        <div className="about1">
          <FaQuoteLeft style={{ fontSize: '3rem', color: 'orange' }} />
          <p>
            I have purchased hundreds and hundreds of files over the past 7 years. But there is nothing close to this
            support and professionalism. Not only is the theme simple, useful, and modern, but again, the support is
            remarkable. Very happy I got this theme! <br /> Thank you!
          </p>
          <h6>- Charlibaltimore</h6>
        </div>
        <div className="about2">
          <FaQuoteLeft style={{ fontSize: '3rem', color: 'orange' }} />
          <p style={{ paddingBottom: '1.5rem' }}>
            I am a web developer; for many years, I have not seen anything clear and clean coded like Journal. It makes
            my life so much easier; thanks for the great work you have done.
          </p>
          <h6>- Chromebandit</h6>
        </div>
        <div className="about2">
          <FaQuoteLeft style={{ fontSize: '3rem', color: 'orange' }} />
          <p style={{ paddingBottom: '1.5rem' }}>
            Great toolkit for Opencart. As a base platform, Opencart can be a nightmare to modify and get looking good.
            Journal takes away all the pain.
          </p>
          <h6>- Kellyhorne</h6>
        </div>
      </div>
    </div>
  );
};

export default About;
