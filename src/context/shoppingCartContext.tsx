import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { ProductCardProps } from "../types/product";

interface ShoppingCartContextProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  cartItems: ProductCardProps[];
  setCartItems: Dispatch<SetStateAction<ProductCardProps[]>>;
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext<ShoppingCartContextProps>(
  {} as ShoppingCartContextProps
);

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<ProductCardProps[]>([]);

  return (
    <ShoppingCartContext.Provider 
      value={{ count, setCount, cartItems, setCartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};