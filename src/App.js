import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/store";
import HomePage from "./Components/HomePage";
import FavoritesPage from "./Components/FavoritesPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </ul>
         

          <Routes>
            <Route exact path="/" element= {<HomePage/>}/>
            <Route path="/favorites" element= {<FavoritesPage/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
