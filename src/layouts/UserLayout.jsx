import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function UserLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f8fafc",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          px: { xs: 2, sm: 3, md: 5 },
          py: 8,
        }}
      >
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}