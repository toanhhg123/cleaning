import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const Contact = () => {
  return (
    <>
      <Header />

      <div>
        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Contact Us</h2>
              </div>
              <div className="col-12">
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        <div className="contact">
          <div className="container">
            <div className="section-header">
              <p>Contact Us</p>
              <h2>Find Your Answer / Send Message</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="faqs">
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contact-form">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={6}
                        placeholder="Message"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button className="btn" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
      </div>

      <Footer />
    </>
  );
};

export default Contact;
