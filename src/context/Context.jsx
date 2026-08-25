import { createContext, useState, useContext,useEffect } from "react";


const shoppContext = createContext(null);

export const ShoppContextProvider = ({ children }) => {
  const [addCart, setAddCart] = useState([]);
    const[userData,setUserData] = useState();
    const[orders,setOrders] = useState();
    const[loading,setLoading] = useState(true);
    const [users,setUsers] =  useState();
      const [products,setProducts] = useState();
    

  const [searchProduct,setSearchProduct] = useState();
  useEffect(()=>{
const getAllProducts = async()=>{
  try{
const res = await fetch("http://localhost:7000/products/getProducts");
const data = await res.json();
setProducts(data);
setSearchProduct(data)
console.log("products",data)
  }catch(error){
    console.error(error)
  }
  
}
getAllProducts()
  },[])
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
        console.log(userData);
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
      };

setAddCart((prevCart) => {
  const updatedCart = [...prevCart, addedProduct];
  console.log(updatedCart);
  return updatedCart;
});    }

    console.log("addCart", addCart);
  };

  return (
    <shoppContext.Provider value={{ addCart, orders,users,loading,setAddCart,userData,handleAddToCart,setSearchProduct,searchProduct,products }}>
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