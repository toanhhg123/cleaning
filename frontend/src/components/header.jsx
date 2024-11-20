import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header home">
      <div className="container-fluid">
        <div className="header-top row align-items-center">
          <div className="col-lg-3">
            <div className="brand">
              <Link to="index.html">CleanMe</Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="topbar">
              <div className="topbar-col">
                <Link to="tel:+012 345 67890">
                  <i className="fa fa-phone-alt"></i>+012 345 67890
                </Link>
              </div>
              <div className="topbar-col">
                <Link to="mailto:info@example.com">
                  <i className="fa fa-envelope"></i>info@example.com
                </Link>
              </div>
              <div className="topbar-col">
                <div className="topbar-social">
                  <Link to="">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link to="">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="navbar navbar-expand-lg bg-light navbar-light">
              <Link to="#" className="navbar-brand">
                MENU
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav ml-auto">
                  <Link to="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link to="/about" className="nav-item nav-link">
                    About
                  </Link>
                  <Link to="/service" className="nav-item nav-link">
                    Service
                  </Link>
                  <Link to="/project" className="nav-item nav-link">
                    Project
                  </Link>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Dropdown
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="#" className="dropdown-item">
                        Sub Item 1
                      </Link>
                      <Link to="#" className="dropdown-item">
                        Sub Item 2
                      </Link>
                    </div>
                  </div>
                  <Link to="#" className="btn">
                    Get A Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero row align-items-center">
          <div className="col-md-7">
            <h2>Best & Trusted</h2>
            <h2>
              <span>Cleaning</span> Service
            </h2>
            <p>Lorem ipsum dolor sit amet elit pretium facilisis ornare</p>
            <Link className="btn" to="">
              Explore Now
            </Link>
          </div>
          <div className="col-md-5">
            <div className="form">
              <h3>Get A Quote</h3>
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Mobile Number"
                />
                <div className="control-group">
                  <select className="custom-select" defaultValue={""}>
                    <option value={""}>Choose a service</option>
                    <option value="1">House Cleaning</option>
                    <option value="2">Apartment Cleaning</option>
                    <option value="3">Office Cleaning</option>
                  </select>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Comment"
                ></textarea>
                <button className="btn btn-block">Get A Quote</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
