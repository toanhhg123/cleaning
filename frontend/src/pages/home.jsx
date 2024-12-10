import Header from "../components/header";
import Footer from "../components/footer";
import { useQuery } from "@tanstack/react-query";
import { getServiceByTag } from "../service/service";
import { Link } from "react-router-dom";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["services", "tag", "trending"],
    queryFn: () => getServiceByTag("trending"),
  });

  const services = data || [];

  console.log(services);

  return (
    <>
      <Header />

      <div>
        {/* Service Start */}
        <div className="service">
          <div className="container">
            <div className="section-header">
              <p>Dịch vụ của chúng tôi</p>
              <h2>Dịch vụ thịnh hành</h2>
            </div>
            <div className="row">
              {services.map((service) => {
                return (
                  <div className="col-lg-3 col-md-6" key={service.id}>
                    <div className="service-item">
                      <img src="/img/service-1.jpg" alt="Service" />
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <Link
                        className="btn"
                        to={`/service-detail/${service.id}`}
                      >
                        Chi tiết
                      </Link>
                    </div>
                  </div>
                );
              })}
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
                  <p>Lý do nên sử dụng dịch vụ</p>
                  <h2>Dịch vụ vệ sinh chuyên nghiệp</h2>
                </div>
                <p>
                  Sử dụng dịch vụ vệ sinh chuyên nghiệp mang lại nhiều lợi ích,
                  từ chất lượng và độ tin cậy của đội ngũ nhân viên được đào tạo
                  đến việc tiết kiệm thời gian cho bạn. Dịch vụ tùy chỉnh theo
                  nhu cầu giúp loại bỏ bụi bẩn và vi khuẩn hiệu quả, nâng cao
                  sức khỏe và thẩm mỹ không gian. Việc bảo trì vệ sinh định kỳ
                  cũng góp phần duy trì và tăng giá trị tài sản của bạn.
                </p>
                {/* <a class="btn" href="">Learn More</a> */}
              </div>
              <div className="col-md-7">
                <div className="row align-items-center feature-item">
                  <div className="col-5">
                    <img src="img/feature-1.jpg" alt="Feature" />
                  </div>
                  <div className="col-7">
                    <h3>Chuyên gia dọn dẹp</h3>
                    <p>
                      Đội ngũ chuyên gia được đào tạo chuyên sâu, sử dụng sản
                      phẩm và kỹ thuật hiện đại để làm sạch hiệu quả.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center feature-item">
                  <div className="col-5">
                    <img src="img/feature-2.jpg" alt="Feature" />
                  </div>
                  <div className="col-7">
                    <h3>Giá cả hợp lý</h3>
                    <p>
                      Dịch vụ vệ sinh với mức giá cạnh tranh, cam kết mang lại
                      giá trị tốt nhất cho khách hàng.
                    </p>
                  </div>
                </div>
                <div className="row align-items-center feature-item">
                  <div className="col-5">
                    <img src="img/feature-3.jpg" alt="Feature" />
                  </div>
                  <div className="col-7">
                    <h3>Dịch vụ nhanh chóng và tốt nhất</h3>
                    <p>
                      Chúng tôi đảm bảo hoàn thành công việc nhanh chóng, hiệu
                      quả, luôn đạt tiêu chuẩn vệ sinh cao.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Team Start */}
        <div className="team">
          <div className="container">
            <div className="section-header">
              <p>Thành viên nhóm</p>
              <h2>Những người dọn dẹp chuyên nghiệp</h2>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-1.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h2>Josh Dunn</h2>
                    <h3>CEO</h3>
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
                    <img src="img/team-2.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h2>Mollie Ross</h2>
                    <h3>Team Manager</h3>
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
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-3.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h2>Dylan Adams</h2>
                    <h3>Cleaner</h3>
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
              <div className="col-lg-3 col-md-6">
                <div className="team-item">
                  <div className="team-img">
                    <img src="img/team-4.jpg" alt="Team" />
                  </div>
                  <div className="team-text">
                    <h2>Jennifer Page</h2>
                    <h3>Cleaner</h3>
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
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* FAQs Start */}
        <div className="faqs">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="section-header left">
                  <p>Bạn Có Thể Hỏi</p>
                  <h2>Các Câu Hỏi Thường Gặp</h2>
                </div>
                <img src="img/faqs.jpg" alt="" />
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
                        <span>1</span> Dịch vụ dọn dẹp của bạn bao gồm những gì?
                      </a>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Chúng tôi cung cấp nhiều dịch vụ dọn dẹp, bao gồm vệ
                        sinh toàn bộ nhà, dọn dẹp theo yêu cầu, vệ sinh định kỳ,
                        và dọn dẹp sau sự kiện. Bạn có thể tùy chỉnh dịch vụ
                        theo nhu cầu cụ thể của mình.
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
                        <span>2</span> Tôi có thể thay đổi hoặc hủy lịch hẹn
                        không?
                      </a>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Có, bạn có thể thay đổi hoặc hủy lịch hẹn miễn là thông
                        báo cho chúng tôi ít nhất 24 giờ trước thời gian dự
                        kiến. Chúng tôi sẽ hỗ trợ bạn sắp xếp lại lịch hẹn một
                        cách thuận tiện nhất.
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
                        <span>3</span> Nhân viên dọn dẹp có được đào tạo không?
                      </a>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Có, tất cả nhân viên dọn dẹp của chúng tôi đều được đào
                        tạo bài bản về kỹ thuật dọn dẹp chuyên nghiệp và sử dụng
                        các sản phẩm vệ sinh an toàn, hiệu quả.
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
                        <span>4</span> Tôi có cần phải có mặt khi nhân viên dọn
                        dẹp đến không?
                      </a>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Không cần thiết. Bạn có thể để nhân viên vào nhà và đi
                        làm việc khác. Chúng tôi cam kết giữ an toàn cho tài sản
                        của bạn trong suốt quá trình dọn dẹp.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        className="card-link"
                        data-toggle="collapse"
                        href="#collapseFive"
                      >
                        <span>5</span> Phí dịch vụ dọn dẹp được tính như thế
                        nào?
                      </a>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Phí dịch vụ dọn dẹp phụ thuộc vào diện tích cần dọn,
                        loại dịch vụ bạn chọn và tần suất dọn dẹp. Chúng tôi sẽ
                        cung cấp báo giá cụ thể sau khi bạn điền thông tin yêu
                        cầu trên trang web của chúng tôi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs End */}
        {/* Testimonial Start */}
        <div className="testimonial">
          <div className="container">
            <div className="section-header">
              <p>Đánh giá</p>
              <h2>Đánh giá Của Khách Hàng Về Dịch Vụ</h2>
            </div>
            <div className="owl-carousel testimonials-carousel">
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-1.jpg" alt="" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam accumsan lacus eget velit
                  </p>
                  <h3>Customer Name</h3>
                  <h4>Profession</h4>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-2.jpg" alt="" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam accumsan lacus eget velit
                  </p>
                  <h3>Customer Name</h3>
                  <h4>Profession</h4>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-3.jpg" alt="" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam accumsan lacus eget velit
                  </p>
                  <h3>Customer Name</h3>
                  <h4>Profession</h4>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-img">
                  <img src="img/testimonial-4.jpg" alt="" />
                </div>
                <div className="testimonial-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam accumsan lacus eget velit
                  </p>
                  <h3>Customer Name</h3>
                  <h4>Profession</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
