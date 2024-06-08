// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { ThemeProvider } from "./components/theme/ThemeContext";
import { SearchProvider } from "./components/users/SearchContext";

const App = () => {
  return (
    <SearchProvider>
      <ThemeProvider>
        <Router>
          <div className='App'>
            <Navbar />
            <Home />
          </div>
        </Router>
      </ThemeProvider>
    </SearchProvider>
  );
};
export default App;
