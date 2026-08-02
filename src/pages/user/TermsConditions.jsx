import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <div
      className="d-flex justify-content-center align-items-center py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #2563eb)",
      }}
    >
      <div
        className="card border-0 shadow-lg rounded-4"
        style={{ maxWidth: "850px", width: "100%" }}
      >
        <div className="card-body p-5">

          {/* Header */}
          <div className="text-center mb-5">
            <div
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
              style={{
                width: "80px",
                height: "80px",
                fontSize: "36px",
              }}
            >
              📜
            </div>

            <h1 className="fw-bold mt-4">
              Terms & Conditions
            </h1>

            <p className="text-muted">
              Please read these terms carefully before using our platform.
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-5">
            <h4 className="fw-bold mb-3">
              Welcome to Mini Shop
            </h4>

            <p className="text-muted lh-lg">
              Thank you for choosing Mini Shop. By creating an account
              or placing an order, you agree to comply with the following
              terms and conditions. These terms are designed to ensure a
              secure, fair, and enjoyable shopping experience for every
              customer.
            </p>
          </div>

          {/* Rules */}
          <div className="row g-4">

            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5>👤 Account Responsibility</h5>

                <p className="text-muted mb-0">
                  Keep your account information accurate and your password
                  secure. You are responsible for all activity under your
                  account.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5>🛒 Orders</h5>

                <p className="text-muted mb-0">
                  Orders are processed according to product availability.
                  We reserve the right to cancel orders if an item becomes
                  unavailable.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5>💳 Payment</h5>

                <p className="text-muted mb-0">
                  Currently, payment is available through
                  <strong> Cash on Delivery (COD)</strong>.
                  Payment is collected upon delivery.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5>🚚 Delivery</h5>

                <p className="text-muted mb-0">
                  Delivery times may vary depending on your location.
                  Delays caused by weather or logistics are beyond our
                  control.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5>🔒 Privacy</h5>

                <p className="text-muted mb-0">
                  Your personal information is used only for order
                  processing and account management. We do not sell your
                  personal information.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5>⚖️ Fair Use</h5>

                <p className="text-muted mb-0">
                  Users must not misuse the website, attempt unauthorized
                  access, or engage in fraudulent activities.
                </p>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="text-center mt-5">

            <p className="text-muted mb-4">
              By continuing to use Mini Shop, you acknowledge that you
              have read and accepted these Terms & Conditions.
            </p>

            <Link
              to="/register"
              className="btn btn-primary px-5 py-3 rounded-3 fw-bold"
            >
              ← Back to Sign Up
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}