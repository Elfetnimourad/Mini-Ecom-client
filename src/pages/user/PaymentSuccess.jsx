import { CheckCircle } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          p: 5,
          borderRadius: 4,
        }}
      >
        <CheckCircle
          sx={{
            fontSize: 90,
            mb: 2,
          }}
        />

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Payment Successful!
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Thank you for your purchase. Your order has been successfully placed.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </Button>
      </Paper>
    </Box>
  );
};