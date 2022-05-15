import { useState, useEffect } from 'react'
import "./App.css";

function App() {

  const [color, setColor ] = useState('');
  const [qty, setQty] = useState('');


  return (
    <div className="App">
      <h1>Inventory Application</h1>
      <div className="form">
        <label>Paint Color</label>
        <input type="text" name="paintName" onChange={(e) => setColor(e.target.value)}/>
        <label>Paint Quantity</label>
        <input type="text" name="paintQty" onChange={(e) => setQty(e.target.value)} />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
