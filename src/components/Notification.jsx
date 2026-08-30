import {
  Avatar,
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import {
  Notifications,
  ShoppingCart,
  LocalOffer,
  CheckCircle,
} from "@mui/icons-material";

const notifications = [
  {
    id: 1,
    title: "Order Confirmed",
    message: "Your order #12458 has been confirmed.",
    icon: <CheckCircle color="success" />,
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Product Added",
    message: "Nike Air Max was added to your cart.",
    icon: <ShoppingCart color="primary" />,
    time: "15 min ago",
  },
  {
    id: 3,
    title: "Special Offer",
    message: "Get 20% off on Electronics today.",
    icon: <LocalOffer color="warning" />,
    time: "1 hour ago",
  },
];

export default function NotificationPanel() {
  return (
    <Paper
      elevation={4}
      sx={{
        width: 380,
        borderRadius: 4,
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          p: 2,
          bgcolor: "primary.main",
          color: "white",
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Notifications
        </Typography>

        <Badge badgeContent={notifications.length} color="error">
          <Notifications />
        </Badge>
      </Stack>

      <List sx={{ p: 0 }}>
        {notifications.map((notification, index) => (
          <Box key={notification.id}>
            <ListItem
              sx={{
                py: 2,
                transition: ".3s",

                "&:hover": {
                  bgcolor: "#f5f7fa",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar
                  sx={{
                    bgcolor: "#eef4ff",
                  }}
                >
                  {notification.icon}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography fontWeight={600}>
                    {notification.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {notification.message}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.disabled"
                    >
                      {notification.time}
                    </Typography>
                  </>
                }
              />
            </ListItem>

            {index !== notifications.length - 1 && <Divider />}
          </Box>
        ))}
      </List>

      <Box
        sx={{
          p: 2,
          textAlign: "center",
          bgcolor: "#fafafa",
          cursor: "pointer",
          transition: ".3s",

          "&:hover": {
            bgcolor: "#f0f0f0",
          },
        }}
      >
        <Typography
          color="primary"
          fontWeight={600}
        >
          View All Notifications
        </Typography>
      </Box>
    </Paper>
  );
}