import { useQuery } from "@tanstack/react-query";
import Footer from "../components/footer";
import Header from "../components/header";
import { getMyWorks } from "../service/order";
import { Link } from "react-router-dom";

const MyWorksPage = () => {
  const { data } = useQuery({
    queryKey: ["orders", "my-works"],
    queryFn: () => getMyWorks(),
  });

  const orders = data || [];

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "200px" }}>
        <h2 className="text-center mb-4">Danh sách don hang</h2>

        <div className="row">
          {orders.map((order) => (
            <div className="col-md-6 col-lg-4 mb-4" key={order.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Dịch vụ: {order.service.name}
                  </h5>
                  <p className="card-text">
                    <strong>Giá:</strong> {order.service.price} VND
                  </p>
                  <p className="card-text">
                    <strong>Ngày:</strong>{" "}
                    {new Date(order.dateFrom).toLocaleString()} {" đến "}
                    {new Date(order.dateTo).toLocaleString()}
                  </p>
                  <p className="card-text">
                    <strong>Trạng thái:</strong>{" "}
                    <span
                      className={`badge ${
                        order.status === "done"
                          ? "bg-success"
                          : order.status === "processing"
                          ? "bg-warning"
                          : "bg-danger"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <Link
                    to={`/order-detail/${order.id}`}
                    type="button"
                    className="btn btn-outline-info w-100"
                  >
                    Xem chi tiết
                  </Link>
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

export default MyWorksPage;
