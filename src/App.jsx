import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./components/Products";
import Controls from "./components/Controls";

function App() {
  const [product, setProduct] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        setVisibleProducts(json.slice(0, 3));
      });
  }, []);

  const loadMoreProducts = () => {
    const nextIndex = currentIndex + 3;
    const nextProducts = product.slice(nextIndex, nextIndex + 3);
    setVisibleProducts([...visibleProducts, ...nextProducts]);
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          {product.length > 0 && <Products items={visibleProducts} />}
        </div>
        <Controls handleLoad={loadMoreProducts} />
      </div>
    </>
  );
}

export default App;
