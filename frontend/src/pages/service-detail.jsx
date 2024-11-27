import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getServicesById } from "../service/service";
import { createOrder } from "../service/order";
import { toast } from "sonner";

const ServiceDetails = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["service", id],
    queryFn: () => getServicesById(id),
  });

  const { mutate } = useMutation({
    mutationFn: (order) => createOrder(order),
    onSuccess: () => {
      toast.success("Đặt dịch vụ thành công");
      queryClient.invalidateQueries(["orders"]);
    },
  });

  const handleOrder = () => {
    const order = {
      serviceId: id,
    };

    mutate(order);
  };

  if (!data) return null;

  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Đặt dịch vụ</h2>
            </div>
            <div className="col-12">
              <a href="/">Trang chủ</a> /<a href="/service">Dịch vụ</a> /
            </div>
          </div>
        </div>
      </div>

      <div className="about" style={{ marginTop: 95 }}>
        <div className="service-detail mt-5">
          <div className="container">
            <div className="row">
              {/* Ảnh dịch vụ */}
              <div className="col-lg-5 col-md-6">
                <img
                  id="service-image"
                  className="img-fluid"
                  alt=""
                  src="/img/service-1.jpg"
                />
              </div>
              {/* Thông tin dịch vụ */}
              <div className="col-lg-7 col-md-6">
                <h3 id="service-name">{data.name}</h3>
                <h4 id="service-price" className="text-primary">
                  {data.price}
                </h4>
                <p id="service-description">{data.description}</p>
              </div>
              <div
                style={{
                  marginTop: 50,
                }}
              >
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleOrder}
                >
                  Đặt dịch vụ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;
