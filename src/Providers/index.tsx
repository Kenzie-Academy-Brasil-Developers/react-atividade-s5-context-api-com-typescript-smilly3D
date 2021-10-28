import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductListProvider } from "./ProductList";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <CartProvider>
      <ProductListProvider>{children}</ProductListProvider>
    </CartProvider>
  );
};

export default Providers;
