import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch(
        "https://mini-ecom-server.onrender.com/users/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Password reset successfully.");

        navigate("/login");
      } else {
        
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

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
          {/* Icon */}
          <div className="text-center mb-4">
            <div
              className="d-inline-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
              style={{
                width: "75px",
                height: "75px",
                fontSize: "34px",
              }}
            >
              🔐
            </div>

            <h2 className="fw-bold mt-3 mb-2">
              Reset Password
            </h2>

            <p className="text-muted">
              Create a new password for your account.
            </p>
          </div>

          <form onSubmit={handleResetPassword}>
            {/* New Password */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                New Password
              </label>

              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter new password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Confirm Password
              </label>

              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                required
              />
            </div>

            {/* Password Tips */}
            <div className="alert alert-light border">
              <small className="text-muted">
                ✔ At least 8 characters
                <br />
                ✔ Include uppercase and lowercase letters
                <br />
                ✔ Include at least one number
                <br />
                ✔ Include a special character
              </small>
            </div>

            {/* Button */}
            <button
              className="btn btn-primary w-100 py-3 fw-bold rounded-3 mt-3"
              type="submit"
            >
              Reset Password
            </button>
          </form>

          {/* Back */}
          <div className="text-center mt-4">
            <Link
              to="/login"
              className="text-decoration-none fw-semibold"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}