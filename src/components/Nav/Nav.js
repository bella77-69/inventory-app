import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
export default class NavBar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <Navbar
        collapseOnSelect
        fixedtop="true"
        expand="sm"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>
          <a href="/">Stock-Status</a>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/admin">Admin Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
