import { Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  return (
    <BSNavbar expand="lg" className="custom-navbar">
      <Container>
        {/* 1. Brand/Logo */}
        <BSNavbar.Brand as={Link} to="/" className="brand-text">
          <span>Pokédex-Game</span>
        </BSNavbar.Brand>

        {/* 2. Toggle pour mobile */}
        <BSNavbar.Toggle aria-controls="navbar-nav" />

        {/* 3. Liens de navigation */}
        <BSNavbar.Collapse id="navbar-nav" className="navbar-nav">
          <Nav className="navbar-nav-custom">
            {/* Liens ici */}
            <Nav.Link className="onglet" as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="onglet" as={Link} to="/">
              About
            </Nav.Link>
            <Nav.Link className="onglet" as={Link} to="/pokedex">
              Pokédex
            </Nav.Link>
            <Nav.Link className="onglet" as={Link} to="/">
              Combat
            </Nav.Link>
            <Nav.Link onClick={() => Navigate("/login")}>
              <button className="buttonCustom">Log in</button>
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
