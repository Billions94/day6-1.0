import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




const MyNav = () => (
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="navDark sticky-top ">
        <Navbar.Brand href="#home"><em className="bold">Alex books</em> <img src="../assets/bookIcon.png" alt="" className = "bookIcon"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features" className="active bold">Home</Nav.Link>
            <Nav.Link href="#pricing" className="bold">Browse</Nav.Link>
            <Nav.Link href="#about" className="bold">About</Nav.Link>
            <Nav.Link href="" className="bold">B/O</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
)

export default MyNav