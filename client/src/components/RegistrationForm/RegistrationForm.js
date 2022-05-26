import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
  });
  const history = useHistory();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
 
      const data = {
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword
      };
      axios
        .post("https://stock-status-inventory-app.herokuapp.com/api/inventory/admin/", data)
        .then(function (response) {
          if (response.status === 200) {
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to admin inventory page..",
            }));
            history.push("/admin/inventory");
            console.log(response);
          } 
        })
        .catch((error) => {
          console.log(error);
        });
    } 
  };

  const redirectToLogin = () => {
    history.push("/login");
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };
  return (
    <div className="container mt-5">
       <h2 className="h2 text-center mb-4 mt-3 mx-2">Register</h2>
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center ">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="exampleInputPassword1">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Register
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="mt-2">
        <span>Already have an account? </span>
        <span className="loginText" onClick={() => redirectToLogin()}>
          Login here
        </span>
      </div>
    </div>
    </div>
  );
}

export default RegistrationForm;
