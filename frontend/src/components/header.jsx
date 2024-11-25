import { Link, useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="header home">
      <div className="container-fluid">
        <div className="header-top row align-items-center">
          <div className="col-lg-3">
            <div className="brand">
              <a to="index.html" className="d-flex">
                <img src="/img/2-removebg-preview.png" alt="Logo" />
                TechTitans
              </a>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="navbar navbar-expand-lg bg-light navbar-light">
              <a to="#" className="navbar-brand">
                MENU
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mx-auto">
                  <Link to="/" className="nav-item nav-link active">
                    Trang chủ
                  </Link>
                  <Link to="/about" className="nav-item nav-link">
                    Giới thiệu
                  </Link>
                  <Link to="/service" className="nav-item nav-link">
                    Dịch vụ
                  </Link>
                  <Link to="/complaint" className="nav-item nav-link">
                    Khiếu nại
                  </Link>
                  <Link to="/contact" className="nav-item nav-link">
                    Liên hệ
                  </Link>
                </div>
                <div className="d-flex me-0">
                  <Link to="order-history.html" className="nav-item nav-link">
                    <i className="fas fa-clipboard fa-2x" />
                  </Link>
                  <div className="nav-item dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fas fa-user fa-2x" />
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="login.html" className="dropdown-item">
                        Đăng nhập
                      </Link>
                      <Link to="register.html" className="dropdown-item">
                        Đăng ký
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isHomePage && (
          <div className="hero row">
            <div className="col-md-5">
              <h2>Dịch vụ Vệ sinh</h2>
              <h2>
                <span>Tốt &amp; Đáng Tin Cậy</span>
              </h2>
              <p>
                Sạch sẽ từng góc, sống khỏe từng phút, để không gian thêm bùng
                nổ!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
