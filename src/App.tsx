import "./App.css";
import Products from "./components/Products";
import { useCart } from "./Providers/Cart";
import { useProductList } from "./Providers/ProductList";
import { Container, ListContainer, ProductListContainer } from "./styles";

function App() {
  const { ProductList } = useProductList();
  const { cart } = useCart();
  console.log(ProductList);
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <ProductListContainer>
            <Products products={ProductList} />
          </ProductListContainer>
          <h2>Cart</h2>
          <ListContainer>
            <Products products={cart} remove={true} />
          </ListContainer>
        </Container>
      </header>
    </div>
  );
}

export default App;
