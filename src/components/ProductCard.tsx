import { Link } from 'react-router-dom';
import { ProductCardProps } from '../types/product';

const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="block group">
      <article className="border rounded-lg p-4 hover:shadow-xl transition-all duration-300 bg-white hover:bg-gray-50">
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="mt-4 space-y-2">
          <h2 className="font-bold text-lg text-gray-800 line-clamp-2">{title}</h2>
          <p className="text-xl font-semibold text-indigo-600">${price}</p>
          <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
            Ver detalles
          </button>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
