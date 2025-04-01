import { useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { ProductCardProps } from "../types/product";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/shoppingCartContext";

export default function ProductDetailPage() {
    const context = useContext(ShoppingCartContext);
    const { id } = useParams();
    const productId = Number(id);

    const { data, loading, error } = useFetch<ProductCardProps>(
        `https://fakestoreapi.com/products/${productId}`
    );

    const handleClick = () => {
        if (!data) return; // Guard against null data
        
        context.setCount(context.count + 1);
        context.setCartItems([...context.cartItems, data]);
    };

    if (loading) return <p>Cargando productos ...</p>;
    if (error) return <p>Hubo un error</p>;
    if (!data) return <p>No se encontró el producto</p>;

    return (
        <main className="px-3">
            <div className="producto">
                <h1 className="text-xl font-bold mb-4">{data.title}</h1>
                <img 
                    className="max-w-[180px] mb-4" 
                    src={data.image} 
                    alt={data.title}
                />
                <p className="mb-4">{data.description}</p>
            </div>
            <div className="actions">
                <button 
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600" 
                    onClick={handleClick}
                >
                    Agregar al carrito
                </button>
            </div>
        </main>
    );
}
