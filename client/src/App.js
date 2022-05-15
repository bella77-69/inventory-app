import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Inventory Application</h1>
      <div className="form">
        <label>Paint Color</label>
        <input type="text" name="paintName" />
        <label>Paint Quantity</label>
        <input type="text" name="paintQty" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
