import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import sideImg from '../../Images/sidepic.jpg'
import useAuth from '../../Hooks/UseAuth';
const Login = () => {
  const {signinUsingGoogle,error} =useAuth();
  // console.log(signinUsingGoogle)
    return (
        <div >
            <h1>Welcome to<span  className="text-danger"> BM hospital Care</span></h1>
            <h5 className="text-dark fe-bold">Please Login</h5>
            <hr className="w-25 mx-auto" />
           <div className="container">
           <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12  ">
            <Form className="ps-3 ">
  <Form.Group className="mb-3 text-start " controlId="formBasicEmail">
    <Form.Label className="fw-bold">Email address</Form.Label>
    <Form.Control   className="w-50" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted ">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
    <Form.Label className="fw-bold">Password</Form.Label>
    <Form.Control className="w-50" type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" className="float-start btn-danger" type="submit">
    Submit
  </Button>
    <span>Or sign in with </span>
  <Button  onClick={signinUsingGoogle} className="btn btn-danger rounded">Google</Button>
  <p>{error}</p>
</Form>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <img className="w-75" src={sideImg} alt="" />
            </div>
            </div>
           </div>
        </div>
    );
};

export default Login;