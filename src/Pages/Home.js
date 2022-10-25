import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <div>
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
            <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-light">
          <div className="form-floating mb-3">
            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <hr className="my-4"/>
          <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
          <div>
            <h5>Or sign in using:</h5>
              <Button variant="primary"><FaGoogle></FaGoogle> Google</Button>{' '}
              <Button variant="secondary"><FaGithub></FaGithub> GitHub</Button>{' '}
             {/* <Button variant="info">Info</Button>{' '} */}
          </div>
        </form>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Home;