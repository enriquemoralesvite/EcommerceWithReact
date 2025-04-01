import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import ProductDetailPage from "./pages/ProductDetailPage";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import Layout from "./components/Layout";
import ShoppingCartPage from "./pages/ShoppingCartPage";

createRoot(document.getElementById('root')!).render(
  <ShoppingCartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ShoppingCartProvider>
);
