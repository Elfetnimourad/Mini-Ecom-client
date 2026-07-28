import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentIcon from "@mui/icons-material/Payment";
import { useCart } from "../../context/Context";

const Checkout = () => {
  const { addCart } = useCart();

  // Replace this with your logged-in user
  const user = {
    name: "Morad Elfetni",
    email: "morad@email.com",
    phone: "+213 555 555 555",
    address: "Batna, Algeria",
  };

  const totalPrice = addCart.reduce(
    (total, item) => total + item.total,
    0
  );

  const totalItems = addCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    console.log({
      user,
      items: addCart,
      totalPrice,
    });

    alert("Order placed successfully!");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 750,
          borderRadius: 4,
          boxShadow: "0 15px 35px rgba(0,0,0,.08)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            mb={4}
          >
            Checkout
          </Typography>

          {/* Customer */}
          <Stack direction="row" spacing={2} alignItems="center" mb={4}>
            <Avatar
              sx={{
                width: 65,
                height: 65,
                bgcolor: "primary.main",
              }}
            >
              <PersonIcon fontSize="large" />
            </Avatar>

            <Box>
              <Typography variant="h6" fontWeight="bold">
                {user.name}
              </Typography>

              <Typography color="text.secondary">
                {user.email}
              </Typography>

              <Typography color="text.secondary">
                {user.phone}
              </Typography>
            </Box>
          </Stack>

          <Divider sx={{ mb: 4 }} />

          {/* Shipping */}
          <Stack direction="row" spacing={1} alignItems="center" mb={2}>
            <LocalShippingIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Shipping Address
            </Typography>
          </Stack>

          <Typography color="text.secondary" mb={4}>
            {user.address}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          {/* Payment */}
          <Stack direction="row" spacing={1} alignItems="center" mb={2}>
            <PaymentIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Payment Method
            </Typography>
          </Stack>

          <Chip
            label="Cash On Delivery"
            color="success"
            sx={{ mb: 4 }}
          />

          <Divider sx={{ mb: 4 }} />

          {/* Order Summary */}
          <Stack direction="row" spacing={1} alignItems="center" mb={3}>
            <ShoppingCartIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              Order Summary
            </Typography>
          </Stack>

          {addCart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                <img
                  src={item.productImg}
                  alt={item.productTitle}
                  width={60}
                  height={60}
                  style={{
                    objectFit: "contain",
                    borderRadius: 8,
                    background: "#fafafa",
                    padding: 5,
                  }}
                />

                <Box>
                  <Typography fontWeight="600">
                    {item.productTitle}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Quantity: {item.quantity}
                  </Typography>
                </Box>
              </Stack>

              <Typography fontWeight="bold">
                ${item.total.toFixed(2)}
              </Typography>
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          {/* Totals */}
          <Stack
            direction="row"
            justifyContent="space-between"
            mb={1}
          >
            <Typography>Total Items</Typography>
            <Typography>{totalItems}</Typography>
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            mb={1}
          >
            <Typography>Shipping</Typography>
            <Chip
              label="Free"
              color="success"
              size="small"
            />
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-between"
            mt={3}
          >
            <Typography variant="h5" fontWeight="bold">
              Total
            </Typography>

            <Typography
              variant="h5"
              color="primary"
              fontWeight="bold"
            >
              ${totalPrice.toFixed(2)}
            </Typography>
          </Stack>

          <Button
            variant="contained"
            size="large"
            fullWidth
            startIcon={<PaymentIcon />}
            sx={{
              mt: 4,
              height: 55,
              borderRadius: 3,
              fontSize: 18,
              textTransform: "none",
            }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;