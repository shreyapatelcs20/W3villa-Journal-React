import './style.css'; // Make sure to import your styles

function Navbar() {
  return (
    <div>
      <div className="menu-container">
        <ul className="home1">
          <li><i className="fa-solid fa-house"></i> Home</li>
          <li><i className="fa-solid fa-star"></i> About Us</li>
          <li><i className="fa-regular fa-envelope"></i> Contact</li>
          <li><i className="fa-regular fa-circle-question"></i> FAQ <i className="fa-solid fa-caret-down"></i></li>
        </ul>

        <ul className="home2">
          <li>
            <i className="fa-sharp fa-solid fa-flag-usa" style={{ color: 'red' }}></i> English <i className="fa-solid fa-caret-down"></i>
          </li>
          <li><i className="fa-sharp fa-regular fa-dollar-sign"></i> US Dollar <i className="fa-solid fa-caret-down"></i></li>
        </ul>

        <ul className="home3">
          <li>
            <i className="fa-solid fa-user"></i> <i className="fa-solid fa-bars"></i> More Menus <i className="fa-solid fa-caret-down"></i>
          </li>
          <li><i className="fa-solid fa-truck"></i> Delivery</li>
        </ul>
      </div>

      <div className="navbar">
        <div className="journal" style={{ paddingLeft: '4.5rem' }}>
          <h1>JOURNAL</h1>
        </div>

        <div className="button">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: 'rgba(13, 82, 214, 1)' }}
            >
              All
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Fashion</a></li>
              <li><a className="dropdown-item" href="#">Bags</a></li>
              <li><a className="dropdown-item" href="#">Health & Beauty</a></li>
              <li><a className="dropdown-item" href="#">Footwear</a></li>
              <li><a className="dropdown-item" href="#">Home Decor</a></li>
              <li><a className="dropdown-item" href="#">All</a></li>
            </ul>
            <input type="text" className="search" placeholder="Search Here" style={{ height: '2rem' }} />
            <button className="all"><i className="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </div>

        <div className="journal-container">
          <div className="journal-btn">
            <i className="fa-solid fa-circle-user" style={{ display: 'block' }}></i>Login
          </div>
          <div className="journal-btn">
            <i className="fa-solid fa-pen" style={{ display: 'block' }}></i> Register
          </div>
          <div className="journal-btn">
            <i className="fa-regular fa-heart" style={{ display: 'block' }}></i> Wishlist
          </div>
          <div className="journal-btn">
            <i className="fa-solid fa-arrow-right-arrow-left" style={{ display: 'block' }}></i> Compare
          </div>
        </div>

        <div className="shopping-container">
          <a>0 items - $0.00</a>
          <button className="shopping">
            <i className="fa-solid fa-cart-shopping" style={{ color: 'white' }}></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
