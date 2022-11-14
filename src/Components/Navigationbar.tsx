import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getCookie } from '../Services/CookiesHelper';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { decode } from '../Services/Autho';

const Authorization = getCookie('token')
function refreshPage() {
  window.location.reload();
}
function redirect() {
  window.location.href = 'http://localhost:3000/'
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
            </Nav>
            <Nav>
            {typeof Authorization == 'undefined'?
              <Button variant="outline-dark" href="/login">Log In</Button>
              :
              <>
               <NavDropdown title={<span className='flex items-center justify-start'><img src='https://i.imgur.com/b5yRiNy.png' className="object-contain h-10 w-10" alt='usericon'/> {decode(getCookie('token')).datos.name} </span>} id="basic-nav-dropdown">
                <Link
                    to={{
                      pathname: `/user/${decode(getCookie('token')).datos.name}`
                    }}
                  >
                  <NavDropdown.Divider />
                  <Button variant="outline-dark"><img src='https://i.imgur.com/b5yRiNy.png' className='h-10' alt='logo'/>Mi Perfil</Button>
                </Link>
                <Link to='/Home'>
                <Button variant="outline-warning" onClick={() => {Cookies.remove('token'); refreshPage();}}>Log Out</Button>
                </Link>
               </NavDropdown>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;