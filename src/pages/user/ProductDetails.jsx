import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [quantityItem, setQuantityItem] = useState(1);
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:7000/products/getSingleProduct/${id}`
        );

        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleProduct();
  }, [id]);

  const increaseQuantity = () => {
    if (quantityItem < product?.stock) {
      setQuantityItem((q) => q + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantityItem > 1) {
      setQuantityItem((q) => q - 1);
    }
  };

  const addToCart = () => {
    const addedProduct = {
      product: product._id,
      productImg: product.cover,
      productName: product.name,
      productPrice: product.price,
      quantity: quantityItem,
      total: product.price * quantityItem,
    };

    console.log("Product added:", addedProduct);
  };

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading product...</h4>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="row g-5">

        {/* Product Image */}
        <div className="col-md-6">

          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "16px" }}
          >
            <img
              src={product.cover}
              alt={product.name}
              className="img-fluid"
              style={{
                width: "100%",
                height: "450px",
                objectFit: "contain",
                borderRadius: "16px",
              }}
            />
          </div>

        </div>

        {/* Product Information */}
        <div className="col-md-6">

          <div className="mb-2">
            <span className="badge bg-light text-dark">
              {product.category}
            </span>
          </div>

          <h1 className="fw-bold mb-2">
            {product.name}
          </h1>

          {/* Brand */}
          <p className="text-muted mb-2">
            Brand: <strong>{product.brand}</strong>
          </p>

          {/* Rating */}
          <div className="mb-3">
            <span className="text-warning fs-5">
              ⭐
            </span>

            <strong className="ms-2">
              {product.rate || 0}
            </strong>

            <span className="text-muted ms-2">
              / 5
            </span>
          </div>

          {/* Price */}
          <h2 className="text-success fw-bold mb-4">
            ${Number(product.price).toFixed(2)}
          </h2>

          {/* Stock */}
          <div className="mb-4">

            {product.stock > 0 ? (
              <div className="text-success fw-semibold">
                ✓ In Stock
                <span className="text-muted ms-2">
                  ({product.stock} available)
                </span>
              </div>
            ) : (
              <div className="text-danger fw-semibold">
                ✕ Out of Stock
              </div>
            )}

          </div>

          {/* Description */}
          <div className="mb-4">

            <h5 className="fw-bold">
              Description
            </h5>

            <p
              className="text-muted"
              style={{
                lineHeight: "1.8",
              }}
            >
              {product.description ||
                "No description available for this product."}
            </p>

          </div>

          <hr />

          {/* Quantity */}
          {product.stock > 0 && (
            <div className="mb-4">

              <label className="fw-semibold mb-2">
                Quantity
              </label>

              <div
                className="d-flex align-items-center"
                style={{ width: "150px" }}
              >

                <button
                  className="btn btn-outline-secondary"
                  onClick={decreaseQuantity}
                >
                  −
                </button>

                <div
                  className="form-control text-center"
                  style={{
                    borderRadius: 0,
                  }}
                >
                  {quantityItem}
                </div>

                <button
                  className="btn btn-outline-secondary"
                  onClick={increaseQuantity}
                >
                  +
                </button>

              </div>

            </div>
          )}

          {/* Total */}
          {product.stock > 0 && (
            <div className="mb-4">

              <span className="text-muted">
                Total:
              </span>

              <strong className="fs-4 ms-2">
                $
                {(
                  Number(product.price) *
                  quantityItem
                ).toFixed(2)}
              </strong>

            </div>
          )}

          {/* Add to Cart */}
          <button
            className="btn btn-primary btn-lg w-100"
            disabled={product.stock <= 0}
            onClick={addToCart}
          >
            {product.stock > 0
              ? "Add To Cart"
              : "Out of Stock"}
          </button>

          {/* Customer information */}
          <div className="mt-4">

            <div className="d-flex gap-3 mb-3">
              <span>🚚</span>

              <div>
                <strong>Fast Delivery</strong>
                <p className="text-muted mb-0">
                  Fast and secure delivery to your address.
                </p>
              </div>
            </div>

            <div className="d-flex gap-3 mb-3">
              <span>↩️</span>

              <div>
                <strong>Easy Returns</strong>
                <p className="text-muted mb-0">
                  Easy return policy for eligible products.
                </p>
              </div>
            </div>

            <div className="d-flex gap-3">
              <span>🔒</span>

              <div>
                <strong>Secure Payment</strong>
                <p className="text-muted mb-0">
                  Your payment information is protected.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}