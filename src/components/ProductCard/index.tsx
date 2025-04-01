import { ProductCardProps } from "../../types/product";

import {  Link } from "react-router-dom";




export default function ProductCard({image, title, price, id}: ProductCardProps){
    return (
        <Link className ='product-card' to={`/products/${id}`}>
            <div className= 'product-image'>
            <img src={image} alt = {title} className="max-w-[150px] object-contain"/>
            </div>
             
            <div className="product-information">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            
        </Link>
    );
}