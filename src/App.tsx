import ProductCard from "./components/ProductCard";
import { useFetch } from "./hooks/useFetch";
import { ProductCardProps } from "./types/product";

function App() {
  const { data, loading, error } = useFetch<ProductCardProps[]>("https://fakestoreapi.com/products/");
  
  if (loading) return <p className="text-gray-100">Cargando productos ...</p>;
  if (error) return <p className="text-gray-100">Hubo un error</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
      {data?.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </section>
  );
}

export default App;