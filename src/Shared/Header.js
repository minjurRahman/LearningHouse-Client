import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect className='' expand="lg" bg="dark" variant="dark">
        <Container>
          <p className='text-white'>logo</p>
          <Navbar.Brand href="#home">Learning House</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/courses-category">Courses</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link title={user?.displayName} href="#deets">
                {
                  user.photoURL ?
                  <Image style={{height: '40px'}} roundedCircle src={user.photoURL}></Image>:
                  <FaUser></FaUser>
                }
              </Nav.Link>
              <label className="checkbox-inline">
                 <input className='text-white' type="checkbox" checked data-toggle="toggle"/> First
              </label>
              <Nav.Link eventKey={2} href="/">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;