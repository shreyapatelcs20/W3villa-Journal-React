
import OwlCarousel from 'react-owl-carousel';  // Import the OwlCarousel component
import 'owl.carousel/dist/assets/owl.carousel.css';  // Import Owl Carousel's CSS
import 'owl.carousel/dist/assets/owl.theme.default.css';  // Optional: Import the default theme
import './style.css';  // Import your custom styles
import blogImage from '../assets/blog.jpeg';
import handbagImage from '../assets/handbag2.jpg';
import blog2Image from '../assets/blog2.png';
import Button3 from './button3.jsx'

const BlogCarousel = () => {

  const blogPosts = [
    {
      imgSrc: blogImage,
      author: 'admin',
      comments: 38,
      views: 19340,
      title: 'Journal Blog is Here',
      text: `Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, 
             including custom drop-cap support as well as optional newspaper-like fluid columns. You can break up 
             the page in up to 4 columns and change the configuration per breakpoint for the best article layout 
             on any screen width. The Journal blog is b...`,
    },
    {
      imgSrc: handbagImage,
      author: 'admin',
      comments: 38,
      views: 19340,
      title: 'Best Leather Bags',
      text: `Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, 
             including custom drop-cap support as well as optional newspaper-like fluid columns. You can break up 
             the page in up to 4 columns and change the configuration per breakpoint for the best article layout 
             on any screen width. The Journal blog is b...`,
    },
    {
      imgSrc: blog2Image,
      author: 'admin',
      comments: 38,
      views: 19340,
      title: 'Another Blog Post',
      text: `Journal 3 blog has been greatly improved and it now comes with the most advanced set of typography tools, 
             including custom drop-cap support as well as optional newspaper-like fluid columns. You can break up 
             the page in up to 4 columns and change the configuration per breakpoint for the best article layout 
             on any screen width. The Journal blog is b...`,
    },
  ];

  return (
    <div className="our-blog-container">
      <h2>From our Blog</h2>
      <div style={{ color: 'grey', textAlign: 'center', paddingTop: '2rem' }}>
        <p>
          Journal comes with its own simple yet powerful blog. With the new advanced typography styles your post page design will be unmatched.
        </p>
      </div>

      {/* Toggle Button Group */}
      {/* <div className="btn-group" role="group" aria-label="Basic radio toggle button group" style={{ paddingBottom: '2rem' }}>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio9"
          autoComplete="off"
          checked={selectedCategory === 'latest'}
          onChange={() => setSelectedCategory('latest')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio9">LATEST POST</label>

        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id="btnradio10"
          autoComplete="off"
          checked={selectedCategory === 'most-read'}
          onChange={() => setSelectedCategory('most-read')}
        />
        <label className="btn btn-outline-primary" htmlFor="btnradio10">MOST READ</label>
      </div> */}
      <Button3 />

      {/* Blog Carousel */}
      <OwlCarousel 
        className='owl-theme'
        loop
        margin={10}
        nav
        items={3}  // Number of items to show
        autoplay
        autoplayTimeout={3000}
        autoplayHoverPause
      >
        {blogPosts.map((post, index) => (
          <div className="item" key={index}>
            <div className="card">
              <img src={post.imgSrc} className="card-img-top" alt="Blog Post" />
              <div>
                <i className="fa-solid fa-user"></i> {post.author}
                <i className="fa-regular fa-comment-dots"></i> {post.comments}
                <i className="fa-solid fa-eye"></i> {post.views}
              </div>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.text}</p>
              </div>
              <div>
                <button className="read">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default BlogCarousel;
