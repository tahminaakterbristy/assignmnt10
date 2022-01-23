import Button from '@restart/ui/esm/Button';
import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/UseAuth';
import navlogo from '../../../Images/logo/logo-1.jpg'
const Header = () => {
  const {user,logOut} =useAuth()
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home" className="text-danger">
    <img
        src={navlogo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
        </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as={HashLink}to="/home#home" className="text-danger">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services" className="text-danger">services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#doctors" className="text-danger">Doctors</Nav.Link>
      {
        user?.email ?
        <Button onClick={logOut} className="btn-danger" >Logout</Button>
        :<Nav.Link as={Link} to="/login" className="text-danger">Login</Nav.Link>
        }
        <Nav.Link as={Link} to="/register" className="text-danger">Register</Nav.Link>
      <Navbar.Text className="ms-2 text-danger">
        {user?.displayName}
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </>
    );
};

export default Header;