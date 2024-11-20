import Footer from "../components/footer";
import Header from "../components/header";

const Service = () => {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Services</h2>
            </div>
            <div className="col-12">
              <a href>Home</a>
              <a href>Our Services</a>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="service">
        <div className="container">
          <div className="section-header">
            <p>Our Services</p>
            <h2>Provide Services Worldwide</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/service-1.jpg" alt="Service" />
                <h3>Flour Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <a className="btn" href>
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/service-2.jpg" alt="Service" />
                <h3>Glass Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <a className="btn" href>
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/service-3.jpg" alt="Service" />
                <h3>Carpet Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <a className="btn" href>
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="/img/service-4.jpg" alt="Service" />
                <h3>Toilet Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <a className="btn" href>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Feature Start */}
      <div className="feature">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="section-header left">
                <p>Why Choose Us</p>
                <h2>Expert Cleaners and World Class Services</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                vulputate. Aliquam metus tortor, auctor id gravida condimentum,
                viverra quis sem. Curabitur non nisl nec nisi scelerisque
                maximus. Aenean consectetur convallis porttitor. Aliquam
                interdum at lacus non blandit.
              </p>
              <a className="btn" href>
                Learn More
              </a>
            </div>
            <div className="col-md-7">
              <div className="row align-items-center feature-item">
                <div className="col-5">
                  <img src="/img/feature-1.jpg" alt="Feature" />
                </div>
                <div className="col-7">
                  <h3>Expert Cleaners</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulputate.
                  </p>
                </div>
              </div>
              <div className="row align-items-center feature-item">
                <div className="col-5">
                  <img src="/img/feature-2.jpg" alt="Feature" />
                </div>
                <div className="col-7">
                  <h3>Reasonable Prices</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulputate.
                  </p>
                </div>
              </div>
              <div className="row align-items-center feature-item">
                <div className="col-5">
                  <img src="/img/feature-3.jpg" alt="Feature" />
                </div>
                <div className="col-7">
                  <h3>Quick &amp; Best Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                    Curabitur facilisis ornare velit non vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
      {/* Pricing Plan Start */}
      <div className="price">
        <div className="container">
          <div className="section-header">
            <p>Pricing Plan</p>
            <h2>No Extra Hidden Charges</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <div className="price-icon">
                    <i className="fa fa-home" />
                  </div>
                  <div className="price-title">
                    <h2>Standard</h2>
                  </div>
                  <div className="price-pricing">
                    <h2>
                      <small>$</small>99
                    </h2>
                  </div>
                </div>
                <div className="price-body">
                  <div className="price-des">
                    <ul>
                      <li>3 Bedrooms cleaning</li>
                      <li>2 Bathrooms cleaning</li>
                      <li>1 Living room Cleaning</li>
                      <li>Vacuum Cleaning</li>
                      <li>Within 6 Hours</li>
                    </ul>
                  </div>
                </div>
                <div className="price-footer">
                  <div className="price-action">
                    <a href>
                      <i className="fa fa-shopping-cart" /> Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item featured-item">
                <div className="price-header">
                  <div className="price-icon">
                    <i className="fa fa-star" />
                  </div>
                  <div className="price-title">
                    <h2>Premium</h2>
                  </div>
                  <div className="price-pricing">
                    <h2>
                      <small>$</small>149
                    </h2>
                  </div>
                </div>
                <div className="price-body">
                  <div className="price-des">
                    <ul>
                      <li>5 Bedrooms cleaning</li>
                      <li>3 Bathrooms cleaning</li>
                      <li>2 Living room Cleaning</li>
                      <li>Vacuum Cleaning</li>
                      <li>Within 6 Hours</li>
                    </ul>
                  </div>
                </div>
                <div className="price-footer">
                  <div className="price-action">
                    <a href>
                      <i className="fa fa-shopping-cart" /> Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <div className="price-icon">
                    <i className="fa fa-gift" />
                  </div>
                  <div className="price-title">
                    <h2>Enterprise</h2>
                  </div>
                  <div className="price-pricing">
                    <h2>
                      <small>$</small>199
                    </h2>
                  </div>
                </div>
                <div className="price-body">
                  <div className="price-des">
                    <ul>
                      <li>8 Bedrooms cleaning</li>
                      <li>5 Bathrooms cleaning</li>
                      <li>3 Living room Cleaning</li>
                      <li>Vacuum Cleaning</li>
                      <li>Within 12 Hours</li>
                    </ul>
                  </div>
                </div>
                <div className="price-footer">
                  <div className="price-action">
                    <a href>
                      <i className="fa fa-shopping-cart" /> Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Plan End */}

      <Footer />
    </>
  );
};

export default Service;
