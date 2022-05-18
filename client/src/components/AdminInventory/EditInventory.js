import React, { useRef, useState } from "react";
import axios from "axios";

function EditInventory(props) {
  const put_id = useRef(null);
  const put_color = useRef(null);
  const put_quantity = useRef(null);
  const put_available = useRef(null);
  const put_runninglow = useRef(null);
  const put_outofstock = useRef(null);
  const [putResult, setPutResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };
  async function putData() {
    const id = put_id.current.value;
    if (id) {
      const putData = {
        color: put_color.current.value,
        quantity: put_quantity.current.value,
        available: put_available.current.value,
        runninglow: put_runninglow.current.value,
        outofstock: put_outofstock.current.value
      };
      try {
        const res = await axios.put(
          `http://localhost:5000/api/inventory/${id}`,
          putData,
        //   {
        //     headers: {
        //       "x-access-token": "token-value",
        //     },
        //   }
        );
        const result = {
          status: res.status + "-" + res.statusText,
          headers: res.headers,
          data: res.data,
        };
        setPutResult(fortmatResponse(result));
      } catch (err) {
        setPutResult(fortmatResponse(err.response?.data || err));
      }
    }
  }
  const clearPutOutput = () => {
    setPutResult(null);
    console.log(putResult)
  };
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Update Inventory</div>
        <div className="card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_id}
              placeholder="Id"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_color}
              placeholder="Color"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_quantity}
              placeholder="Quantity"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_available}
              placeholder="Available"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_runninglow}
              placeholder="Runnin Low"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref={put_outofstock}
              placeholder="Out of Stock"
            />
          </div>
          <button className="btn btn-sm btn-primary" onClick={putData}>
            Update Data
          </button>
          <button
            className="btn btn-sm btn-warning ml-2"
            onClick={clearPutOutput}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditInventory;
