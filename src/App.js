import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar.js";
import Search from "./components/users/Search.js";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import About from "./components/pages/About.js";
import NotFound from "./components/pages/NotFound.js";
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/about' component={About} />
            <Route exact path='/*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
export default App;
