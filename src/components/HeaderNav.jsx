import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { navLinks } from "../constants";
import Container from "react-bootstrap/Container";

const HeaderNav = () => {
  return (
    <>
      <header className="bg-body-tertiary">
        <Container data-aos="fade-down">
          <Navbar expand="lg">
            <Navbar.Brand>
              <img src="/logo.svg" className="mb-3" alt="logo" />
              <span className="fs-2 fw-bold mx-auto">Nexcent</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="mx-auto gap-1">
                {navLinks.map((item) => (
                  <Nav.Link key={item.name} href={item.href}>
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
              <div className="d-flex gap-1 justify-content-end align-items-center">
                <Button variant="btn btn-outline-success">Login</Button>
                <Button variant="btn btn-success">Signup</Button>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default HeaderNav;
