
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MenuComponent from './components/MenuComponent';
import DepartmentComponent from './components/DepartmentComponent';
import CarouselComponent from './components/CarouselComponent';
import ShippingComponent from './components/ShippingComponent';
import BuyComponent from './components/BuyComponent';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedCategory from './components/FeaturedCategory';
import BrandSlider from './components/BrandSlider';
import GalleryModule from './components/GalleryModule';
import BlogCarousel from './components/BlogCarousel';
import About from './components/about';
import MostViewed from './components/MostViewed';
import Footer from './components/Footer';
import FooterEnd from './components/FooterEnd';

function App() {

  return (
    <>
      <MenuComponent />
      <DepartmentComponent />
      <CarouselComponent />
      <ShippingComponent />
      <BuyComponent />
      <FeaturedProducts />
      <FeaturedCategory />
      <BrandSlider />
      <GalleryModule />
      <BlogCarousel />
      <About />
      <MostViewed />
      <Footer />
      <FooterEnd />
    </>
  )
}

export default App
