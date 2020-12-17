import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    color: 'blue',
    width: 100,
};

const NavBar = () => (
    <div>
        <Navbar bg="dark" variant="light" expand="lg">
            <Navbar.Brand href="/">Weifan Ou</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/hobby">Hobby</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default NavBar;