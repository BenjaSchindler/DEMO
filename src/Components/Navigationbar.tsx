import jwtDecode from 'jwt-decode';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { clearSessionStorage, getCookie, setCookie } from '../Services/CookiesHelper';
import jwt_decode from 'jwt-decode'

const Authorization = getCookie('token')
function refreshPage() {
  window.location.reload();
}

console.log(getCookie('token'))
const token = getCookie('token')
const decoded = String(token)

const Navigationbar: React.FC = () => {
  /*
  if (decoded == "") {
    console.log('sad')
  }else{
    const data = jwt_decode(decoded)
    const data2 = String(data)
    const data1 = JSON.parse(data2)
    console.log(data1)
  }
 */  


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
            {Authorization == undefined?
            <Button variant="outline-success" href="/Login">Log In</Button>
            :
            <>
              <Button variant="outline-success" onClick={() => { clearSessionStorage(); refreshPage();}}>Log Out</Button>
              <Nav.Link href="/Home">{'a'}</Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;