import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useParams } from 'react-router-dom';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import { useState } from 'react';
import { useCart } from '../../context/Context';

export default function Home(){
  const {addCart,handleAddToCart} = useCart();
      const [anchorEl, setAnchorEl] = useState(null);
      let navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const [addCart,setAddCart] = useState([]);
  // let [quantityItem,setQuantityItem] = useState(1)
  // const { id } = useParams();
//  const handleAddToCart = (item) => {
//   console.log("HHHH")
//   const product = addCart.find((p) => p.id === item.id);

//   if (product) {
//     setAddCart((prevCart) =>
//       prevCart.map((p) =>
//         p.id === item.id
//           ? {
//               ...p,
//               quantity: p.quantity + 1,
//               total: (p.quantity + 1) * p.productPrice,
//             }
//           : p
//       )
//     );
//   } else {
//     const addedProduct = {
//       id: item.id,
//       productImg: item.img,
//       productTitle: item.title,
//       productPrice: item.price,
//       quantity: 1,
//       total: item.price,
//     };

//     setAddCart((prevCart) => [...prevCart, addedProduct]);
//   }
//   console.log("addCart",addCart)
// };
  
return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<input type="text" placeholder='Search ...' className='d-flex m-3 w-50 rounded border-primary'/>
  <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={handleClick}
        sx={{backgroundColor:"skyblue",margin:2}}
      >
        Category
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        
        <MenuItem onClick={handleClose}>Electronics</MenuItem>
        <MenuItem onClick={handleClose}>Fashion</MenuItem>
        <MenuItem onClick={handleClose}>Shoes</MenuItem>
        <MenuItem onClick={handleClose}>Accessories</MenuItem>
        <MenuItem onClick={handleClose}>Sports</MenuItem>

      </Menu>
    </div>
  
        </Box>
        
<ImageList
  sx={{
    width: "90%",
    mx: "auto",
    py: 2,
  }}
  cols={3}
  gap={24}
>
  {itemData.map((item) => (
    <ImageListItem
      key={item.img}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        bgcolor: "white",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        cursor: "pointer",
        transition: ".3s",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 35px rgba(0,0,0,.15)",
        },

        "& img": {
          height: 260,
          width: "100%",
          objectFit: "cover",
          transition: ".3s",
        },

        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
      
    >
      <img
        src={`${item.img}?w=500&fit=crop&auto=format`}
        srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
        onClick={() => navigate(`/product/${item.id}`)}
      />

      <ImageListItemBar
        title={item.title}
        subtitle={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <span
              style={{
                color: "#4caf50",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              ${item.price}
            </span>

            <span
              style={{
                color: "#999",
                fontSize: 13,
              }}
            >
              ⭐ {item.rate}
            </span>
       <IconButton
  color="primary"
  onClick={()=>handleAddToCart(item)}
  sx={{
    border: "1px solid",
    borderColor: "primary.main",
    borderRadius: 2,
    p: 1.2,

    "&:hover": {
      bgcolor: "primary.main",
      color: "white",
    },
  }}
>
  <ShoppingCartIcon />
</IconButton>
          </Box>
        }
        position="below"
        sx={{
          bgcolor: "white",
          color: "#222",

          "& .MuiImageListItemBar-title": {
            fontWeight: 700,
            fontSize: 18,
          },

          "& .MuiImageListItemBar-subtitle": {
            color: "#555",
          },
        }}
      />
    </ImageListItem>
  ))}
</ImageList>
    </Box>
  );
}

const itemData = [
  {
    id:1,
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    price:1000,
    rate:4
  },
  {
    id:2,
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    price:2000,
    rate:4.5
  },
  {
    id:3,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    price:1050,
    rate:3.5
  },
  {
    id:4,
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    price:500,
    rate:6.9
  },
  {
    id:5,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    price:900,
    rate:4.7
  },
  {
    id:1,
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    price:500,
    rate:5.3
  },
  {
    id:6,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    price:450,
    rate:4.1
  },
  {
    id:7,
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    price:300,
    rate:4.9
  },
  {
    id:8,
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    price:1700,
    rate:4.3,
  },
  {
    id:9,
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    price:700,
    rate:3.9
  },
  {
    id:10,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    price:200,
    rate:1.4
  },
  {
    id:11,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    price:100,
    rate:4.6
  },
];