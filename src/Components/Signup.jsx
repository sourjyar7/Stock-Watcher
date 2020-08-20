import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
class Signup extends Component {
    
    render() { 
        return (<Modal 
            show={this.props.show}
            onHide={this.props.onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton className="bg-warning text-dark border-dark">
              <Modal.Title id="contained-modal-title-vcenter">
                Sign Up
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-warning text-dark">
            <Form noValidate validated={this.props.validated} onSubmit={this.props.handleSubmit}>
               <Form.Row>
               <Form.Group md="4" controlId="validationCustom01">
               <Form.Label>Email Id</Form.Label>
               <Form.Control
                 required
                 type="text"
                 placeholder="Fullname"
               />
               <Form.Control.Feedback className="text-red">Looks Good !</Form.Control.Feedback>
               </Form.Group>
               </Form.Row>
               <Form.Row>
               <Form.Group md="4" controlId="validationCustom02">
               <Form.Label>Set Password</Form.Label>
               <Form.Control
                 required
                 type="password"
                 placeholder="password"
               />
               <Form.Control.Feedback className="text-red">Looks Good !</Form.Control.Feedback>
               </Form.Group>
               </Form.Row>
               <Form.Row>
               <Form.Group md="4" controlId="validationCustom02">
               <Form.Label>Re-enter Password</Form.Label>
               <Form.Control
                 required
                 type="password"
                 placeholder="confirm password"
               />
               <Form.Control.Feedback className="text-red">Looks Good !</Form.Control.Feedback>
               </Form.Group>
               </Form.Row>
               <Button type="submit">Submit</Button>
               </Form>
            </Modal.Body>
            <Modal.Footer className="bg-warning text-dark border-dark">
              <Button className="btn btn-info" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>  );
    }
}
 
export default Signup;