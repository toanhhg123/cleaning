import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Footer from "../components/footer";
import Header from "../components/header";
import useUser from "../hooks/useUser";
import { changePassword } from "../service/auth";

const ChangePassword = () => {
  const { userInfo } = useUser();
  const { mutate } = useMutation({
    mutationFn: (data) => changePassword(data),
    onSuccess: () => {
      toast.success("Thay đổi mật khẩu thành công!");
    },
    onError: () => {
      toast.error("thông tin đăng nhập không chính xác");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = event.target;

    const email = userInfo.email;
    const password = dataForm.password.value;
    const newPassword = dataForm.newPassword.value;

    mutate({ email, password, newPassword });

    event.target.reset();
  };

  return (
    <>
      <Header />
      <div
        className="contact d-flex justify-content-center align-items-center"
        style={{
          marginTop: 40,
          background: 'url("./img/banner 4.jpg") no-repeat center center/cover',
          height: 700,
        }}
      >
        <div className="container text-center">
          <div className="row d-flex justify-content-center">
            <div
              className="col-md-5 p-4"
              style={{
                borderRadius: 10,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <h3 className="mb-4">Đổi mật khẩu</h3>
              <div className="contact-form">
                <form id="loginForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Mật khẩu cũ"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      className="form-control"
                      placeholder="Mật khẩu mới"
                      required="required"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Thay đổi
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ChangePassword;
