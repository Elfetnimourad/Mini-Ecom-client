import { Cancel } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentCancel = () => {
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
        <Cancel
          sx={{
            fontSize: 90,
            mb: 2,
          }}
        />

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Payment Cancelled
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 4 }}>
          Your payment was cancelled. Your order has not been completed.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/checkout")}
        >
          Return to Checkout
        </Button>
      </Paper>
    </Box>
  );
};

export default PaymentCancel;