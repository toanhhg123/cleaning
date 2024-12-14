import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Footer from "../components/footer";
import Header from "../components/header";
import { createContact } from "../service/contact";

const Contact = () => {
  const { mutate } = useMutation({
    mutationFn: (data) => createContact(data),
    onSuccess: () => {
      toast.success("thành công");
    },
    onError: () => {
      toast.error("lỗi không xác định");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    mutate(data);

    e.target.reset();
  };

  return (
    <>
      <Header />

      <div>
        {/* Page Header Start */}
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Liên hệ</h2>
              </div>
              <div className="col-12">
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Liên hệ</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        {/* Contact Start */}
        <div className="contact" style={{ marginTop: "-80px" }}>
          <div className="container text-center">
            <h3 className="mt-5 mb-5">Gửi thông tin liên hệ</h3>
            <div className="row d-flex justify-content-center">
              <div className="col-md-9">
                <div className="contact-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Họ và tên"
                          required="required"
                          name="username"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Chủ đề"
                        required="required"
                        name="title"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={6}
                        placeholder="Lời nhắn"
                        required="required"
                        name="message"
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
