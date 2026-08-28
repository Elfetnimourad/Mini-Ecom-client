import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../../context/Context";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: "#1E293B",
    color: "#fff",
    fontWeight: 700,
    fontSize: 15,
    letterSpacing: ".5px",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    paddingTop: 18,
    paddingBottom: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: ".3s",

  "&:nth-of-type(even)": {
    background: "#fafafa",
  },

  "&:hover": {
    background: "#f1f5f9",
  },

  "&:last-child td": {
    border: 0,
  },
}));

export default function Products() {
  const navigate = useNavigate();
  const [title,setTitle] = useState("");
const {setSearchProduct,searchProduct,products,userData} = useCart();


  const editHandel = (product)=>{ 
      navigate(`/admin/products/edit/${product._id}`)
  }
  const deleteHandel = async(product)=>{
    try{
      const res = await fetch(`http://localhost:7000/products/${product._id}`,{
        method:"DELETE",
         headers: {
    "Content-Type": "application/json",
  },          
        body:JSON.stringify({userData}),
      })
      const data = await res.json();
      console.log(data)
    }catch(error){
      console.error(error)
    }
  }
  const searchProductHandler = (e)=>{
    const value = e.target.value.trim();
     setTitle(value)
   if(!value){
    setSearchProduct(products);
    return;
   }
    const filtredProduct = products.filter(e=>value.toLowerCase().includes(e.name));
    setSearchProduct(filtredProduct)
  }
  return (
    <Box p={4} bgcolor="#F8FAFC" minHeight="100vh">
      {/* Header */}

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Products
          </Typography>

          <Typography color="text.secondary">
            Manage all products in your store
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          component={Link}
          to={'/admin/products/add'}
          sx={{
            bgcolor: "#2563EB",
            px: 3,
            py: 1.2,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "#1D4ED8",
            },
          }}
        >
          Add Product
        </Button>
      </Box>

      {/* Search */}

      <Box mb={3}>
        <TextField
          fullWidth
          placeholder="Search products..."
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: "gray" }} />,
          }}
          value={title}
          onChange={searchProductHandler}
        />
      </Box>

      {/* Table */}

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 4,
          border: "1px solid #E2E8F0",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Product</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Stock</StyledTableCell>
              <StyledTableCell>Rating</StyledTableCell>
          
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {searchProduct?.map((product) => (
              <StyledTableRow key={product.id}>
                <StyledTableCell>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Avatar
                      src={product.cover}
                      sx={{ width: 55, height: 55 }}
                    />
                    <Typography fontWeight={600}>
                      {product.name}
                    </Typography>
                  </Box>
                </StyledTableCell>

                <StyledTableCell>{product.category}</StyledTableCell>

                <StyledTableCell sx={{ fontWeight: "bold" }}>
                  {product.price}
                </StyledTableCell>

                <StyledTableCell>
                  <Chip
                    label={product.stock}
                    color={
                      product.stock === 0
                        ? "error"
                        : product.stock < 10
                        ? "warning"
                        : "success"
                    }
                  />
                </StyledTableCell>

                <StyledTableCell>⭐ {product.rate}</StyledTableCell>

                

                <StyledTableCell align="center">
                  <IconButton color="primary">
                    <EditIcon onClick={()=>editHandel(product)}/>
                  </IconButton>

                  <IconButton color="error">
                    <DeleteIcon onClick={()=>deleteHandel(product)}/>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}