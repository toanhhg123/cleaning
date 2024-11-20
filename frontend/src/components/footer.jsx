const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Get In Touch</h2>
              <p>
                <i className="fa fa-map-marker-alt"></i>123 Street, New York,
                USA
              </p>
              <p>
                <i className="fa fa-phone-alt"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope"></i>info@example.com
              </p>
              <div className="footer-social">
                <a href="#/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#/">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Link</h2>
              <a href="#/">About Us</a>
              <a href="#/">Our Story</a>
              <a href="#/">Our Services</a>
              <a href="#/">Our Projects</a>
              <a href="#/">Contact Us</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Link</h2>
              <a href="#/">Our Clients</a>
              <a href="#/">Clients Review</a>
              <a href="#/">Ongoing Project</a>
              <a href="#/">Customer Support</a>
              <a href="#/">FAQs</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-form">
              <h2>Stay Updated</h2>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Etiam accumsan
                lacus eget velit
              </p>
              <input className="form-control" placeholder="Email here" />
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a href="#/">Terms of use</a>
          <a href="#/">Privacy policy</a>
          <a href="#/">Cookies</a>
          <a href="#/">Help & FQAs</a>
          <a href="#/">Contact us</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; <a href="#/">HTML Codex</a>, All Right Reserved.
            </p>
          </div>
          <div className="col-md-6">
            <p>
              Designed By <a href="#/">HTML Codex</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
