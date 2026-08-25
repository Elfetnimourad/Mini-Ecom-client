import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from "@mui/icons-material/Storefront";
import {

  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Person,
  Settings,
  Logout,ShoppingBag
} from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/Context';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
        let navigate = useNavigate();
  const {addCart,products,userData,order} = useCart()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
const cartItems = addCart.reduce((quantity,item)=>item.quantity + quantity,0)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
const ordersHandler = ()=>{
    navigate('/orders-user')
}
const settingsHandler = ()=>{
navigate('/settings')
}
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const profileHandler = ()=>{
        setAnchorEl(null);

navigate("/profile")
  }
  const accountHandler = ()=>{
        setAnchorEl(null);

    navigate("/login")
  }
  const HomeHandler = ()=>{
        setAnchorEl(null);

    navigate("/")
  }
  const handleClose = ()=>{
    setAnchorEl(null);
  }
  const cartHandler = ()=>{
        setAnchorEl(null);

    navigate("/Cart")
  }
const logoutHandler = ()=>{
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");

  navigate("/login")
}
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
   <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
  PaperProps={{
    elevation: 3,
    sx: {
      mt: 1.5,
      minWidth: 220,
      borderRadius: 3,
      overflow: "hidden",
      border: "1px solid #e5e7eb",
    },
  }}
>
  <MenuItem
    onClick={() => {
      ordersHandler();
      handleClose();
    }}
    sx={{
      py: 1.5,
      px: 2,
      gap: 1,
    }}
  >
    <ListItemIcon>
      <ShoppingBag fontSize="small" />
    </ListItemIcon>

    <ListItemText
      primary="My Orders"
      primaryTypographyProps={{
        fontWeight: 600,
      }}
    />
  </MenuItem>

  <MenuItem
    onClick={() => {
      profileHandler();
      handleClose();
    }}
    sx={{
      py: 1.5,
      px: 2,
      gap: 1,
    }}
  >
    <ListItemIcon>
      <Person fontSize="small" />
    </ListItemIcon>

    <ListItemText
      primary="Profile"
      primaryTypographyProps={{
        fontWeight: 600,
      }}
    />
  </MenuItem>

  <MenuItem
    onClick={() => {
      settingsHandler();
      handleClose();
    }}
    sx={{
      py: 1.5,
      px: 2,
      gap: 1,
    }}
  >
    <ListItemIcon>
      <Settings fontSize="small" />
    </ListItemIcon>

    <ListItemText
      primary="Settings"
      primaryTypographyProps={{
        fontWeight: 600,
      }}
    />
  </MenuItem>

  <Divider />

  <MenuItem
    onClick={() => {
      logoutHandler();
      handleClose();
    }}
    sx={{
      py: 1.5,
      px: 2,
      gap: 1,
      color: "#dc2626",
    }}
  >
    <ListItemIcon sx={{ color: "#dc2626" }}>
      <Logout fontSize="small" />
    </ListItemIcon>

    <ListItemText
      primary="Logout"
      primaryTypographyProps={{
        fontWeight: 600,
      }}
    />
  </MenuItem>
</Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
    sx={{zIndex:999999999}}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={HomeHandler}>
          <Badge badgeContent={4} color="error">
            <HomeIcon />
          </Badge>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={cartHandler}
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart Shopping</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={order?.length} color="error">
          <AccountCircle />
          </Badge>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1,position:"absolute",zIndex:"4444",width:"100%" }}>
      <AppBar position="static">
        <Toolbar>
          <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    cursor: "pointer",
    transition: ".3s",
    "&:hover": {
      transform: "scale(1.03)",
    },
  }}
>
 

<Avatar
  sx={{
    width: 60,
    height: 60,
    background: "linear-gradient(135deg,#7C3AED,#A855F7,#EC4899)",
    boxShadow: "0 10px 25px rgba(124,58,237,.35)",
    border: "3px solid rgba(255,255,255,.2)",
  }}
>
  <StorefrontIcon sx={{ fontSize: 34, color: "#fff" }} />
</Avatar>

  <Box>
    <Typography
      sx={{
        fontWeight: 800,
        fontSize: "1.6rem",
        letterSpacing: 3,
        lineHeight: 1,
      }}
    >
      ECOM
    </Typography>

    <Typography
      sx={{
        fontSize: ".78rem",
        color: "rgba(255,255,255,.85)",
        letterSpacing: 1,
      }}
    >
      Dream • Shop • Enjoy
    </Typography>
  </Box>
</Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={()=>navigate('/')}>
              <Badge badgeContent={products?.length} color="error">
                <HomeIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={()=>navigate('/cart')}
            >
              <Badge badgeContent={cartItems} color="error">
                <ShoppingCartIcon  />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src={userData?.avatar} sx={{
              width: 40,
              height: 40,
              border: "1px solid white",
            }}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none'},zIndex:9999999999999}}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
