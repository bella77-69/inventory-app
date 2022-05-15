import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InventoryList from "./components/Inventory/InventoryList";
import EditInventory from './components/Inventory/EditInventory';
function App() {

  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path='/' exact component={InventoryList} />
      {/* <Route path='/edit/:id'exact component={EditInventory} />   */}
      </Switch>
    </div>
  </Router>
  );
}

export default App;
