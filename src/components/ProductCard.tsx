import { Link } from 'react-router-dom';
import { ProductCardProps } from '../types/product';

const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="block group h-full">
      <article className="border border-gray-700 rounded-lg p-4 hover:shadow-2xl transition-all duration-300 bg-gray-800 hover:bg-gray-700 h-full flex flex-col">
        <div className="relative overflow-hidden rounded-lg bg-gray-900 p-4 flex-grow">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="mt-4 space-y-3 flex flex-col">
          <h2 className="font-bold text-lg text-gray-100 line-clamp-2">{title}</h2>
          <p className="text-xl font-semibold text-indigo-400">${price}</p>
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors duration-300 font-medium mt-auto">
            Ver detalles
          </button>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
