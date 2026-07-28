import { createContext, useState, useContext } from "react";

const shoppContext = createContext(null);

export const ShoppContextProvider = ({ children }) => {
  const [addCart, setAddCart] = useState([]);

  const handleAddToCart = (item) => {
    console.log("HHHH");

    const product = addCart.find((p) => p.id === item.id);

     if (product) {
    setAddCart((prevCart) => {
      const updatedCart = prevCart.map((p) =>
        p.id === item.id
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
        id: item.id,
        productImg: item.img,
        productTitle: item.title,
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
    <shoppContext.Provider value={{ addCart, setAddCart,handleAddToCart }}>
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