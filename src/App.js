import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Details from "./components/Details";
import Signinpage from "./components/Signinpage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />

        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/Signin" exact component={Signinpage} />
        <Route path="/details/:id" exact component={Details} />
      </Provider>
    </Router>
  );
}

export default App;
