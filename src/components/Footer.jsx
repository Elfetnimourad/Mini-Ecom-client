import {
  Box,
  Container,
  Grid,
  Typography,
  Stack,
  IconButton,
  Link,
  Divider,
} from "@mui/material";

import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Email,
  Phone,
  LocationOn,
  ShoppingBag,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#111827",
        color: "#fff",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Brand */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1} alignItems="center">
                <ShoppingBag sx={{ fontSize: 34, color: "#1976d2" }} />
                <Typography variant="h5" fontWeight="bold">
                  MiniShop
                </Typography>
              </Stack>

              <Typography
                variant="body2"
                sx={{ color: "grey.400", lineHeight: 1.8 }}
              >
                Discover premium products at affordable prices.
                We provide a simple, secure and enjoyable shopping
                experience for everyone.
              </Typography>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography fontWeight="bold" mb={2}>
              Quick Links
            </Typography>

            <Stack spacing={1.2}>
              <Link href="/" underline="hover" color="inherit">
                Home
              </Link>

              <Link href="/products" underline="hover" color="inherit">
                Products
              </Link>

              <Link href="/cart" underline="hover" color="inherit">
                Cart
              </Link>

              <Link href="/login" underline="hover" color="inherit">
                Login
              </Link>
            </Stack>
          </Grid>

          {/* Customer */}
          <Grid size={{ xs: 6, md: 3 }}>
            <Typography fontWeight="bold" mb={2}>
              Customer Service
            </Typography>

            <Stack spacing={1.2}>
              <Link href="#" underline="hover" color="inherit">
                Help Center
              </Link>

              <Link href="#" underline="hover" color="inherit">
                Privacy Policy
              </Link>

              <Link href="#" underline="hover" color="inherit">
                Terms & Conditions
              </Link>

              <Link href="#" underline="hover" color="inherit">
                FAQ
              </Link>
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography fontWeight="bold" mb={2}>
              Contact
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" spacing={1}>
                <LocationOn color="primary" />
                <Typography variant="body2">
                  Batna, Algeria
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Phone color="primary" />
                <Typography variant="body2">
                  +213 000 000 000
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1}>
                <Email color="primary" />
                <Typography variant="body2">
                  support@minishop.com
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#374151" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" color="grey.400">
            © {new Date().getFullYear()} MiniShop. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            <IconButton
              sx={{
                color: "#fff",
                "&:hover": { bgcolor: "#1976d2" },
              }}
            >
              <Facebook />
            </IconButton>

            <IconButton
              sx={{
                color: "#fff",
                "&:hover": { bgcolor: "#1976d2" },
              }}
            >
              <Instagram />
            </IconButton>

            <IconButton
              sx={{
                color: "#fff",
                "&:hover": { bgcolor: "#1976d2" },
              }}
            >
              <Twitter />
            </IconButton>

            <IconButton
              sx={{
                color: "#fff",
                "&:hover": { bgcolor: "#1976d2" },
              }}
            >
              <LinkedIn />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}