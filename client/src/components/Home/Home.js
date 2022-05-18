import React, { Component } from "react";
import axios from "axios";
import InventoryHome from "../Inventory/InventoryHome";

class Home extends Component {
  state = {
    items: [],
    activeItems: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("http://localhost:5000/api/inventory")
      .then((response) => {
        console.log(response);
        this.setState({
          items: response.data,
          activeItems: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  fetchDataId(id) {
    axios
      .get(`http://localhost:5000/api/inventory/${id}`)
      .then((response) => {
        console.log("message:", response.data);
        this.setState({
          activeItems: response.data,
        });
      })
      .then((response) => {
        console.log(this.state.activeItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    console.log("In component did update:", id);
    if (id) {
      if (prevState.activeItems && prevState.activeItems.id !== id) {
        this.fetchDataId(id);
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
