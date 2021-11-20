import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
            <Container className="header">
                <Navbar.Brand href="#home"><img
                    alt=""
                    src={Logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    />{' '}
                    <span style={{fontSize: "30px"}}>Mero Bhajan</span>
                </Navbar.Brand>
                <div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#Bhajan">Bhajan</Nav.Link>
                            <Nav.Link href="#Geet">Geet</Nav.Link>
                            <Nav.Link href="#Comfort">Comfort</Nav.Link>
                            <Nav.Link href="#Worship">Worship</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header