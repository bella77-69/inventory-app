import React from "react";
import axios from "axios";
import EditInventory from "./EditInventory";

export default class AdminInventory extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/api/inventory`).then((res) => {
      const items = res.data;
      this.setState({ items });
    });
  }

  deleteRow(id, e) {
    axios.delete(`http://localhost:5000/api/inventory/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const items = this.state.items.filter((item) => item.id !== id);
      this.setState({ items });
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table table-striped">
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
        <div>
          <EditInventory />
        </div>
      </div>
    );
  }
}
