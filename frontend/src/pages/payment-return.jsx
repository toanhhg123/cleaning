import { Link, useLocation } from "react-router-dom";

const PaymentReturn = () => {
  const location = useLocation();

  // Extract query parameters from the URL
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("type"); //
  return (
    <div className="container text-center mt-5">
      {status === "success" && (
        <div className="alert alert-success">
          <h2>Payment Successful!</h2>
          <p>Thank you for your payment.</p>
        </div>
      )}
      {status === "fail" && (
        <div className="alert alert-danger">
          <h2>Payment Failed!</h2>
          <p>There was an issue with your payment. Please try again.</p>
        </div>
      )}
      {!status && (
        <div className="alert alert-warning">
          <h2>No Payment Status</h2>
          <p>Invalid request. No status found.</p>
        </div>
      )}

      {/* Link to redirect to the home page */}
      <div className="mt-4">
        <Link to="/" className="btn btn-primary">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentReturn;
