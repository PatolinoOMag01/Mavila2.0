import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import MVClub from "./pages/MVClub";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import OrderConfirmed from "./pages/OrderConfirmed";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mv01" element={<Product />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/club" element={<MVClub />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/pedido-confirmado" element={<OrderConfirmed />} />
      </Routes>
    </>
  );
}

export default App;