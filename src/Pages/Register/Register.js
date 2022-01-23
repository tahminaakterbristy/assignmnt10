import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Register = () => {
    return (
        <div >
            <h1>Welcome to<span  className="text-danger"> BM hospital Care</span></h1>
            <h5 className="text-dark fe-bold">Please Register</h5>
            <hr className="w-25 mx-auto" />
            <Form className='container mt-5'>
  <Row className="mb-3">
    <Form.Group as={Col} className="text-start" controlId="formGridEmail">
      <Form.Label className=" fw-bold">Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} className="text-start" controlId="formGridPassword">
      <Form.Label className=" fw-bold">Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3 text-start" controlId="formGridAddress1">
    <Form.Label className=" fw-bold">Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3 text-start" controlId="formGridAddress2">
    <Form.Label className=" fw-bold">Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label className=" fw-bold">City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label className=" fw-bold">State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label className=" fw-bold">Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" className="text-start" label="Check me out" />
  </Form.Group>

  <Button variant="primary" className="btn-danger rounded" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Register;