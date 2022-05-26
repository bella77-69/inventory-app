import React from "react";
import axios from "axios";
import EditInventory from "./EditInventory";

export default class AdminInventory extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/inventory`).then((response) => {
      const items = response.data;
      this.setState({ items });
    });
  }

  deleteRow(id, e) {
    axios
      .delete(`http://localhost:5000/api/inventory/${id}`)
      .then((response) => {
        console.log(response.data);

        const items = this.state.items.filter((item) => item.id !== id);
        this.setState({ items });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row mx-4 ">
          <h2 className="h2 text-center mb-4 mt-3 ">Paint Inventory</h2>
        </div>
        <table className="table table-striped table-responsive mx-4">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Color</th>
              <th scope="col">Quantity</th>
              <th scope="col">Available</th>
              <th scope="col">Running Low</th>
              <th scope="col">Out of Stock</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.color}</td>
                <td>{item.quantity}</td>
                <td>{item.available}</td>
                <td>{item.runninglow}</td>
                <td>{item.outofstock}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.deleteRow(item.id, e)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <EditInventory />
      </div>
    );
  }
}
