import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getCookie } from '../Services/CookiesHelper';
import User from './User';
import Cookies from 'js-cookie';

const Authorization = getCookie('token')
function refreshPage() {
  window.location.reload();
}

const Navigationbar: React.FC = () => {


  return (
    <Navbar className='bg-Pumpkin' variant="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="/home"><img src='https://i.imgur.com/uwuSHzp.png' className='h-10' alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="https://www.instagram.com/inspiraing/">Instagram</Nav.Link>
            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Te">Té en hojas e Infusiones</NavDropdown.Item>
              <NavDropdown.Item href="/Chocolate">
                Chocolate Caliente
              </NavDropdown.Item>
              <NavDropdown.Item href="/Accesorios">Accesorios</NavDropdown.Item>
            </NavDropdown>
            {typeof Authorization == 'undefined'?
              <Button variant="outline-success" href="/Login">Log In</Button>
              :
              <>
                <User/>
                <Navbar.Brand href="/home"><img src='https://i.imgur.com/b5yRiNy.png' className='h-10' alt='logo'/></Navbar.Brand>
                <Button variant="outline-success" onClick={() => {Cookies.remove('token'); refreshPage();}}>Log Out</Button>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;