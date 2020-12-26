import { Navbar, Nav } from 'react-bootstrap';

const Topbar = () => (
  <Navbar bg='dark' variant='dark'>
    <Navbar.Brand href='/'>Dealz</Navbar.Brand>
    <Nav.Link href='/new'>Track a new product</Nav.Link>
  </Navbar>
);

export default Topbar;
