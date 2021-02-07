import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navbar() {
    return (
        <Container>
            <Navbar id="navbar">
                <Navbar.Brand id="home">Micah BigEagle</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link id="navitem" href="Home">About</Nav.Link>
                    <Nav.Link id="navitem" href="Work">Portfolio</Nav.Link>
                    <Nav.Link id="navitem" href="Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default Navbar;