import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import dark from '../../images/dark.png'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">
                    <img src={dark} alt="site-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto link-container">
                        <Nav.Link className="item-link" href="/home">Home</Nav.Link>
                        <Nav.Link className="item-link" href="/link">About</Nav.Link>
                        <Nav.Link className="item-link" href="/link">Service</Nav.Link>
                        <Nav.Link className="item-link" href="/link">Portfolio</Nav.Link>
                        <Nav.Link className="item-link" href="/link">News</Nav.Link>

                    </Nav>
                    <button className="regular-btn">contact</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;