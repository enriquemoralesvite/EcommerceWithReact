import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context/shoppingCartContext";
import CartIcon from "../CartIcon";
import { useContext } from "react";

export default function Nav(){

    const context = useContext(ShoppingCartContext)
    return <nav className = "bg-slate-300 p-4 ">
        <ul className = "flex gap-4 items-center justify-between">
            <Link to ={"/"} className="logo" >
                <p className ="text-indigo-500 font bold">Ecommerce</p>  
            </Link>
            <div className= "menu flex gap-4 items-center justify-between">
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brand</li>
            <Link to ={"/cart"}className = "h-6 w-6 relative" >
                <CartIcon/>
                <span className = "bg-red-400 text-white rounded-full px-2 absolute -top-2 -right-4">
                    {context.count}
                </span>
            </Link>
            </div>
            
        </ul>
    </nav>

}