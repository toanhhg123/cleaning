import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getServicesById } from "../service/service";
import { createOrder } from "../service/order";
import { toast } from "sonner";

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      navigate("/my-orders");
    },
  });

  const handleOrder = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { dateFrom, dateTo } = Object.fromEntries(formData);

    mutate({
      serviceId: id,
      dateFrom: new Date(dateFrom).valueOf(),
      dateTo: new Date(dateTo).valueOf(),
    });
  };

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

      {data && (
        <div className="about" style={{ marginTop: 95 }}>
          <div className="service-detail mt-5">
            <div className="container">
              <div className="row g-5">
                {/* Service Image */}
                <div className="col-lg-5 col-md-6">
                  <div className="card border-0 shadow-sm">
                    <img
                      id="service-image"
                      className="card-img-top rounded"
                      alt="Service"
                      src={data.image || "/img/service-1.jpg"}
                    />
                  </div>
                </div>

                {/* Service Info */}
                <div className="col-lg-7 col-md-6">
                  <h3 id="service-name" className="text-primary fw-bold">
                    {data.name}
                  </h3>
                  <h4 id="service-price" className="text-danger mb-3 fw-bold">
                    {data.price} VND
                  </h4>
                  <p id="service-description" className="text-muted">
                    {data.description}
                  </p>

                  {/* Order Form */}
                  <form className="mt-4 px-3" onSubmit={handleOrder}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="dateFrom" className="form-label">
                          <strong>From</strong>
                        </label>
                        <input
                          type="datetime-local"
                          className="form-control shadow-sm"
                          id="dateFrom"
                          name="dateFrom"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="dateTo" className="form-label">
                          <strong>To</strong>
                        </label>
                        <input
                          type="datetime-local"
                          className="form-control shadow-sm"
                          id="dateTo"
                          name="dateTo"
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg px-5 py-2 shadow"
                      >
                        Đặt dịch vụ
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default ServiceDetails;
