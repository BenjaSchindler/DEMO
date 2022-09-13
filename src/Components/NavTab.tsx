import Nav from 'react-bootstrap/Nav';

function NavTab() {
  return (
    <>
      <Nav className="justify-content-center content-center" activeKey="/home">
        <Nav.Item className='text-lg px-3 sm:text-4xl'>
          <Nav.Link className='text-white' href="#Acerca de Nosotros">Acerca de Nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item className='text-lg px-3 sm:text-4xl'>
          <Nav.Link className='text-white' eventKey="link-1">Nuestros Productos</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item className='text-lg px-3 sm:text-3xl'>
          <Nav.Link className='text-white' eventKey="link-2">Link</Nav.Link>
        </Nav.Item> */}
      </Nav>
    </>
  );
}

export default NavTab;