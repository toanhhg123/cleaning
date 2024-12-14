import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Footer from "../components/footer";
import Header from "../components/header";
import useUser from "../hooks/useUser";
import { createFeedback } from "../service/feedback";

const Feedback = () => {
  const { userInfo } = useUser();
  const { mutate } = useMutation({
    mutationFn: (data) => createFeedback(data),
    onSuccess: () => {
      toast.success("đánh giá thành công");
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
                <h2>Khiếu nại</h2>
              </div>
              <div className="col-12">
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Khiếu nại</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header End */}
        {/* Contact Start */}
        {/* Contact Start */}

        {userInfo ? (
          <div className="contact" style={{ marginTop: "-80px" }}>
            <div className="container text-center">
              <h3 className="mt-5 mb-5">Gửi đánh giá</h3>
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
                            defaultValue={userInfo.fullName}
                            readOnly
                            disabled
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required="required"
                            defaultValue={userInfo.email}
                            readOnly
                            disabled
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
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Số sao(1-5)"
                          required="required"
                          name="rating"
                          defaultValue={4}
                          min={1}
                          max={5}
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
        ) : (
          <h3 className="mt-5 mb-5" style={{ textAlign: "center" }}>
            Vui lòng đăng nhập
          </h3>
        )}
        {/* Contact End */}

        {/* Contact End */}
      </div>

      <Footer />
    </>
  );
};

export default Feedback;
