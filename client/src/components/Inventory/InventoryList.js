import { useState, useEffect } from "react";
// import "../App.css";
import axios from "axios";

function InventoryList() {
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paints, setPaints] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/inventory')
    .then((response) => {
      setPaints(response.data)
    })
  }, [])

  const submitInput = () => {
    axios
      .post("http://localhost:5000/api/inventory", {
        color: color,
        quantity: quantity,
      })
      .then(() => {
        alert("successful insert");
      });
  };

  return (
    <div className="App">
      <h1>Inventory Application</h1>
      <div className="form">
        <label>Paint Color</label>
        <input
          type="text"
          name="paintName"
          onChange={(e) => setColor(e.target.value)}
        />
        <label>Paint Quantity</label>
        <input
          type="text"
          name="paintQty"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button onClick={submitInput}>Submit</button>
       
        {paints.map((val, id) => {
          return <p key={id}>Paint Color: {val.color} | 
          Paint Quantity: {val.quantity}</p>
        })}
      </div>
    </div>
  );
}

export default InventoryList;