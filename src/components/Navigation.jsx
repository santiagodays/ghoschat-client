import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className="justify-content-evenly">
          <img src="https://advoloso.sirv.com/Images/Goschat.svg" alt="" />
          <Navbar.Brand href="/">Goschat</Navbar.Brand>
          <Nav>
            <Nav.Link href="/sign_up">Sign Up</Nav.Link>
            <Nav.Link href="/sign_in">Log In</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;