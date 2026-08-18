import {
  AppBar,
  Avatar,
  Badge,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material";

import {
  Dashboard,
  Inventory2,
  Logout,
  Notifications,
  ShoppingBag,
} from "@mui/icons-material";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 260;

const menuItems = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/admin",
  },
  {
    title: "Products",
    icon: <Inventory2 />,
    path: "/admin/products",
  },
];

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate()
const logoutHandler = ()=>{
navigate("/login")
}
  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f7fb" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            bgcolor: "#111827",
            color: "white",
          },
        }}
      >
        <Toolbar>
          <Stack direction="row" spacing={1} alignItems="center">
            <ShoppingBag color="primary" />

            <Typography variant="h6" fontWeight={700}>
              MiniShop
            </Typography>
          </Stack>
        </Toolbar>

        <Divider sx={{ borderColor: "#374151" }} />

        <List sx={{ mt: 2 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.title}
              component={Link}
              to={item.path}
              selected={location.pathname === item.path}
              sx={{
                mx: 2,
                mb: 1,
                borderRadius: 2,

                "&.Mui-selected": {
                  bgcolor: "#1976d2",
                  color: "white",
                },

                "&.Mui-selected:hover": {
                  bgcolor: "#1565c0",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>

        <Box sx={{ flexGrow: 1 }} />

        <Divider sx={{ borderColor: "#374151" }} />

        <List>
          <ListItemButton sx={{ color: "#ef4444" }}>
            <ListItemIcon sx={{ color: "#ef4444" }} onClick={logoutHandler}>
              <Logout />
            </ListItemIcon>

            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Top Bar */}
        <AppBar
          elevation={0}
          position="sticky"
          sx={{
            bgcolor: "white",
            color: "#111",
            borderBottom: "1px solid #eee",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              Admin Dashboard
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton>
                <Badge badgeContent={2} color="error">
                  <Notifications />
                </Badge>
              </IconButton>

             <Stack
  direction="row"
  spacing={1.2}
  alignItems="center"
>
  <Avatar
    src="https://i.pravatar.cc/150?img=12"
    sx={{ width: 40, height: 40 }}
    onClick={()=>navigate('/admin/products/profile')}
  />

  <Typography
   variant="caption"
  sx={{ color: "#6b7280", fontSize: "11px" }}
  >
    Administrator
  </Typography>
</Stack>


            </Stack>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Box
          sx={{
            p: 4,
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}