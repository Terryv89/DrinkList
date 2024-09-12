import { Navbar as NavbarBs, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3 m-3">
      <h3>Terry´s Drinks</h3>
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/addDrink" as={NavLink}>
            Add a new Drink
          </Nav.Link>
          <Nav.Link to="/showDrinks" as={NavLink}>
            show your Drinks
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
