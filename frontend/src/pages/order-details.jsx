import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { getOrderById } from "../service/order";
import { useQuery } from "@tanstack/react-query";

const OrderDetails = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderById(id),
  });

  if (!data) return null;

  return (
    <div>
      <Header />

      <div className="container" style={{ marginTop: 100 }}>
        <h4>
          <strong>Dịch vụ:</strong> {data.service.name}
        </h4>
        <p>
          <strong>Giá:</strong> {data.service.price}
        </p>
        <p>
          <strong>Họ và tên:</strong> {data.employee.fullName}
        </p>
        <p>
          <strong>Số điện thoại:</strong> {data.employee.phoneNumber}
        </p>
        <p>
          <strong>Ngày:</strong> {new Date(data.createdAt).toLocaleString()}
        </p>

        <p>
          <strong>Trạng thái:</strong>{" "}
          <span id="order-status">{data.status}</span>
        </p>

        <div style={{ marginTop: 50, display: "flex", gap: 10 }}>
          <button className="btn btn-primary">Đánh dấu đã hoàn thành</button>
          <button className="btn">Đính kèm file</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderDetails;
