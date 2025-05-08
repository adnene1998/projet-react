import AppRoutes from './Routes';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}