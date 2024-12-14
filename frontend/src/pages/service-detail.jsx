import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import Footer from "../components/footer";
import Header from "../components/header";
import { useRole } from "../hooks/useUser";
import useWallet from "../hooks/useWallet";
import { createOrder } from "../service/order";
import { getServicesById } from "../service/service";
import { getServiceFeedbackByServiceId } from "../service/serviceFeedback";

const ServiceDetails = () => {
  const role = useRole();

  const { id } = useParams();
  const navigate = useNavigate();
  const { data: wallet } = useWallet();

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["service", id],
    queryFn: () => getServicesById(id),
  });

  const { data: feedbacks } = useQuery({
    queryKey: ["serviceFeedback", id],
    queryFn: () => getServiceFeedbackByServiceId(id),
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
    const { dateFrom, dateTo, address } = Object.fromEntries(formData);

    if (wallet && wallet.balance < data.price) {
      toast.error("vui lòng nạp thêm tiền vào tài khoản");
      return;
    }

    mutate({
      serviceId: id,
      dateFrom: new Date(dateFrom).valueOf(),
      dateTo: new Date(dateTo).valueOf(),
      address,
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
        <div className="about py-5" style={{ marginTop: 95 }}>
          <div className="service-detail">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="card border-0 rounded-4">
                    <div className="row align-items-center g-4">
                      {/* Service Image */}
                      <div className="col-md-6">
                        <img
                          id="service-image"
                          className="img-fluid rounded-4 shadow-sm"
                          alt="Service"
                          src={data.image || "/img/service-1.jpg"}
                        />
                      </div>

                      {/* Service Info */}
                      <div className="col-md-6">
                        <h3
                          id="service-name"
                          className="text-primary fw-bold mb-2"
                        >
                          {data.name}
                        </h3>
                        <h4 id="service-price" className="text-danger fw-bold">
                          {data.price} VND
                        </h4>
                        <ul className="list-unstyled mt-3">
                          <li className="mb-2">
                            <strong>Số điện thoại:</strong> {data?.phone}
                          </li>
                          <li className="mb-2">
                            <strong>Địa chỉ:</strong> {data?.address}
                          </li>
                          <li className="mb-2">
                            <strong>Thẻ:</strong> {data?.tag}
                          </li>
                          <li>
                            <strong>Mô tả:</strong> {data.description}
                          </li>
                        </ul>

                        {/* Order Form */}
                        {role === "customer" && (
                          <form className="mt-4" onSubmit={handleOrder}>
                            <div className="row g-3">
                              <div className="col-md-6">
                                <label
                                  htmlFor="dateFrom"
                                  className="form-label fw-semibold"
                                >
                                  From
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
                                <label
                                  htmlFor="dateTo"
                                  className="form-label fw-semibold"
                                >
                                  To
                                </label>
                                <input
                                  type="datetime-local"
                                  className="form-control shadow-sm"
                                  id="dateTo"
                                  name="dateTo"
                                  required
                                />
                              </div>

                              <div className="col-md-12 mt-2">
                                <label
                                  htmlFor="dateTo"
                                  className="form-label fw-semibold"
                                >
                                  Địa chỉ
                                </label>
                                <textarea
                                  className="form-control shadow-sm"
                                  name="address"
                                  id=""
                                />
                              </div>
                            </div>
                            <div className="mt-4 text-center">
                              <button
                                type="submit"
                                className="btn btn-gradient btn-lg px-5 py-2"
                              >
                                Đặt dịch vụ
                              </button>
                            </div>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-4">
        <h2>Feedback List</h2>
        <div className="row">
          {feedbacks?.map((feedback) => (
            <div key={feedback.id} className="col-md-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{feedback.title}</h5>
                  <h6 className="text-muted">Rating: {feedback.rating} / 5</h6>
                  <p className="card-text">{feedback.message}</p>
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>By:</strong> {feedback.user.fullName}
                    </div>
                    <div>
                      <strong>Service:</strong> {feedback.service.name}
                    </div>
                  </div>
                  <div className="text-muted mt-2">
                    <small>
                      Feedback created on:{" "}
                      {new Date(feedback.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServiceDetails;
