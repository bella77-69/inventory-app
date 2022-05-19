import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import AdminInventory from "./components/AdminInventory/AdminInventory";
import EditInventory from "./components/AdminInventory/EditInventory";
import LoginForm from "./components/LoginForm/LoginForm";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" exact component={RegistrationForm} />
          <Route path="/admin/inventory" exact component={AdminInventory} />
          <Route path="/admin/inventory/edit" exact component={EditInventory} />
          <Route path="/login" exact component={LoginForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;