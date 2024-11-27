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
                <h2>Đánh giá</h2>
              </div>
              <div className="col-12">
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Dánh giá</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        {/* Contact Start */}
        <div className="contact" style={{ marginTop: "-80px" }}>
          <div className="container text-center">
            <h3 className="mt-5 mb-5">Gửi đánh giá</h3>
            <div className="row d-flex justify-content-center">
              <div className="col-md-9">
                <div className="contact-form">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Họ và tên"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Chủ đề"
                        required="required"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={6}
                        placeholder="Lời nhắn"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <button className="btn" type="submit">
                        Xác nhận
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}

        {/* Contact End */}
      </div>

      <Footer />
    </>
  );
};

export default Contact;
