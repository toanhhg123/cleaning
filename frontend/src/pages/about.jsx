import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

const About = () => {
  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Giới thiệu</h2>
            </div>
            <div className="col-12">
              <Link to="/">Trang chủ</Link>
              <Link to="/about">Giới thiệu</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}
      {/* Story Start */}
      <div className="story">
        <div className="container">
          <div className="section-header">
            <p>Lịch sử công ty</p>
            <h2 style={{ width: 600 }}>Hành trình của chúng tôi</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="story-container">
                <div className="story-end">
                  <p>Hiện tại</p>
                </div>
                <div className="story-continue">
                  <div className="row story-right">
                    <div className="col-md-6">
                      <p className="story-date">29/11/2024</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-text">
                          <h3>Kế hoạch mở rộng</h3>
                          <p>
                            Đón chào năm mới với kế hoạch mở rộng quy mô dịch vụ
                            và nâng cao chất lượng phục vụ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row story-left">
                    <div className="col-md-6 d-md-none d-block">
                      <p className="story-date">8/11/2024</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-text">
                          <h3>Ra mắt dịch vụ mới</h3>
                          <p>
                            Chúng tôi chính thức ra mắt dịch vụ vệ sinh mới,
                            mang đến nhiều lựa chọn và giải pháp linh hoạt đáp
                            ứng nhu cầu cho khách hàng.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                      <p className="story-date">8/11/2024</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="story-year">
                        <p>Tháng 11</p>
                      </div>
                    </div>
                  </div>
                  <div className="row story-right">
                    <div className="col-md-6">
                      <p className="story-date">19/10/2024</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-text">
                          <h3>Cải tiến quy trình</h3>
                          <p>
                            Cải tiến quy trình làm việc để nâng cao hiệu quả và
                            chất lượng dịch vụ. Các bước quy trình mới giúp tối
                            ưu hóa thời gian.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row story-left">
                    <div className="col-md-6 d-md-none d-block">
                      <p className="story-date">01/10/2024</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-text">
                          <h3>Mở rộng đội ngũ</h3>
                          <p>
                            Đội ngũ nhân viên được mở rộng và đào tạo bài bản
                            nhằm nâng cao kỹ năng phục vụ. Chúng tôi tin rằng
                            nhân viên chuyên nghiệp là chìa khóa cho sự thành
                            công của dịch vụ.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                      <p className="story-date">01/10/2024</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="story-year">
                        <p>Tháng 10</p>
                      </div>
                    </div>
                  </div>
                  <div className="row story-right">
                    <div className="col-md-6">
                      <p className="story-date">15/09/2024</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-text">
                          <h3>Sự kiện giới thiệu</h3>
                          <p>
                            Tổ chức sự kiện tại địa phương để giới thiệu dịch vụ
                            và thu hút sự quan tâm từ cộng đồng. Đây là cơ hội
                            để khách hàng giao lưu với đội ngũ nhân viên và hiểu
                            rõ hơn.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row story-left">
                    <div className="col-md-6 d-md-none d-block">
                      <p className="story-date">15/09/2024</p>
                    </div>
                    <div className="col-md-6">
                      <div className="story-box">
                        <div className="story-text">
                          <h3>Ra mắt dịch vụ</h3>
                          <p>
                            Dịch vụ vệ sinh chuyên nghiệp đầu tiên của chúng tôi
                            ra mắt và nhanh chóng được khách hàng đón nhận.
                            Chúng tôi tập trung vào chất lượng và sự hài lòng
                            của khách hàng.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-block d-none">
                      <p className="story-date">15/08/2024</p>
                    </div>
                  </div>
                </div>
                <div className="story-start">
                  <p>Bắt đầu</p>
                </div>
                <div className="story-launch">
                  <div className="story-box">
                    <div className="story-text">
                      <h3>Thành lập công ty ngày 15/7/2024</h3>
                      <p>
                        Công ty được thành lập với mục tiêu cung cấp dịch vụ vệ
                        sinh chất lượng cho khách hàng. Chúng tôi cam kết mang
                        đến môi trường sạch sẽ và an toàn cho mọi không gian
                        sống.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Story End */}
      {/* Team Start */}
      <div className="team">
        <div className="container">
          <div className="section-header">
            {/* <p>Thành Lập</p> */}
            <h2 style={{ width: 600 }}>Những Người Sáng Lập</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/tuan.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Lê Anh Tuấn</h2>
                  <h3>Developer</h3>
                  <div className="team-social">
                    <a
                      className="social-tw"
                      href="https://www.facebook.com/anhtuan.2501"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="social-fb"
                      href="https://www.facebook.com/anhtuan.2501"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="social-li"
                      href="https://www.facebook.com/anhtuan.2501"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      className="social-in"
                      href="https://www.facebook.com/anhtuan.2501"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/thao.jpg" alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Thu Thảo</h2>
                  <h3>Developer</h3>
                  <div className="team-social">
                    <a className="social-tw" href="#/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="social-fb" href="#/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="social-li" href="#/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a className="social-in" href="#/">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="team-item">
                <div className="team-img">
                  <img src="img/hieu chim.jpg" alt="Team " />
                </div>
                <div className="team-text">
                  <h2>Hoàng Trung Hiếu</h2>
                  <h3>Developer</h3>
                  <div className="team-social">
                    <a
                      className="social-tw"
                      href="https://www.facebook.com/profile.php?id=100023731251523"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="social-fb"
                      href="https://www.facebook.com/profile.php?id=100023731251523"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="social-li"
                      href="https://www.facebook.com/profile.php?id=100023731251523"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a
                      className="social-in"
                      href="https://www.facebook.com/profile.php?id=100023731251523"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
      </div>

      <Footer />
    </>
  );
};

export default About;
