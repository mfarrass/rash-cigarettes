import { createContext, useState } from "react";
import { productsData } from "../../assets/data";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {

  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);


  const total = cart.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  );

  const quantity = cart.reduce(
    (acc, item) => acc + item.amount,
    0
  );


  const addToCart = (product) => {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

      setCart(prev =>
        prev.map(item =>
          item.id === product.id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      );

    } else {

      setCart(prev => [...prev, { ...product, amount: 1 }]);
      toast.success("Product added to cart");

    }
  };


  const removeFromCart = (id) => {

    setCart(prev => prev.filter(item => item.id !== id));
    toast.success("Product removed");

  };


  const clearCart = () => {
    setCart([]);
    toast.success("Cart cleared");
  };


  const increaseQuantity = (id) => {

    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, amount: item.amount + 1 }
          : item
      )
    );

  };


  const decreaseQuantity = (id) => {

    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, amount: item.amount - 1 }
            : item
        )
        .filter(item => item.amount > 0) // 🔥 MAGIC LINE
    );

  };


  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        total,
        quantity
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
