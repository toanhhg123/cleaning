import { useParams } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  createOrderImage,
  getOrderById,
  getOrderImages,
  updateOrder,
} from "../service/order";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRole } from "../hooks/useUser";
import { getFile, uploadFile } from "../service/upload";

const OrderDetails = () => {
  const { id } = useParams();
  const role = useRole();

  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrderById(id),
  });

  const { data: orderImages } = useQuery({
    queryKey: ["order", "images", id],
    queryFn: () => getOrderImages(id),
  });

  const { mutate: createOrderImg } = useMutation({
    mutationFn: (body) => createOrderImage(body),
    onSuccess: () => {
      queryClient.invalidateQueries(["order", "images", id]);
    },
  });

  const { mutate: update } = useMutation({
    mutationFn: (body) => updateOrder(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries(["order", id]);
    },
  });

  const handleUploadFile = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const file = formData.get("file");
    const image = await uploadFile(file);

    createOrderImg({
      orderId: id,
      image,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    update({
      ...data,
      status: "done",
    });
  };

  if (!data) return null;

  return (
    <div>
      <Header />

      <div className="container" style={{ marginTop: 100, maxWidth: "800px" }}>
        <div className="card shadow-lg p-4">
          <h4 className="mb-4 text-primary">
            <strong>Dịch vụ:</strong> {data.service.name}
          </h4>

          <div className="mb-3">
            <p className="mb-2">
              <strong>Giá:</strong> {data.service.price} VND
            </p>
            <p className="mb-2">
              <strong>Họ và tên:</strong>{" "}
              <span className="text-muted">
                {data?.employee?.fullName || "Chưa cập nhật"}
              </span>
            </p>
            <p className="mb-2">
              <strong>Số điện thoại:</strong>{" "}
              <span className="text-muted">
                {data?.employee?.phoneNumber || "Chưa cập nhật"}
              </span>
            </p>
            <p className="mb-2">
              <strong>Ngày:</strong> {new Date(data.createdAt).toLocaleString()}
            </p>
          </div>

          <p className="mb-4">
            <strong>Trạng thái:</strong>{" "}
            <span
              id="order-status"
              className={`badge ${
                data.status === "done"
                  ? "bg-success"
                  : data.status === "processing"
                  ? "bg-warning"
                  : "bg-danger"
              }`}
            >
              {data.status}
            </span>
          </p>

          {role === "employee" && (
            <div className="d-flex gap-3">
              <button
                type="button"
                className="btn btn-success flex-grow-1"
                onClick={handleUpdate}
              >
                Đánh dấu đã hoàn thành
              </button>
            </div>
          )}

          <form onSubmit={handleUploadFile}>
            {/* Avatar */}
            <div className="mb-3 mt-5">
              <label htmlFor="avatar" className="form-label">
                File
              </label>

              <input
                type="file"
                name="file"
                id="avatar"
                className="form-control"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Đính kèm file
              </button>
            </div>
          </form>

          {orderImages && (
            <div className="row mt-5">
              {orderImages.map((orderImage) => (
                <div className="col-md-6 col-lg-4 mb-4" key={orderImage.id}>
                  <img
                    src={getFile(orderImage.image)}
                    alt={orderImage.orderId}
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderDetails;
