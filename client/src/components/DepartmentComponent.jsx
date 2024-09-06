
import './style.css'; // Import your custom CSS

function DepartmentContainer() {
  return (
    <div className="department-container">
      <div className="all-department" style={{ paddingBottom: '0.8rem' }}>
        <ul>
          <div className="department">
            <li>
              <i className="fa-solid fa-bars"></i> ALL DEPARTMENTS
            </li>
          </div>
          <li>MULTILEVEL</li>
          <li>MEGA MENU</li>
          <li>FULLWIDTH</li>
        </ul>
      </div>

      <div className="blog-container">
        <ul>
          <li>
            <i className="fa-solid fa-phone-volume" style={{ color: 'rgb(242, 241, 246)' }}></i> 1.800.555.6789
          </li>
          <div className="blog">
            <li style={{ paddingBottom: '0.6rem' }}>
              <i className="fa-regular fa-message"></i> BLOG
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default DepartmentContainer;
