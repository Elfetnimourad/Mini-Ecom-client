import React, { useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import {
  AttachMoney,
  CheckCircle,
  HourglassEmpty,
  LocalShipping,
  Search,
  ShoppingBag,
  Visibility,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/Context";

export default function AdminOrders() {
  const navigate = useNavigate();


  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
 
const{orders,loading} = useCart();
console.log("orders",orders)
  // =========================
  // GET ORDERS
  // =========================
  

  // =========================
  // FILTER ORDERS
  // =========================


  const filteredOrders = useMemo(() => {
    return orders?.filter((order) => {
      const customerName =
        order.user?.username ||
        order.user?.name ||
        "";

      const orderId = order._id || "";

      const matchesSearch =
        customerName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        orderId
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, statusFilter]);

  // =========================
  // STATUS CHIP
  // =========================
  const getStatusChip = (status) => {
    const statusConfig = {
      pending: {
        label: "Pending",
        color: "warning",
      },
      confirmed: {
        label: "Confirmed",
        color: "info",
      },
      processing: {
        label: "Processing",
        color: "primary",
      },
      shipped: {
        label: "Shipped",
        color: "secondary",
      },
      delivered: {
        label: "Delivered",
        color: "success",
      },
      cancelled: {
        label: "Cancelled",
        color: "error",
      },
    };

    const config = statusConfig[status] || {
      label: status,
      color: "default",
    };

    return (
      <Chip
        label={config.label}
        color={config.color}
        size="small"
        sx={{
          fontWeight: 600,
          textTransform: "capitalize",
        }}
      />
    );
  };

  // =========================
  // STATISTICS
  // =========================

  const totalOrders = orders?.length;

  const pendingOrders = orders?.filter(
    (order) => order.status === "pending"
  ).length;

  const deliveredOrders = orders?.filter(
    (order) => order.status === "delivered"
  ).length;

  const totalRevenue = orders
    ?.filter((order) => order.status !== "cancelled")
    .reduce(
      (total, order) => total + Number(order.totalPrice || 0),
      0
    );

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>

      {/* ================= HEADER ================= */}

      <Box
        sx={{
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{ color: "#111827" }}
          >
            Orders
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            Manage and track all customer orders.
          </Typography>
        </Box>

        <Button
          variant="outlined"
          onClick={() => window.location.reload()}
        >
          Refresh
        </Button>
      </Box>

      {/* ================= STATISTICS ================= */}

      <Grid container spacing={3} sx={{ mb: 4 }}>

        {/* Total Orders */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3,
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Total Orders
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ mt: 1 }}
                  >
                    {totalOrders}
                  </Typography>
                </Box>

                <Avatar
                  sx={{
                    bgcolor: "#e8f0fe",
                    color: "#2563eb",
                  }}
                >
                  <ShoppingBag />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Pending */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3,
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Pending
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ mt: 1 }}
                  >
                    {pendingOrders}
                  </Typography>
                </Box>

                <Avatar
                  sx={{
                    bgcolor: "#fff7ed",
                    color: "#f59e0b",
                  }}
                >
                  <HourglassEmpty />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Delivered */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3,
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Delivered
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ mt: 1 }}
                  >
                    {deliveredOrders}
                  </Typography>
                </Box>

                <Avatar
                  sx={{
                    bgcolor: "#ecfdf5",
                    color: "#10b981",
                  }}
                >
                  <CheckCircle />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Revenue */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 3,
              boxShadow: "none",
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Revenue
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={800}
                    sx={{ mt: 1 }}
                  >
                    ${totalRevenue.toFixed(2)}
                  </Typography>
                </Box>

                <Avatar
                  sx={{
                    bgcolor: "#f3e8ff",
                    color: "#9333ea",
                  }}
                >
                  <AttachMoney />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ================= FILTERS ================= */}

      <Card
        sx={{
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          boxShadow: "none",
          mb: 3,
        }}
      >
        <CardContent>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
          >

            <TextField
              fullWidth
              placeholder="Search by order ID or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />

            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Status</InputLabel>

              <Select
                value={statusFilter}
                label="Status"
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
              >
                <MenuItem value="all">
                  All Orders
                </MenuItem>

                <MenuItem value="pending">
                  Pending
                </MenuItem>

                <MenuItem value="confirmed">
                  Confirmed
                </MenuItem>

                <MenuItem value="processing">
                  Processing
                </MenuItem>

                <MenuItem value="shipped">
                  Shipped
                </MenuItem>

                <MenuItem value="delivered">
                  Delivered
                </MenuItem>

                <MenuItem value="cancelled">
                  Cancelled
                </MenuItem>
              </Select>
            </FormControl>

          </Stack>
        </CardContent>
      </Card>

      {/* ================= ORDERS TABLE ================= */}

      <Card
        sx={{
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          boxShadow: "none",
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table>

            <TableHead>
              <TableRow
                sx={{
                  bgcolor: "#f8fafc",
                }}
              >
                <TableCell sx={{ fontWeight: 700 }}>
                  Order
                </TableCell>

                <TableCell sx={{ fontWeight: 700 }}>
                  Customer
                </TableCell>

                <TableCell sx={{ fontWeight: 700 }}>
                  Items
                </TableCell>

                <TableCell sx={{ fontWeight: 700 }}>
                  Total
                </TableCell>

                <TableCell sx={{ fontWeight: 700 }}>
                  Status
                </TableCell>

                <TableCell sx={{ fontWeight: 700 }}>
                  Date
                </TableCell>

                <TableCell align="right" sx={{ fontWeight: 700 }}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

              {filteredOrders?.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    align="center"
                    sx={{ py: 8 }}
                  >
                    <ShoppingBag
                      sx={{
                        fontSize: 50,
                        color: "#cbd5e1",
                        mb: 1,
                      }}
                    />

                    <Typography
                      color="text.secondary"
                      fontWeight={600}
                    >
                      No orders found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (

                filteredOrders.map((order) => {

                  const customerName =
                    order.user?.username ||
                    order.user?.name ||
                    "Unknown";

                  const itemsCount =
                    order.items?.reduce(
                      (total, item) =>
                        total + Number(item.quantity || 0),
                      0
                    ) || 0;

                  return (
                    <TableRow
                      key={order._id}
                      hover
                      sx={{
                        "&:last-child td": {
                          borderBottom: 0,
                        },
                      }}
                    >

                      {/* Order ID */}
                      <TableCell>
                        <Typography
                          fontWeight={700}
                          sx={{ color: "#2563eb" }}
                        >
                          #{order._id?.slice(-6).toUpperCase()}
                        </Typography>
                      </TableCell>

                      {/* Customer */}
                      <TableCell>
                        <Stack
                          direction="row"
                          spacing={1.5}
                          alignItems="center"
                        >
                          <Avatar
                          src={order?.user.avatar}
                            sx={{
                              width: 36,
                              height: 36,
                              bgcolor: "#e0e7ff",
                              color: "#4338ca",
                              fontSize: 14,
                            }}
                          />
                          <Typography fontWeight={600}>
                            {customerName}
                          </Typography>
                        </Stack>
                      </TableCell>

                      {/* Items */}
                      <TableCell>
                        <Typography>
                          {itemsCount}{" "}
                          {itemsCount === 1
                            ? "item"
                            : "items"}
                        </Typography>
                      </TableCell>

                      {/* Total */}
                      <TableCell>
                        <Typography fontWeight={700}>
                          $
                          {Number(
                            order.totalPrice || 0
                          ).toFixed(2)}
                        </Typography>
                      </TableCell>

                      {/* Status */}
                      <TableCell>
                        {getStatusChip(order.status)}
                      </TableCell>

                      {/* Date */}
                      <TableCell>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {order.createdAt
                            ? new Date(
                                order.createdAt
                              ).toLocaleDateString()
                            : "-"}
                        </Typography>
                      </TableCell>

                      {/* Action */}
                      <TableCell align="right">
                        <Button
                          size="small"
                          variant="outlined"
                          startIcon={<Visibility />}
                          onClick={() =>
                            navigate(
                              `/admin/orders/ordersView/${order._id}`
                            )
                          }
                          sx={{
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 600,
                          }}
                        >
                          View
                        </Button>
                      </TableCell>

                    </TableRow>
                  );
                })

              )}

            </TableBody>

          </Table>
        </TableContainer>
      </Card>

    </Box>
  );
}