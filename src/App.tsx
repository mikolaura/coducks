import { Form } from "./components/form/form";
import { Header } from "./components/header";
import { Images } from "./components/images";
import { ProductInfo } from "./components/product-info";
import { useCart } from "./hooks";
import type { Product, User } from "./types";

function App({ product, user }: { product: Product; user: User }) {
  const [cart, addToCart] = useCart();

  return (
    <div>
      <Form/>
    </div>
  );
}

export default App;
