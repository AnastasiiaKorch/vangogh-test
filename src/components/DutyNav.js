import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavDropdown} from "react-bootstrap";

function DutyNav() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container style={{display:"flex", justifyContent:"end"}}>

                    <Nav style={{display:"flex", justifyContent:"end"}}>
                        <Nav.Link href="#home">Доставка и оплата</Nav.Link>
                        <Nav.Link href="#features">Гарантия и возврат</Nav.Link>
                        <NavDropdown title="EN" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">RU</NavDropdown.Item>


                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
}

export default DutyNav;