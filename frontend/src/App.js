import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  /* const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name:{user.name}</h1>
              <h1>Age:{user.age}</h1>
              <h1>Username:{user.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  ); */

  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? <Homepage /> : <Login />}
            <Homepage />
          </Route>
          <Route path="/Login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
