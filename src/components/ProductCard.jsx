import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
  IconButton,
  Rating,
} from "@mui/material";

import {
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";

export default function ProductCard({
  product = {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    title: "Nike Air Max",
    description:
      "Comfortable running shoes designed for everyday performance.",
    category: "Shoes",
    price: 120,
    rating: 4.5,
  },
}) {
  return (
    <Card
      sx={{
        maxWidth: 320,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
        transition: ".3s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 40px rgba(0,0,0,.15)",
        },
      }}
    >
      {/* Product Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="240"
          image={product.image}
          alt={product.title}
        />

        <Chip
          label={product.category}
          color="primary"
          size="small"
          sx={{
            position: "absolute",
            top: 15,
            left: 15,
            fontWeight: 600,
          }}
        />

        <IconButton
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            bgcolor: "white",

            "&:hover": {
              bgcolor: "white",
            },
          }}
        >
          <FavoriteBorder color="error" />
        </IconButton>
      </Box>

      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          gutterBottom
          noWrap
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: 42,
            overflow: "hidden",
            mb: 2,
          }}
        >
          {product.description}
        </Typography>

        <Rating
          value={product.rating}
          precision={0.5}
          readOnly
          size="small"
        />

        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h5"
            color="primary"
            fontWeight="bold"
          >
            ${product.price}
          </Typography>

          <Button
            variant="contained"
            startIcon={<ShoppingCart />}
            sx={{
              borderRadius: 3,
              textTransform: "none",
              px: 2.5,
            }}
          >
            Add
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}