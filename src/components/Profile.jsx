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
import {useCart} from "../context/Context"

export default function ProfileCard() {
  // const user = {
  //   name: "John Doe",
  //   email: "john@example.com",
  //   role: "Customer",
  //   orders: 12,
  //   avatar: "https://i.pravatar.cc/300?img=12",
  // };'
  const {userData,orders} = useCart();

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
            src={userData?.avatar}
            sx={{
              width: 110,
              height: 110,
              border: "4px solid white",
            }}
          />

          <Box textAlign="center">
            <Typography variant="h5" fontWeight={700}>
              {userData?.username}
            </Typography>

            <Typography color="text.secondary">
              {userData?.email}
            </Typography>

            <Chip
              label={userData?.role}
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
              Account Type: <strong>{userData?.role}</strong>
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <Email color="primary" />

            <Typography>{userData?.email}</Typography>
          </Stack>

        {userData?.role === "User" && 
        (<Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <ShoppingBag color="primary" />

            <Typography>
              Orders: <strong>{orders?.length}</strong>
            </Typography>
          </Stack>
        )
          }
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