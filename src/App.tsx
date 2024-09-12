import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./navBar/Navbar";
import Home from "./home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddDrink from "./addDrink/AddDrink";
import ShowDrinks from "./showMyDrinks/ShowDrinks";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addDrink" element={<AddDrink />} />
        <Route path="/showDrinks" element={<ShowDrinks />} />
      </Routes>
    </Router>
  );
}

export default App;
