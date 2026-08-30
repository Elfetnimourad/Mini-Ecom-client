import React, { useState } from "react";
import { useCart } from "../../context/Context";

export default function Settings() {
    const {userData} = useCart()
  const [notifications, setNotifications] = useState(true);
  const [currency, setCurrency] = useState("USD");
const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "#f8fafc",
      }}
    >
      <div className="container" style={{ maxWidth: "850px" }}>

        {/* Header */}
        <div className="mb-4">
          <h2 className="fw-bold mb-1">
            Settings
          </h2>

          <p className="text-muted mb-0">
            Manage your account and preferences.
          </p>
        </div>

        {/* User Information */}
      <div className="row">

  {/* Username */}
  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">
      Username
    </label>

    <input
      type="text"
      className="form-control"
      value={userData?.username || ""}
      disabled
      style={{
        borderRadius: "10px",
      }}
    />
  </div>

  {/* Email */}
  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">
      Email
    </label>

    <input
      type="email"
      className="form-control"
      value={userData?.email || ""}
      disabled
      style={{
        borderRadius: "10px",
      }}
    />
  </div>

  {/* Role */}
  <div className="col-md-6 mb-3">
    <label className="form-label fw-semibold">
      Role
    </label>

    <input
      type="text"
      className="form-control"
      value={userData?.role || "customer"}
      disabled
      style={{
        borderRadius: "10px",
      }}
    />
  </div>
 {/* Password */}
<div className="col-md-6 mb-3">
  <label className="form-label fw-semibold">
    Password
  </label>

  <div className="input-group">
    <input
      type={showPassword ? "text" : "password"}
      className="form-control"
      value={userData?.password || "********"}
      disabled
      style={{
        borderRadius: "10px 0 0 10px",
      }}
    />

    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setShowPassword(!showPassword)}
      style={{
        borderRadius: "0 10px 10px 0",
      }}
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>
</div>

</div>

        {/* Notifications */}
        <div
          className="card border-0 shadow-sm mb-4"
          style={{
            borderRadius: "16px",
          }}
        >
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              🔔 Notifications
            </h5>

            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">
                  Order notifications
                </h6>

                <p className="text-muted mb-0 small">
                  Receive notifications about your orders.
                </p>
              </div>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={notifications}
                  onChange={(e) =>
                    setNotifications(e.target.checked)
                  }
                  style={{
                    width: "45px",
                    height: "23px",
                    cursor: "pointer",
                  }}
                />
              </div>

            </div>

          </div>
        </div>

        {/* Preferences */}
        <div
          className="card border-0 shadow-sm mb-4"
          style={{
            borderRadius: "16px",
          }}
        >
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              🌐 Preferences
            </h5>

            <div className="row align-items-center">

              <div className="col-md-6 mb-3 mb-md-0">
                <h6 className="fw-semibold mb-1">
                  Currency
                </h6>

                <p className="text-muted mb-0 small">
                  Choose your preferred currency.
                </p>
              </div>

              <div className="col-md-6">

                <select
                  className="form-select"
                  value={currency}
                  onChange={(e) =>
                    setCurrency(e.target.value)
                  }
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <option value="USD">
                    USD ($)
                  </option>

                  <option value="EUR">
                    EUR (€)
                  </option>

                  <option value="DZD">
                    DZD (دج)
                  </option>
                </select>

              </div>

            </div>

          </div>
        </div>

        {/* Security */}
        <div
          className="card border-0 shadow-sm mb-4"
          style={{
            borderRadius: "16px",
          }}
        >
          <div className="card-body p-4">

            <h5 className="fw-bold mb-4">
              🔒 Security
            </h5>

            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h6 className="fw-semibold mb-1">
                  Password
                </h6>

                <p className="text-muted mb-0 small">
                  Change your account password.
                </p>
              </div>

              <button
                className="btn btn-outline-primary"
                style={{
                  borderRadius: "10px",
                }}
              >
                Change Password
              </button>

            </div>

          </div>
        </div>

        {/* Danger Zone */}
        <div
          className="card border-0 shadow-sm"
          style={{
            borderRadius: "16px",
            borderLeft: "4px solid #dc3545",
          }}
        >
          <div className="card-body p-4">

            <h5 className="fw-bold text-danger mb-2">
              Account
            </h5>

            <p className="text-muted small">
              Permanently delete your account and
              all associated data.
            </p>

            <button
              className="btn btn-outline-danger"
              style={{
                borderRadius: "10px",
              }}
            >
              Delete Account
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}