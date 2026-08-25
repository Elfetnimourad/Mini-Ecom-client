import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  LinearProgress,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useCart } from "../../context/Context";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
  const navigate = useNavigate();
  const {users,orders,products} = useCart();
  const profit = orders?.reduce((total,item)=>item.totalPrice + total,0);
  const statCards = [
  {
    title: "Total Users",
    value: users?.length,
    change: "+12.5%",
    icon: <PeopleAltIcon />,
    iconBg: "#e0e7ff",
    iconColor: "#4f46e5",
  },
  {
    title: "Total Products",
    value: products?.length,
    change: "+8.2%",
    icon: <Inventory2Icon />,
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
  },
  {
    title: "Total Orders",
    value: orders?.length,
    change: "+15.7%",
    icon: <ShoppingBagIcon />,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    title: "Total Revenue",
    value: profit ,
    change: "+18.4%",
    icon: <AttachMoneyIcon />,
    iconBg: "#fef3c7",
    iconColor: "#d97706",
  },
];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fb",
        p: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ maxWidth: 1450, mx: "auto" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#111827",
                mb: 0.5,
              }}
            >
              Dashboard 👋
            </Typography>

            <Typography color="text.secondary">
              Welcome back, Admin. Here's what's happening with your store.
            </Typography>
          </Box>

          <Button
            variant="contained"
            startIcon={<TrendingUpIcon />}
            sx={{
              borderRadius: 3,
              px: 3,
              py: 1.3,
              textTransform: "none",
              fontWeight: 700,
              background: "linear-gradient(135deg,#2563eb,#4f46e5)",
              boxShadow: "0 8px 20px rgba(37,99,235,.2)",
            }}
          >
            View Analytics
          </Button>
        </Box>

        {/* Statistics */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 2.5,
            mb: 3,
          }}
        >
          {statCards.map((item) => (
            <Card
              key={item.title}
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                transition: ".25s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 15px 35px rgba(15,23,42,.08)",
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 3,
                      bgcolor: item.iconBg,
                      color: item.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: "#16a34a",
                      bgcolor: "#f0fdf4",
                      px: 1.2,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {item.change}
                  </Typography>
                </Box>

                <Typography color="text.secondary" fontSize={14}>
                  {item.title}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, mt: 0.5 }}
                >
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Revenue + Profit */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: 2.5,
            mb: 3,
          }}
        >
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #e5e7eb",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Box>
                  <Typography variant="h6" fontWeight={800}>
                    Revenue Overview
                  </Typography>
                  <Typography color="text.secondary" fontSize={14}>
                    Monthly revenue performance
                  </Typography>
                </Box>

                <Button
                  endIcon={<MoreHorizIcon />}
                  sx={{ minWidth: 40 }}
                />
              </Box>

              {/* Simple dashboard chart */}
              <Box
                sx={{
                  height: 230,
                  display: "flex",
                  alignItems: "flex-end",
                  gap: { xs: 1, md: 2 },
                  px: 1,
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                {[45, 60, 42, 75, 58, 82, 68, 94, 72, 88, 78, 100].map(
                  (height, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        height: `${height}%`,
                        maxWidth: 55,
                        mx: "auto",
                        borderRadius: "8px 8px 0 0",
                        background:
                          "linear-gradient(180deg,#4f46e5,#93c5fd)",
                        transition: ".25s",
                        "&:hover": {
                          opacity: 0.75,
                        },
                      }}
                    />
                  )
                )}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1.5,
                  color: "#9ca3af",
                  fontSize: 12,
                }}
              >
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map(
                  (month) => (
                    <span key={month}>{month}</span>
                  )
                )}
              </Box>
            </CardContent>
          </Card>

          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #e5e7eb",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={800}>
                Profit Overview
              </Typography>

              <Typography color="text.secondary" fontSize={14}>
                This month's financial summary
              </Typography>

              <Typography
                sx={{
                  fontSize: 36,
                  fontWeight: 800,
                  color: "#16a34a",
                  mt: 4,
                }}
              >
                ${profit - 15000}
              </Typography>

              <Typography color="text.secondary" mb={3}>
                Estimated net profit
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography fontSize={14}>Revenue</Typography>
                  <Typography fontWeight={700}>${profit}</Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={100}
                  sx={{
                    height: 8,
                    borderRadius: 10,
                    bgcolor: "#dcfce7",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "#22c55e",
                    },
                  }}
                />
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography fontSize={14}>Expenses</Typography>
                  <Typography fontWeight={700}>$15,000</Typography>
                </Box>

                <LinearProgress
                  variant="determinate"
                  value={60}
                  sx={{
                    height: 8,
                    borderRadius: 10,
                    bgcolor: "#fee2e2",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "#ef4444",
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Users + Products */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1.5fr" },
            gap: 2.5,
            mb: 3,
          }}
        >
          {/* Recent Users */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #e5e7eb",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h6" fontWeight={800}>
                  Recent Users
                </Typography>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{ textTransform: "none" }}
                >
                  View All
                </Button>
              </Box>

              {users?.map((user) => (
                <Box
                  key={user.email}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    py: 1.5,
                    borderBottom: "1px solid #f1f5f9",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "#eef2ff",
                      color: "#4f46e5",
                      fontWeight: 700,
                    }}
                  >
                    {user.Avatar}
                  </Avatar>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography fontWeight={700} fontSize={14}>
                      {user.username}
                    </Typography>

                    <Typography
                      color="text.secondary"
                      fontSize={12}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #e5e7eb",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography variant="h6" fontWeight={800}>
                  Top Products
                </Typography>

                <Button
                  endIcon={<ArrowForwardIcon />}
                  sx={{ textTransform: "none" }}
                >
                  View All
                </Button>
              </Box>

              {products?.map((product, index) => (
                <Box key={product.name} sx={{ mb: 2.5 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.8,
                    }}
                  >
                    <Box>
                      <Typography fontWeight={700} fontSize={14}>
                        {index + 1}. {product.name}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        fontSize={12}
                      >
                        {product.stock} stocks
                      </Typography>
                    </Box>

                    <Typography fontWeight={800}>
                      {product?.revenue}
                    </Typography>
                  </Box>


                  <LinearProgress
                    variant="determinate"
                    value={product.rate *  10}
                    sx={{
                      height: 7,
                      borderRadius: 10,
                      bgcolor: "#eef2ff",
                      "& .MuiLinearProgress-bar": {
                        bgcolor: "#4f46e5",
                        borderRadius: 10,
                      },
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>

        {/* Recent Orders */}
        <Card
          elevation={0}
          sx={{
            borderRadius: 4,
            border: "1px solid #e5e7eb",
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={800}>
                  Recent Orders
                </Typography>
                <Typography color="text.secondary" fontSize={14}>
                  Latest activity in your store
                </Typography>
              </Box>

              <Button
                endIcon={<ArrowForwardIcon />}
                sx={{ textTransform: "none" }}
                onClick={()=>navigate("/admin/orders")}
              >
                View Orders
              </Button>
            </Box>

            <Box sx={{ overflowX: "auto" }}>
              <Box sx={{ minWidth: 650 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.5fr 1fr 1fr",
                    bgcolor: "#f8fafc",
                    p: 1.5,
                    borderRadius: 2,
                    mb: 1,
                  }}
                >
                  <Typography fontSize={13} fontWeight={700}>
                    ORDER
                  </Typography>
                  <Typography fontSize={13} fontWeight={700}>
                    CUSTOMER
                  </Typography>
                  <Typography fontSize={13} fontWeight={700}>
                    AMOUNT
                  </Typography>
                  <Typography fontSize={13} fontWeight={700}>
                    STATUS
                  </Typography>
                </Box>

                {orders?.map((order) => (
                  <Box
                    key={order?._id}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1.5fr 1fr 1fr",
                      alignItems: "center",
                      p: 1.7,
                      borderBottom: "1px solid #f1f5f9",
                    }}
                  >
                    <Typography fontWeight={100}>
                      #{order._id.slice(6)}...
                    </Typography>

                    <Typography color="text.secondary">
                      {order.user.username}
                    </Typography>

                    <Typography fontWeight={700}>
                      {order.totalPrice}
                    </Typography>

                    <Typography
                      component="span"
                      sx={{
                        width: "fit-content",
                        px: 1.3,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: 12,
                        fontWeight: 700,
                        color:
                          order.status === "Completed"
                            ? "#15803d"
                            : "#b45309",
                        bgcolor:
                          order.status === "Completed"
                            ? "#dcfce7"
                            : "#fef3c7",
                      }}
                    >
                      {order.status}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
