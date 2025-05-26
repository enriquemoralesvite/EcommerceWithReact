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
        if (!data) return;
        context.setCount(context.count + 1);
        context.setCartItems([...context.cartItems, data]);
    };

    if (loading) return <p className="text-gray-100 text-center text-xl">Cargando productos ...</p>;
    if (error) return <p className="text-gray-100 text-center text-xl">Hubo un error</p>;
    if (!data) return <p className="text-gray-100 text-center text-xl">No se encontró el producto</p>;

    return (
        <main className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Imagen del producto */}
                    <div className="bg-gray-900 p-8 rounded-lg flex items-center justify-center">
                        <img 
                            className="max-h-[400px] object-contain" 
                            src={data.image} 
                            alt={data.title}
                        />
                    </div>

                    {/* Información del producto */}
                    <div className="space-y-6">
                        <h1 className="text-3xl font-bold text-gray-100">{data.title}</h1>
                        
                        <div className="flex items-center space-x-4">
                            <span className="text-2xl font-bold text-indigo-400">${data.price}</span>
                            <span className="text-sm text-gray-400">IVA incluido</span>
                        </div>

                        <p className="text-gray-300 leading-relaxed">{data.description}</p>

                        <div className="pt-4">
                            <button 
                                className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-300 font-medium text-lg flex items-center justify-center space-x-2"
                                onClick={handleClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <span>Agregar al carrito</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
