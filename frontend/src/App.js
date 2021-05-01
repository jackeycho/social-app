import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* {user ? <Home /> : <Register />} */}
        </Route>
        <Route path="/login">
          {/* <Login /> */}
          {user ? <Redirect to="/" /> : <Login />}
          {/* {<Login /> || (user && <Redirect to="/" />)} */}
        </Route>
        <Route path="/register">
          {/* <Register /> */}
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
