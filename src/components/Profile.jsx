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

import {
  Email,
  Person,
  ShoppingBag,
  Edit,
} from "@mui/icons-material";

export default function ProfileCard() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    orders: 12,
    avatar: "https://i.pravatar.cc/300?img=12",
  };

  return (
    <div className="d-flex justify-content-center w-100">
    <Card
      sx={{
        width: 350,
        borderRadius: 4,
        boxShadow: "0 12px 30px rgba(0,0,0,.08)",
      }}
    >
      {/* Cover */}
      <Box
        sx={{
          height: 110,
          bgcolor: "primary.main",
        }}
      />

      <CardContent sx={{ mt: -7 }}>
        <Stack alignItems="center" spacing={2}>
          <Avatar
            src={user.avatar}
            sx={{
              width: 110,
              height: 110,
              border: "4px solid white",
            }}
          />

          <Box textAlign="center">
            <Typography variant="h5" fontWeight={700}>
              {user.name}
            </Typography>

            <Typography color="text.secondary">
              {user.email}
            </Typography>

            <Chip
              label={user.role}
              color="primary"
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
        </Stack>

        <Divider sx={{ my: 3 }} />

        <Stack spacing={2}>
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Person color="primary" />

            <Typography>
              Account Type: <strong>{user.role}</strong>
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Email color="primary" />

            <Typography>{user.email}</Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <ShoppingBag color="primary" />

            <Typography>
              Orders: <strong>{user.orders}</strong>
            </Typography>
          </Stack>
        </Stack>

        <Button
          fullWidth
          variant="contained"
          startIcon={<Edit />}
          sx={{
            mt: 4,
            py: 1.3,
            borderRadius: 3,
            textTransform: "none",
          }}
        >
          Edit Profile
        </Button>
      </CardContent>
    </Card>
    </div>
  );
}  