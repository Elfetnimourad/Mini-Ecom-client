import React from "react";
import "../styles/AdminPanel.css";

export default function AddProduct() {
  return (
    <div className="admin-page">
      <div className="card shadow-lg admin-card border-0">

        <div className="card-body p-5">

          <h2 className="fw-bold mb-1">📦 Add Product</h2>
          <p className="text-muted mb-4">
            Fill in the details below to add a new product.
          </p>

          <form>

            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter product name"
              />
            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <select className="form-select">
                  <option>Select Category</option>
                  <option>Electronics</option>
                  <option>Clothes</option>
                  <option>Shoes</option>
                  <option>Accessories</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Brand name"
                />
              </div>

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Price ($)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Stock</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Stock Quantity"
                />
              </div>

            </div>

            <div className="mb-3">
              <label className="form-label">Product Image</label>
              <input type="file" className="form-control" />
            </div>

            <div className="mb-4">
              <label className="form-label">Description</label>
              <textarea
                rows="4"
                className="form-control"
                placeholder="Write product description..."
              ></textarea>
            </div>

            <button className="btn btn-primary w-100 py-2">
              Add Product
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}