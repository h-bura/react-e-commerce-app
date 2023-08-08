import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./component/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
      </Routes>
    </>
  );
}

export default App;
