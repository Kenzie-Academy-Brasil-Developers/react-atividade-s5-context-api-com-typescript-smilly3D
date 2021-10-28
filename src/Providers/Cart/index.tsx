import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../../types/products";

interface CartProviderProps {
  children: ReactNode;
}

interface CartProviderData {
  cart: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setCart([...cart, product]);
  };
  const deleteProduct = (productToBeDeleted: Product) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
