import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context/shoppingCartContext";

export default function ShoppingCartPage() {
  const context = useContext(ShoppingCartContext);
  const [shoppingCart, setShoppingCart] = useState(context.cartItems)
  const handleDelete = (id:number)=>{
    setShoppingCart(shoppingCart.filter(item => item.id !== id))
  };

  const total = shoppingCart.reduce((total, item)=> total + item.price, 0)

  return (
    <section>
      <h1>Tus productos</h1>
      <div className="products">
        {shoppingCart.map((item) => (
          <div className="product flex gap-4 items-center" key={item.id}>
            <div className="product-image">
              <img className="max-w-[50px]" src={item.image} alt={item.title} />
            </div>
            <div className="Product-price">
                <p>{item.price}</p>
            </div>
            <div className="product-info">
              <p>{item.title}</p>
            </div>
            <div className = "action">
                <button className="bg-red-400 text-white px-2 py-0" 
                onClick={()=>handleDelete(item.id)}>
                    Eliminar</button>
            </div>
          </div>
        ))}
        <p>Total a pagar: {total}</p>
      </div>
    </section>
  );
}