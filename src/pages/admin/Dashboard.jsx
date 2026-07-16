import {
  Box,
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import {
  ShoppingCart,
  Inventory2,
  People,
  AttachMoney,
  ArrowUpward,
} from "@mui/icons-material";

const cards = [
  {
    title: "Revenue",
    value: "$18,540",
    growth: "+12%",
    icon: <AttachMoney />,
    color: "#10B981",
  },
  {
    title: "Orders",
    value: "1,254",
    growth: "+8%",
    icon: <ShoppingCart />,
    color: "#3B82F6",
  },
  {
    title: "Products",
    value: "320",
    growth: "+20",
    icon: <Inventory2 />,
    color: "#F59E0B",
  },
  {
    title: "Customers",
    value: "2,451",
    growth: "+16%",
    icon: <People />,
    color: "#8B5CF6",
  },
];

export default function Dashboard() {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      {/* Header */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Dashboard
          </Typography>

          <Typography color="text.secondary">
            Welcome back, Admin 👋
          </Typography>
        </Box>

        <Button variant="contained">
          Generate Report
        </Button>
      </Box>

      {/* Statistics */}

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 4,
                border: "1px solid #E5E7EB",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography color="text.secondary">
                    {card.title}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    mt={1}
                  >
                    {card.value}
                  </Typography>

                  <Box display="flex" alignItems="center" mt={1}>
                    <ArrowUpward
                      sx={{
                        color: "#22C55E",
                        fontSize: 18,
                      }}
                    />

                    <Typography
                      color="success.main"
                      fontWeight="bold"
                    >
                      {card.growth}
                    </Typography>
                  </Box>
                </Box>

                <Avatar
                  sx={{
                    bgcolor: card.color,
                    width: 60,
                    height: 60,
                  }}
                >
                  {card.icon}
                </Avatar>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Middle */}

      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              height: 350,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={3}
            >
              Monthly Revenue
            </Typography>

            <Typography color="text.secondary" mb={2}>
              Revenue Growth
            </Typography>

            <LinearProgress
              variant="determinate"
              value={78}
              sx={{
                height: 12,
                borderRadius: 10,
              }}
            />

            <Typography mt={2}>
              78% of this month's target achieved.
            </Typography>

            <Box
              mt={6}
              height={180}
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor="#F1F5F9"
              borderRadius={3}
            >
              <Typography color="gray">
                Chart goes here (Recharts)
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Orders */}

        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              height: 350,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
            >
              Recent Orders
            </Typography>

            <List>
              {["John", "Emma", "Michael", "Sophia"].map((name) => (
                <ListItem key={name}>
                  <ListItemAvatar>
                    <Avatar>{name[0]}</Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary={name}
                    secondary="Order Completed"
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Bottom */}

      <Paper
        sx={{
          mt: 3,
          p: 3,
          borderRadius: 4,
        }}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={3}
        >
          Best Selling Products
        </Typography>

        <Grid container spacing={2}>
          {[
            {
              name: "Nike Shoes",
              sales: 250,
              revenue: "$12,500",
            },
            {
              name: "Smart Watch",
              sales: 180,
              revenue: "$8,200",
            },
            {
              name: "Gaming Mouse",
              sales: 120,
              revenue: "$4,800",
            },
          ].map((product) => (
            <Grid item xs={12} md={4} key={product.name}>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: "#F8FAFC",
                  borderRadius: 3,
                }}
              >
                <Typography fontWeight="bold">
                  {product.name}
                </Typography>

                <Typography color="text.secondary">
                  Sales: {product.sales}
                </Typography>

                <Typography color="success.main">
                  Revenue: {product.revenue}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}