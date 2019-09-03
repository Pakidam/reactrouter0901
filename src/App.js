import React from "react";
import { Link, Route } from "react-router-dom";
import Category from "./Category";
import Home from "./Home";
import Products from "./Products";

function App() {
  return (
    <div>
      This is about React Router DOM!
      <ul>
        <li>
          <Link to="/home">Homes</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Route path="/home" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
    </div>
  );
}

export default App;
