import {Container,Nav, Navbar, Button} from 'react-bootstrap';
import "./header.css"

function Header(props:any) {
  const {user, setPage} = props
  const Handleclick = () =>{
    sessionStorage.removeItem("LoggedIn")
    setPage(0)
  }
    return (
        <Navbar expand="lg" fixed="top" className="header">
          <Container>
            <Navbar.Brand >Hello, {user}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="logout-container">
                <Button variant="danger" 
                onClick={Handleclick}>
                  Logout
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;