import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  return (
    <>
      <Header />

      {/* <!-- About Start --> */}
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="about-img">
                <img src="/img/about.jpg" alt="about" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="about-text">
                <h2>
                  <span>10</span> Years Experience
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                  vulputate. Aliquam metus tortor, auctor id gravida
                  condimentum, viverra quis sem. Curabitur non nisl nec nisi
                  scelerisque maximus. Aenean consectetur convallis porttitor.
                  Aliquam interdum at lacus non blandit.
                </p>
                <Link className="btn" to="">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Service Start --> */}
      <div className="service">
        <div className="container">
          <div className="section-header">
            <p>Our Services</p>
            <h2>Provide Services Worldwide</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="img/service-1.jpg" alt="Service" />
                <h3>Flour Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <Link className="btn" to="">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="img/service-2.jpg" alt="Service" />
                <h3>Glass Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <Link className="btn" to="">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="img/service-3.jpg" alt="Service" />
                <h3>Carpet Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <Link className="btn" to="">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="service-item">
                <img src="img/service-4.jpg" alt="Service" />
                <h3>Toilet Cleaning</h3>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare
                </p>
                <Link className="btn" to="">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Feature Start --> */}
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
              <Link className="btn" to="">
                Learn More
              </Link>
            </div>
            <div className="col-md-7">
              <div className="row align-items-center feature-item">
                <div className="col-5">
                  <img src="img/feature-1.jpg" alt="Feature" />
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
                  <img src="img/feature-2.jpg" alt="Feature" />
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
                  <img src="img/feature-3.jpg" alt="Feature" />
                </div>
                <div className="col-7">
                  <h3>Quick & Best Services</h3>
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
      {/* <!-- Feature End --> */}

      {/* <!-- Team Start --> */}
      <div className="team">
        <div className="container">
          <div className="section-header">
            <p>Team Member</p>
            <h2>Meet Our Expert Cleaners</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-1.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Josh Dunn</h2>
                  <h3>CEO</h3>
                  <div className="team-social">
                    <a className="social-tw" href="#/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-fb" href="#/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social-li" href="#/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-in" href="#/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-2.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Mollie Ross</h2>
                  <h3>Team Manager</h3>
                  <div className="team-social">
                    <a className="social-tw" href="#/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-fb" href="#/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social-li" href="#/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-in" href="#/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-3.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Dylan Adams</h2>
                  <h3>Cleaner</h3>
                  <div className="team-social">
                    <a className="social-tw" href="#/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-fb" href="#/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social-li" href="#/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-in" href="#/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="/img/team-4.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Jennifer Page</h2>
                  <h3>Cleaner</h3>
                  <div className="team-social">
                    <a className="social-tw" href="#/">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="social-fb" href="#/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="social-li" href="#/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="social-in" href="#/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      {/* <!-- FAQs Start --> */}
      <div className="faqs">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="section-header left">
                <p>You Might Ask</p>
                <h2>Frequently Asked Questions</h2>
              </div>
              <img src="/img/faqs.jpg" alt="faqs" />
            </div>
            <div className="col-md-7">
              <div id="accordion">
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link collapsed"
                      data-toggle="collapse"
                      href="#collapseOne"
                      aria-expanded="true"
                    >
                      <span>1</span> Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseTwo"
                    >
                      <span>2</span> Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseThree"
                    >
                      <span>3</span> Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseFour"
                    >
                      <span>4</span> Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapseFour"
                    >
                      <span>5</span> Lorem ipsum dolor sit amet?
                    </a>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non.
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn" href="#/">
                Ask more
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FAQs End --> */}

      {/* <!-- Pricing Plan Start --> */}
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
                    <i className="fa fa-home"></i>
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
                    <a href="#/">
                      <i className="fa fa-shopping-cart"></i>Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item featured-item">
                <div className="price-header">
                  <div className="price-icon">
                    <i className="fa fa-star"></i>
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
                    <a href="#/">
                      <i className="fa fa-shopping-cart"></i>Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="price-item">
                <div className="price-header">
                  <div className="price-icon">
                    <i className="fa fa-gift"></i>
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
                    <a href="#/">
                      <i className="fa fa-shopping-cart"></i>Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pricing Plan End --> */}

      {/* <!-- Newsletter Start --> */}
      <div className="newsletter">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h2>Get A Free Quote</h2>
              <p>Lorem ipsum dolor sit amet adipiscing elit</p>
            </div>
            <div className="col-md-4">
              <div className="form">
                <input className="form-control" placeholder="Email here" />
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Newsletter End --> */}

      {/* <!-- Testimonial Start --> */}
      <div className="testimonial">
        <div className="container">
          <div className="section-header">
            <p>Client Review</p>
            <h2>Client Says About Service</h2>
          </div>
          <div className="owl-carousel testimonials-carousel">
            <div className="testimonial-item">
              <div className="testimonial-img">
                <img src="img/testimonial-1.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  accumsan lacus eget velit
                </p>
                <h3>Customer Name</h3>
                <h4>Profession</h4>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-img">
                <img src="/img/testimonial-2.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  accumsan lacus eget velit
                </p>
                <h3>Customer Name</h3>
                <h4>Profession</h4>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-img">
                <img src="/img/testimonial-3.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  accumsan lacus eget velit
                </p>
                <h3>Customer Name</h3>
                <h4>Profession</h4>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-img">
                <img src="/img/testimonial-4.jpg" alt="" />
              </div>
              <div className="testimonial-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  accumsan lacus eget velit
                </p>
                <h3>Customer Name</h3>
                <h4>Profession</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      {/* <!-- Call to Action Start --> */}
      <div className="call-to-action">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-9">
              <h2>Get A Free Cleaning Service</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-md-3">
              <a className="btn" href="https://htmlcodex.com/contact">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Call to Action End --> */}

      {/* <!-- Blog Start --> */}
      <div className="blog">
        <div className="container">
          <div className="section-header">
            <p>Latest From Blog</p>
            <h2>Stay Updated From Our Blog</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src="/img/blog-1.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="#/">Flour Cleaning</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>11-Jun-20</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor, auctor id gravida condimentum
                </p>
                <a className="btn" href="#/">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src="/img/blog-2.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="#/">Glass Cleaning</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>11-Jun-20</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor, auctor id gravida condimentum
                </p>
                <a className="btn" href="#/">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src="/img/blog-3.jpg" alt="Blog" />
                <h3>Lorem ipsum dolor</h3>
                <div className="meta">
                  <i className="fa fa-list-alt"></i>
                  <a href="#/">Carpet Cleaning</a>
                  <i className="fa fa-calendar-alt"></i>
                  <p>11-Jun-20</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                  Curabitur facilisis ornare velit non vulputate. Aliquam metus
                  tortor, auctor id gravida condimentum
                </p>
                <a className="btn" href="#/">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}

      <Footer />
    </>
  );
};

export default Home;
