import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../service/service";

const Service = () => {
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: () => getServices(),
  });

  const services = data || [];

  return (
    <>
      <Header />

      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Dịch vụ của chúng tôi</h2>
            </div>
            <div className="col-12">
              <Link to="/">Trang chủ</Link>
              <Link to="/service">Dịch vụ</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Service Start */}
      <div className="service">
        <div className="container">
          <div className="section-header">
            <h2>Cung cấp tất cả các dịch vụ dọn dẹp</h2>
          </div>
          <div className="row">
            {services.map((service) => {
              return (
                <div className="col-lg-3 col-md-6" key={service.id}>
                  <div className="service-item">
                    <img src="/img/service-1.jpg" alt="Service" />
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <Link className="btn" to={`/service-detail/${service.id}`}>
                      Chi tiết
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Service;
