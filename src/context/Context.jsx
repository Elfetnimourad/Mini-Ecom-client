import { createContext, useState, useContext,useEffect } from "react";


const shoppContext = createContext(null);

export const ShoppContextProvider = ({ children }) => {
  const [addCart, setAddCart] = useState([]);
    const[userData,setUserData] = useState();
    const[orders,setOrders] = useState();
    const[loading,setLoading] = useState(true);
    const [users,setUsers] =  useState();
      const [products,setProducts] = useState();
    const [page, setPage] = useState(1);
const [searchProduct, setSearchProduct] = useState([]);
const limit = 12;
const role = userData?.role;
  useEffect(()=>{
const getAllProducts = async()=>{
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  try{
const res = await fetch(`http://localhost:7000/products/getProducts?page=${(role === "ADMIN") ? 1 : page}&limit=${(role === "ADMIN") ? 1000 : limit}`,{
  method:"GET",
  headers:{
    "Authorization":`Bearer ${token}`
  }
});
const data = await res.json();
setProducts(data);
setSearchProduct(data)
console.log("products",data)
console.log("CURRENT PAGE:", page);
console.log("URL:", `http://localhost:7000/products/getProducts?page=${page}&limit=12`);
  }catch(error){
    console.error(error)
  }
  
}
getAllProducts()
  },[page,role])
     useEffect(() => {
        const getUsers = async () => {
          try {
            const res = await fetch("http://localhost:7000/users/admin/getUsers");
    
            if (!res.ok) {   
              throw new Error("Failed to fetch orders");
            }
    
            const data = await res.json();
    
            setUsers([...data]);
          } catch (error) {
            console.error(error);
          }
        };
    
        getUsers();
      }, []);
 
    useEffect(() => {
        const getOrders = async () => {
          try {
            const res = await fetch("http://localhost:7000/orders/getOrders");
    
            if (!res.ok) {   
              throw new Error("Failed to fetch orders");
            }
    
            const data = await res.json();
    
            setOrders([...data]);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        };
    
        getOrders();
      }, []);
  
  useEffect(() => {
    const getMe = async () => {
      try {
        const token =
          sessionStorage.getItem("token")||
          localStorage.getItem("token") ;
  console.log("token",token)
        if (!token) return;
  console.log("token",token)
        const res = await fetch(
    `http://localhost:7000/users/getMe?token=${encodeURIComponent(token)}`
  );
  
  
        const data = await res.json();
  
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    getMe();
  }, []);
console.log("products",products)
  const handleAddToCart = (item) => {
console.log("item",item)
    const product = addCart.find((p) => p.id === item._id);

     if (product) {
    setAddCart((prevCart) => {
      const updatedCart = prevCart.map((p) =>
        p.id === item._id
          ? {
              ...p,
              quantity: p.quantity + 1,
              total: (p.quantity + 1) * p.productPrice,
            }
          : p
      );

      console.log(updatedCart);
      return updatedCart;
    });
  } else {
      const addedProduct = {
        id: item._id,
        productImg: item.cover,
        productTitle: item.name,
        productPrice: item.price,
        quantity: 1,
        total: item.price,
        category:item.category,
      };

setAddCart((prevCart) => {
  const updatedCart = [...prevCart, addedProduct];
  console.log(updatedCart);
  return updatedCart;
});    }

    console.log("addCart", addCart);
  };
 const decrementQuantity = (item)=>{
setAddCart((prevCart)=>{
const updCart = addCart.map(p=>
  p.id === item.id
  ? {
    ...p,
    quantity:p.quantity - 1,
    total:(p.quantity - 1) * p.productPrice,
  }
  : p
)
return updCart;
})
console.log("updateCart",addCart)
  }
  const incrementQuantity = (item)=>{
    setAddCart((prevCart)=>{
      const incCart = prevCart.map(p=>
        p.id === item.id
        ?{
          ...p,
          quantity:p.quantity +1,
          total:(p.quantity + 1) * p.productPrice,
        }:p
      )
      return incCart
    })

  }
  return (
    <shoppContext.Provider value={{ addCart,page,products,decrementQuantity,incrementQuantity,searchProduct,setSearchProduct ,setPage,orders,users,loading,setAddCart,userData,handleAddToCart }}>
      {children}
    </shoppContext.Provider>
  );
};

export function useCart() {
  const context = useContext(shoppContext);

  if (!context) {
    throw new Error("Error Error");
  }

  return context;
}