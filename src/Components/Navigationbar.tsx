import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getCookie } from '../Services/CookiesHelper';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { decode } from '../Services/Autho';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Authorization = getCookie('token')
function refreshPage() {
  window.location.reload();
}
const Navigationbar: React.FC = () => {
  const { openCart, cartQuantity } = useShoppingCart()
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

              <Button variant="outline-dark" href="/login" >Log In</Button>
              :
              <>
               <NavDropdown title={<span className='items-center justify-start'><img src='https://i.imgur.com/b5yRiNy.png' className="object-contain h-8 w-8 inline" alt='usericon'/> {decode(getCookie('token')).datos.username} </span>} id="basic-nav-dropdown">
                <Link
                    to={{
                      pathname: `/user/${decode(getCookie('token')).datos.name}`
                    }}
                  >
                  
                <NavDropdown.Item href="/Login"><img src='https://i.imgur.com/b5yRiNy.png' className="object-contain h-8 w-8 inline" alt='logo'/>Mi Perfil</NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to='/Home'>
                  <Button variant="outline-dark" className='flex justify-self-center' onClick={() => {Cookies.remove('token'); refreshPage();}}>
                    Log Out
                  </Button>
                </Link>
               </NavDropdown>
              </>
            }
          </Nav>
          {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;