import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUseProfile(name, photoURL);
            handleEmailVerification();
            toast.success('Please verify your email address before login');
        })
        .catch(e => {
          console.error(e)
          setError(e.message)
        });

    }

    const handleUpdateUseProfile = (name, photoURL) =>{

      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then( () =>{})
      .catch(error => console.error(error))
    }

    const handleEmailVerification = ()  =>{
      verifyEmail()
      .then(() =>{})
      .catch(error =>console.error(error))
    }

    const handleAccepted = (event) =>{
      setAcceptedTerms(event.target.checked);
    }

    return (

        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter Email" required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password"  required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
             type="checkbox" 
             onClick={handleAccepted}
             label={<> Accept <Link to='/terms'>Terms and Conditions</Link></>} />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={!acceptedTerms}>
          Register
        </Button>
        <Form.Text className="text-danger">
            {error}
          </Form.Text>
          <p className='mt-3'>Already Loged in? Then, go to <Link to='/login'>Log in</Link></p>
      </Form>
    );
};

export default Register;