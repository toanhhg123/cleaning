import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Footer from "../components/footer";
import Header from "../components/header";
import useUser from "../hooks/useUser";
import useWallet from "../hooks/useWallet";
import { createPayment } from "../service/wallet";

/**
 * The Wallet component renders the header and footer.
 */
const Wallet = () => {
  const { data } = useWallet();
  const { mutateAsync } = useMutation({
    mutationFn: createPayment,
  });

  const { userInfo } = useUser();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const { amount } = Object.fromEntries(formData);

      const paymentUrl = await mutateAsync({
        amount: Number(amount),
      });

      window.location.href = paymentUrl;
    } catch (error) {
      toast.error(error.message);
    }
  };

  /**
   * The JSX elements to be rendered.
   */
  return (
    <>
      {/* The header component */}
      <Header />

      <div className="page-header" />

      {/* The main content */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Nạp tiền</h2>

            {/* Card Header */}
            <div className="card mb-4">
              <div className="card-header text-center bg-primary text-white">
                <h4>Thông tin tài khoản</h4>
              </div>
              <div className="card-body">
                <p className="mb-2">
                  <strong>Người dùng:</strong> {userInfo?.fullName}
                </p>
                <p className="mb-2">
                  <strong>Số dư: {data?.balance?.toLocaleString()}</strong> VND
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Amount Input */}
              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Số tiền muốn nạp:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  placeholder="Enter amount"
                  name="amount"
                />
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Nạp tiền
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* The footer component */}
      <Footer />
    </>
  );
};

export default Wallet;
