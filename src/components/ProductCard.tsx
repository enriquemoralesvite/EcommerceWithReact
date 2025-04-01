import { Link } from 'react-router-dom';
import { ProductCardProps } from '../types/product';

const ProductCard = ({ id, title, price, image }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className="block">
      <article className="border rounded-lg p-4 hover:shadow-lg transition">
        <img src={image} alt={title} className="w-full h-48 object-contain" />
        <h2 className="mt-2 font-bold">{title}</h2>
        <p className="text-gray-600">${price}</p>
      </article>
    </Link>
  );
};

export default ProductCard;
