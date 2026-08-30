import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Avatar,
  Divider,
  Button,
  Chip,
  CircularProgress,
} from "@mui/material";

import {
  ArrowBack,
  ShoppingBag,
} from "@mui/icons-material";

import { useNavigate, useParams } from "react-router-dom";

export default function OrdersView() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await fetch(
          `https://mini-ecom-server.onrender.com/orders/getSingleOrder/${orderId}`
        );

        const data = await res.json();

        setOrder(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getOrder();
  }, [orderId]);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!order) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">
          Order not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box>

      {/* Header */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Button
          variant="outlined"
          startIcon={<ArrowBack />}
          onClick={() => navigate("/admin/orders")}
          sx={{
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Back
        </Button>

        <Box>
          <Typography
            variant="h4"
            fontWeight={800}
          >
            Order Items
          </Typography>

          <Typography
            color="text.secondary"
          >
            Order #{order._id?.slice(-6).toUpperCase()}
          </Typography>
        </Box>
      </Stack>

      {/* Order summary */}
      <Card
        sx={{
          mb: 3,
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="space-between"
            spacing={2}
          >

            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Customer
              </Typography>

              <Typography fontWeight={700}>
                {order.user?.username || "Unknown"}
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Status
              </Typography>

              <Chip
                label={order.status}
                color={
                  order.status === "delivered"
                    ? "success"
                    : order.status === "cancelled"
                    ? "error"
                    : "warning"
                }
                size="small"
                sx={{
                  mt: 0.5,
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              />
            </Box>

            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                Total
              </Typography>

              <Typography
                variant="h6"
                fontWeight={800}
              >
                $
                {Number(
                  order.totalPrice || 0
                ).toFixed(2)}
              </Typography>
            </Box>

          </Stack>
        </CardContent>
      </Card>

      {/* Products */}
      <Card
        sx={{
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          boxShadow: "none",
        }}
      >
        <CardContent sx={{ p: 0 }}>

          {/* Products header */}
          <Box sx={{ p: 3 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
            >
              <Avatar
                sx={{
                  bgcolor: "#eff6ff",
                  color: "#2563eb",
                }}
              >
                <ShoppingBag />
              </Avatar>

              <Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                >
                  Products
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  Items included in this order
                </Typography>
              </Box>
            </Stack>
          </Box>

          <Divider />

          {/* Items */}
          {order.items?.map((item, index) => {

            const product = item.product;

            const subtotal =
              Number(item.price || 0) *
              Number(item.quantity || 0);

            return (
              <React.Fragment key={index}>

                <Box sx={{ p: 3 }}>

                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                    }}
                    spacing={2}
                    alignItems={{
                      xs: "flex-start",
                      sm: "center",
                    }}
                  >

                    {/* Image */}
                    <Avatar
                      variant="rounded"
                      src={product?.cover}
                      sx={{
                        width: 75,
                        height: 75,
                        bgcolor: "#f8fafc",
                      }}
                    >
                      <ShoppingBag />
                    </Avatar>

                    {/* Product */}
                    <Box sx={{ flexGrow: 1 }}>

                      <Typography
                        variant="h6"
                        fontWeight={700}
                      >
                        {product?.name || "Product"}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Unit price: $
                        {Number(
                          item.price || 0
                        ).toFixed(2)}
                      </Typography>

                    </Box>

                    {/* Quantity */}
                    <Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Quantity
                      </Typography>

                      <Typography fontWeight={700}>
                        × {item.quantity}
                      </Typography>
                    </Box>

                    {/* Subtotal */}
                    <Box
                      sx={{
                        minWidth: 120,
                        textAlign: {
                          xs: "left",
                          sm: "right",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Subtotal
                      </Typography>

                      <Typography
                        variant="h6"
                        fontWeight={800}
                      >
                        ${subtotal.toFixed(2)}
                      </Typography>
                    </Box>

                  </Stack>

                </Box>

                {index <
                  order.items.length - 1 && (
                  <Divider />
                )}

              </React.Fragment>
            );
          })}

          {/* Total */}
          <Divider />

          <Box
            sx={{
              p: 3,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
            >
              <Typography
                variant="h6"
                fontWeight={700}
              >
                Total
              </Typography>

              <Typography
                variant="h5"
                fontWeight={800}
                color="primary"
              >
                $
                {Number(
                  order.totalPrice || 0
                ).toFixed(2)}
              </Typography>
            </Stack>
          </Box>

        </CardContent>
      </Card>

    </Box>
  );
}