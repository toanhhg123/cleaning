const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-2">
            <div className="footer-link">
              <h2>TechTitans</h2>
              <a href="#/">Trang chủ</a>
              <a href="#/">Giới thiệu</a>
              <a href="#/">Dịch vụ</a>
              <a href="#/">FAQs</a>
              <a href="#/">Đánh giá</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="footer-link">
              <h2>Chính sách và hỗ trợ</h2>
              <a href="#/">Điều kiện giao dịch chung</a>
              <a href="#/">Điều khoản sử dụng</a>
              <a href="#/">Bảo mật thông tin thanh toán</a>
              <a href="#/">Chính sách vận chuyển và giao nhận</a>
              <a href="#/">Chính sách bảo vệ dữ liệu cá nhân</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Liên Hệ</h2>
              <p>
                <i className="fa fa-map-marker-alt" />
                123 Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt" />
                +012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope" />
                info@example.com
              </p>
              <div className="footer-social">
                <a href="#/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#/">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#/">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-form">
              <h2>Stay Updated</h2>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Etiam accumsan
                lacus eget velit
              </p>
              <button type="button" className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
