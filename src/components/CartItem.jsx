import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import {
  Add,
  Remove,
} from "@mui/icons-material";

export default function CartItem({
  item = {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    title: "Nike Air Max",
    category: "Shoes",
    price: 120,
    quantity: 2,
  },
}) {
  const total = item.price * item.quantity;
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: "0 6px 18px rgba(0,0,0,.08)",
        mb: 3,
      }}
    >
      <CardContent>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
        >
          {/* Product Image */}
          <Avatar
            src={item.image}
            variant="rounded"
            sx={{
              width: 110,
              height: 110,
            }}
          />

          {/* Product Information */}
          <Box flex={1}>
            <Typography variant="h6" fontWeight={700}>
              {item.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mt={1}
            >
              Category: {item.category}
            </Typography>

            <Typography
              variant="h6"
              color="primary"
              mt={2}
              fontWeight={700}
            >
              ${item.price}
            </Typography>
          </Box>

          {/* Quantity */}
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <IconButton
              sx={{
                border: "1px solid #ddd",
              }}
            >
              <Remove />
            </IconButton>

            <Typography
              fontWeight={700}
              sx={{ minWidth: 20, textAlign: "center" }}
            >
              {item.quantity}
            </Typography>

            <IconButton
              sx={{
                border: "1px solid #ddd",
              }}
            >
              <Add />
            </IconButton>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "block" } }}
          />

          {/* Total */}
          <Box textAlign="center">
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Total
            </Typography>

            <Typography
              variant="h5"
              fontWeight={700}
              color="primary"
            >
              ${total}
            </Typography>
          </Box>

          {/* Remove */}
          <Button
            color="error"
            variant="outlined"
            // startIcon={<DeleteOutline />}
            sx={{
              borderRadius: 3,
              textTransform: "none",
            }}
          >
            Remove
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}