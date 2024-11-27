import { useQuery } from "@tanstack/react-query";
import Footer from "../components/footer";
import Header from "../components/header";
import { getMyOrders } from "../service/order";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const { data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getMyOrders(),
  });

  const orders = data || [];

  return (
    <>
      <Header />
      <div className="container mt-5">
        <h2>Lịch Sử Đơn Hàng</h2>
        <div id="order-list" className="mt-4" />
      </div>

      {orders.map((order) => {
        return (
          <div className="border p-3 mb-3 rounded" key={order.id}>
            <h4>Dịch vụ: {order.service.name}</h4>
            <p>
              <strong>Giá:</strong> {order.service.price}
            </p>
            <p>
              <strong>Ngày:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Trạng thái:</strong> {order.status}
            </p>

            <Link to={`/order-detail/${order.id}`} className="btn btn-info">
              Xem Chi Tiết
            </Link>
          </div>
        );
      })}

      <Footer />
    </>
  );
};

export default MyOrders;
