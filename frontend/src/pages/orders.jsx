import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import Footer from "../components/footer";
import Header from "../components/header";
import { acceptOrder, getOrdersStatus } from "../service/order";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["orders", "status", "pending"],
    queryFn: () => getOrdersStatus("pending"),
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => acceptOrder(id),
    onSuccess: () => {
      toast.success("Đã xác nhận đơn hàng");
      queryClient.invalidateQueries(["orders"]);
      navigate("/my-works");
    },
  });

  const orders = data || [];

  const handleAcceptOrder = async (id) => {
    mutate(id);
  };

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
                        order.status === "Successed"
                          ? "bg-success"
                          : order.status === "Processing"
                          ? "bg-warning"
                          : "bg-danger"
                      }`}
                    >
                      {order.status}
                    </span>
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-info w-100"
                    onClick={() => handleAcceptOrder(order.id)}
                  >
                    Nhận dịch vụ
                  </button>
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

export default OrderPage;
