import React from "react";

export default function Cart() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#eef2f7,#dbeafe)",
      }}
    >
      <div
        className="bg-white rounded-4 shadow-lg p-4"
        style={{ width: "80%", height: "85vh" }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Shopping Cart</h2>
            <p className="text-muted mb-0">
              Manage your selected products
            </p>
          </div>

          <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill">
            1 Item
          </span>
        </div>

        {/* Table Header */}
        <div
          className="row fw-bold text-secondary py-3 rounded-3 mx-0"
          style={{ background: "#f8f9fa" }}
        >
          <div className="col-3">Product</div>
          <div className="col-3 text-center">Quantity</div>
          <div className="col-3 text-center">Price</div>
          <div className="col-3 text-end">Total</div>
        </div>

        {/* Products */}
        <div
          className="overflow-auto mt-3"
          style={{ maxHeight: "50vh" }}
        >
          <div className="row align-items-center py-4 border-bottom">
            <div className="col-3">
              <img
                src="https://via.placeholder.com/80"
                alt="Product"
                className="img-fluid rounded shadow-sm"
              />
            </div>

            <div className="col-3 text-center">
              <button className="btn btn-outline-secondary btn-sm">
                -
              </button>

              <span className="mx-3 fw-bold">1</span>

              <button className="btn btn-primary btn-sm">+</button>
            </div>

            <div className="col-3 text-center fw-semibold">
              $250
            </div>

            <div className="col-3 text-end fw-bold text-primary">
              $250
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="d-flex justify-content-between align-items-center mt-4 p-4 rounded-4"
          style={{ background: "#f8f9fa" }}
        >
          <div>
            <h4 className="fw-bold mb-1">Total</h4>
            <small className="text-muted">
              Taxes included
            </small>
          </div>

          <h2 className="text-primary fw-bold mb-0">$250.00</h2>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-outline-secondary me-3 px-4">
            Continue Shopping
          </button>

          <button className="btn btn-primary px-5">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}