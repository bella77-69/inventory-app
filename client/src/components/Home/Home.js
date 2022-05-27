import React, { Component } from "react";
import axios from "axios";
import InventoryHome from "../Inventory/InventoryHome";

class Home extends Component {
  state = {
    items: [],
    activeItems: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/inventory")
      .then((response) => {
        console.log(response)
        this.setState({ items: response.data, activeItems: response.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getItemById(id) {
    axios
      .get(`http://localhost:5000/api/inventory${id}`)
      .then((response) => {
        this.setState({ activeItems: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    // console.log("Component did update:", id);
    if (id) {
      if (prevState.activeItems && prevState.activeItems.id !== id) {
        this.getItemById(id);
      }
    }
  }

  render() {
    return (
      <div>
        <InventoryHome
          items={this.state.items}
          activeItems={() => this.state.activeItems}
        />
      </div>
    );
  }
}
export default Home;
