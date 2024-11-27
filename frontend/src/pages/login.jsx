import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useMutation } from "@tanstack/react-query";
import { login } from "../service/auth";
import { toast } from "sonner";

const Login = () => {
  const { mutate } = useMutation({
    mutationFn: (data) => login(data),
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data);
      window.location.href = "/";
    },
    onError: () => {
      toast.error("thông tin đăng nhập không chính xác");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataForm = event.target;
    const email = dataForm.email.value;
    const password = dataForm.password.value;
    mutate({ email, password });
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
              <h3 className="mb-4">Đăng Nhập</h3>
              <div className="contact-form">
                <form id="loginForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="Mật khẩu"
                      required="required"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Đăng Nhập
                  </button>
                </form>
                <p className="mt-3">
                  Bạn chưa có tài khoản?
                  <Link to="/register" className="text-primary">
                    Nhấp vào đây để Đăng Ký
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
