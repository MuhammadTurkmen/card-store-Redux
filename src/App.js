import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { calculateTotals } from "./features/cart/cartSlice";

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
