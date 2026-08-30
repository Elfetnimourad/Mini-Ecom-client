import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/Context";

export default function OrdersUser() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(false);
const {userData} = useCart()
  const navigate = useNavigate();

  useEffect(() => {
    const getMyOrders = async () => {
      try {
        
        const res = await fetch(
          `https://mini-ecom-server.onrender.com/orders/getSingleOrder/${userData?._id}`
        );

        const data = await res.json();

        setOrder(data);
        console.log("order",data)
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getMyOrders();
  }, [userData?._id]);

  const getStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-warning-subtle text-warning-emphasis";

      case "confirmed":
        return "bg-primary-subtle text-primary";

      case "processing":
        return "bg-info-subtle text-info-emphasis";

      case "shipped":
        return "bg-secondary-subtle text-secondary";

      case "delivered":
        return "bg-success-subtle text-success";

      case "cancelled":
        return "bg-danger-subtle text-danger";

      default:
        return "bg-light text-dark";
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" />
        <p className="text-muted mt-3">
          Loading your orders...
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "#f8fafc",
      }}
    >
      <div className="container">

        {/* Header */}
        <div className="mb-5">
          <h1 className="fw-bold mb-2">
            My Orders
          </h1>

          <p className="text-muted mb-0">
            View and track your recent orders.
          </p>
        </div>

        {/* No Orders */}
        {order?.length === 0 ? (
          <div
            className="card border-0 shadow-sm text-center p-5"
            style={{
              borderRadius: "18px",
            }}
          >
            <div
              style={{
                fontSize: "55px",
                marginBottom: "15px",
              }}
            >
              🛍️
            </div>

            <h4 className="fw-bold">
              No orders yet
            </h4>

            <p className="text-muted">
              You haven't placed any orders yet.
            </p>

            <button
              className="btn btn-primary px-4"
              onClick={() => navigate("/products")}
            >
              Start Shopping
            </button>
          </div>
        ) : (

          /* Orders */
          <div className="d-flex flex-column gap-4">

            {order?.map((order) => {

              const itemsCount =
                order.items?.reduce(
                  (total, item) =>
                    total +
                    Number(item.quantity || 0),
                  0
                ) || 0;

              return (
                <div
                  className="card border-0 shadow-sm"
                  key={order._id}
                  style={{
                    borderRadius: "18px",
                    overflow: "hidden",
                  }}
                >

                  {/* Order Header */}
                  <div className="card-body p-4">

                    <div className="d-flex flex-column flex-md-row justify-content-between gap-3">

                      <div>
                        <p className="text-muted mb-1">
                          Order
                        </p>

                        <h5 className="fw-bold mb-1">
                          #
                          {order._id
                            ?.slice(-8)
                            .toUpperCase()}
                        </h5>

                        <small className="text-muted">
                          {order.createdAt
                            ? new Date(
                                order.createdAt
                              ).toLocaleDateString()
                            : "-"}
                        </small>
                      </div>

                      <div className="text-md-end">

                        <span
                          className={`badge rounded-pill px-3 py-2 text-capitalize ${getStatusClass(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>

                        <h5 className="fw-bold mt-2 mb-0">
                          $
                          {Number(
                            order.totalPrice || 0
                          ).toFixed(2)}
                        </h5>

                      </div>

                    </div>

                    <hr className="my-4" />

                    {/* Products */}
                    <div>
                      <p className="fw-semibold mb-3">
                        {itemsCount}{" "}
                        {itemsCount === 1
                          ? "item"
                          : "items"}
                      </p>

                      <div className="d-flex flex-column gap-3">

                        {order.items?.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="d-flex align-items-center gap-3"
                            >

                              {/* Product Image */}
                              <img
                                src={
                                  item.product?.cover
                                }
                                alt={
                                  item.product?.name
                                }
                                style={{
                                  width: "70px",
                                  height: "70px",
                                  objectFit: "contain",
                                  borderRadius: "12px",
                                  background:
                                    "#f8fafc",
                                }}
                              />

                              {/* Product Info */}
                              <div className="flex-grow-1">

                                <h6 className="fw-bold mb-1">
                                  {item.product?.name ||
                                    "Product"}
                                </h6>

                                <small className="text-muted">
                                  Quantity:{" "}
                                  {item.quantity}
                                </small>

                              </div>

                              {/* Price */}
                              <div className="text-end">

                                <div className="fw-bold">
                                  $
                                  {Number(
                                    item.price || 0
                                  ).toFixed(2)}
                                </div>

                                <small className="text-muted">
                                  × {item.quantity}
                                </small>

                              </div>

                            </div>
                          )
                        )}

                      </div>
                    </div>

                    <hr className="my-4" />

                    {/* Footer */}
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">

                      <div>
                        <span className="text-muted">
                          Total:
                        </span>

                        <strong className="ms-2 fs-5">
                          $
                          {Number(
                            order.totalPrice || 0
                          ).toFixed(2)}
                        </strong>
                      </div>

                      <button
                        className="btn btn-outline-primary"
                        style={{
                          borderRadius: "10px",
                        }}
                        onClick={() =>
                          navigate(
                            `/orders/${order._id}`
                          )
                        }
                      >
                        View Order
                      </button>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        )}

      </div>
    </div>
  );
}