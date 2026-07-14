import React from "react";

export default function SignUp() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #2563eb)",
      }}
    >
      <div
        className="card border-0 shadow-lg rounded-4"
        style={{ width: "500px" }}
      >
        <div className="card-body p-5">
          {/* Logo */}
          <div className="text-center mb-4">
            <div
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-primary text-white fw-bold"
              style={{
                width: "70px",
                height: "70px",
                fontSize: "28px",
              }}
            >
              🛍️
            </div>

            <h2 className="fw-bold mt-3 mb-1">Create Account</h2>

            <p className="text-muted">
              Join us and start your shopping journey.
            </p>
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>

            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="john@example.com"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Confirm your password"
            />
          </div>

          {/* Terms */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
            />

            <label
              className="form-check-label"
              htmlFor="terms"
            >
              I agree to the{" "}
              <a href="/" className="text-decoration-none">
                Terms & Conditions
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            className="btn btn-primary w-100 py-3 fw-bold rounded-3"
            type="button"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="text-center text-muted my-4">
            ────── OR ──────
          </div>

          {/* Google */}
          <button
            className="btn btn-outline-dark w-100 py-3 rounded-3 fw-semibold"
            type="button"
          >
            Continue with Google
          </button>

          {/* Login */}
          <div className="text-center mt-4">
            <span className="text-muted">
              Already have an account?
            </span>

            <a
              href="/login"
              className="ms-2 text-decoration-none fw-bold"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}   