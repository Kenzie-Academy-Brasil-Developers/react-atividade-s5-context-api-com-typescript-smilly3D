import { useCart } from "../../Providers/Cart";
import { Product } from "../../types/products";
import Button from "../Button";
import { Container, Image } from "./styled";

interface ProductsCardProps {
  product: Product;
  remove?: boolean;
}

export const ProductsCard = ({
  product,
  remove = false,
}: ProductsCardProps) => {
  const { title, price, image } = product;
  const { addProduct, deleteProduct } = useCart();

  return (
    <Container>
      <Image src={image} />
      <div>{title}</div>
      <div>{price}</div>
      {remove ? (
        <Button deleted={true} onClick={() => deleteProduct(product)}>
          Remover
        </Button>
      ) : (
        <Button onClick={() => addProduct(product)}> Adicionar</Button>
      )}
    </Container>
  );
};
