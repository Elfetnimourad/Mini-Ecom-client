import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import Products from './Products';
const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflowX: 'hidden',backgroundColor: "#111827",color:"white",height:"100vh" }}>
          <List sx={{height:"70vh",paddingTop:4}}>
            {['Dashboard', 'Orders', 'Users'].map((text, index) => (
              <ListItem key={text} disablePadding sx={[{height:65},{'&:hover': {
        // color: 'red',
        backgroundColor: 'orange'
      },}]}>
                <ListItemButton>
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Settings', 'Trash',].map((text, index) => (
              <ListItem key={text} disablePadding >
                <ListItemButton>
                  <ListItemIcon sx={{color:"white"}}>
                    {index % 2 === 0 ? < SettingsIcon/> : <InboxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        {/* <Typography sx={{ marginBottom: 2 }}>
       
        </Typography>
        <Typography sx={{ marginBottom: 2 }}>
         
        </Typography> */}
        <Products/>
      </Box>
    </Box>
  );
}
