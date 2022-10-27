import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then( () =>{})
    .catch(error => console.error(error))
  }

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
              <>
                {
                  user?.uid ?
                  <>
                  <Button onClick={handleLogOut} variant="light">Log out</Button>
                  </>
                  :
                  <>
                   <Link className='me-2' to='/login'><Button variant="light">Login</Button></Link>
                   <Link to='/register'><Button variant="light">Register</Button></Link>
                  </>
                }
              </>
              <Link title={user?.displayName} to='/profile'>
                {
                  user?.photoURL ?
                  <Image style={{height: '40px'}} roundedCircle src={user?.photoURL}></Image>:
                  <FaUser></FaUser>
                }
              </Link>
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