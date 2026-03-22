import { products } from "../../lib/products";
import ProductCard from "../components/productCard/ProductCard";

export default function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}   