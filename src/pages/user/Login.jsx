import React from "react";

export default function Login() {
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
        style={{ width: "420px" }}
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
              🛒
            </div>

            <h2 className="fw-bold mt-3 mb-1">Welcome Back</h2>

            <p className="text-muted">
              Sign in to continue shopping
            </p>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
            />
          </div>

          {/* Remember */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
              />

              <label className="form-check-label">
                Remember me
              </label>
            </div>

            <a
              href="/"
              className="text-decoration-none fw-semibold"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login */}
          <button
            className="btn btn-primary w-100 py-3 fw-bold rounded-3"
            type="button"
          >
            Sign In
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

          {/* Register */}
          <div className="text-center mt-4">
            <span className="text-muted">
              Don't have an account?
            </span>

            <a
              href="/register"
              className="ms-2 text-decoration-none fw-bold"
            >
              Create Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}