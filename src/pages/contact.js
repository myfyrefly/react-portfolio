import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Container from "../components/Container";

function Contact() {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Message Body</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="Message" />
        </InputGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
