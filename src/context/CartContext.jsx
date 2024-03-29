import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = inInCart(item.id);

    if (existe) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === item.id) {
          return { ...elemento, quantity: elemento.quantity + item.quantity };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, item]);
    }
  };
  const clearToCart = () => {
    setCart([]);
  };
  const deleteById = (id) => {
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };
  const inInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  //Calcular el total

  const getTotalPrice = () => {
    let total = cart.reduce((acum, elemento) => {
      return acum + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  //Calcular la cantidad de items

  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    const product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearToCart,
    deleteById,
    getTotalPrice,
    getTotalQuantity,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
