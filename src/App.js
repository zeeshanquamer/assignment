import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import OpenRoute from "./components/OpenRoute";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <LoginPage />
            </OpenRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
