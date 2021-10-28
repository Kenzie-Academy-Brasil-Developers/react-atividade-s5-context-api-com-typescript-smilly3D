import { Product } from "../../types/products";
import { ProductsCard } from "../ProductsCard";

interface ProductsProps {
  products: Product[];
  remove?: boolean;
}

const Products = ({ products, remove }: ProductsProps) => {
  return (
    <>
      {products.map((product, index) => (
        <ProductsCard key={index} product={product} remove={remove} />
      ))}
    </>
  );
};

export default Products;
