import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SecondH = () => {
    const { user, setUser, providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGooglesignIn = event =>{

        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
            console.log(user);
        }).catch(error => console.error(error))

    }

    const handleGithubSignIn = () =>{
        providerLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            setUser(user)
            console.log(user);
        })
        .catch(error => console.error(error))
    }


    return (
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">Sign in with:</Navbar.Brand>
          <Button onClick={handleGooglesignIn} className='me-2' variant="primary"><FaGoogle></FaGoogle> Google</Button>{' '}
          <Button onClick={handleGithubSignIn} className='me-2' variant="secondary"><FaGithub></FaGithub> GitHub</Button>{' '}
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              Signed in as: {user?.displayName}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default SecondH;