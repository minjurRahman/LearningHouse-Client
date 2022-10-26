import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Navbar2 = () => {

    const { user } = useContext(AuthContext);

    const { providerLogin } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const handleGooglesignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        }).catch(error => console.error(error))

    }

    return (
        <Navbar className='mb-4'>
        <Container>
          <Navbar.Brand href="#home">Sign in with</Navbar.Brand>
          <Button onClick={handleGooglesignIn} className='me-3' variant="primary"><FaGoogle></FaGoogle> Google</Button>{' '}
          <Button variant="secondary"><FaGithub></FaGithub> GitHub</Button>{' '}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              Signed in as: <span title={user.displayName}>{user.displayName}</span>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navbar2;