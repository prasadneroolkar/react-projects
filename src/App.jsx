import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./components/Products";

function App() {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {product.length > 0 && <Products items={product} />}
        </div>
      </div>
    </>
  );
}

export default App;
