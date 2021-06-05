import { Container, Nav ,Navbar} from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'
export const Header : React.FC= () => {

    return (
        <header>
    <Navbar bg="light" variant = 'light' expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
    <Navbar.Brand >The Art Store</Navbar.Brand>

            </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
        <LinkContainer to='/cart'>
      <Nav.Link > <i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
      <Nav.Link> <i className="fas fa-user"></i>Sign In</Nav.Link>
        </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </header>
    );
}

