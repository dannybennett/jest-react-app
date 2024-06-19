import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// colors - https://getbootstrap.com/docs/4.0/utilities/colors/

const navbarStyle = {
  borderRadius: "5px",
  margin: "10px",
};

function Menu() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/images">Random Image</Nav.Link>
            {/* <NavDropdown title="Examples" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#web/3.1">Example 1</NavDropdown.Item>
              <NavDropdown.Item href="#web/3.2">Example 2</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
