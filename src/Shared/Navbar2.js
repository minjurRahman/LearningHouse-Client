import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Navbar2 = () => {
    return (
        <Navbar className='mb-4'>
        <Container>
          <Navbar.Brand href="#home">Sign in with</Navbar.Brand>
          <Button className='me-3' variant="primary"><FaGoogle></FaGoogle> Google</Button>{' '}
          <Button variant="secondary"><FaGithub></FaGithub> GitHub</Button>{' '}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbar2;