import React from "react";

function InventoryHome({ items }) {
  console.log(items)
  const showItem = (item, index) => {
    return (
      <tr key={index}>
        <th scope="row">{item.color}</th>
        <td>{item.quantity}</td>
        <td>{item.available}</td>
        <td>{item.runninglow}</td>
        <td>{item.outofstock}</td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="h2 text-center mb-4 mt-3 mx-2">Paint Inventory</h2>
      </div>
      <table className="table table-striped table-responsive">
        <thead>
          <tr>
            <th scope="col">Color</th>
            <th scope="col">Quantity</th>
            <th scope="col">Available</th>
            <th scope="col">Running Low</th>
            <th scope="col">Out of Stock</th>
          </tr>
        </thead>
        <tbody>{items.map(showItem)}</tbody>
      </table>
    </div>
  );
}

export default InventoryHome;
