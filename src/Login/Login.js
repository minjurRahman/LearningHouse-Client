import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';




const Login = () => {
    const [error, setError] = useState('')
    const {signIn, setLoading} = useContext(AuthContext);
    const navigate = useNavigate()

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('')
            if(user.emailVerified){
              navigate(from, {replace: true})
            }
            else{
              toast.error('Your email is not verifed. Please verified your email.')
            }
        })
        .catch(e => {
          console.error(e)
          setError(error.message)
        })
        .finally(() =>{
          setLoading(false);
        })

    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required/>

        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger">
           {error}
          </Form.Text>
          <p className='mt-3'>Already Register? if not, go to <Link to='/register'>Register</Link></p>
      </Form>
      
    );
};

export default Login;