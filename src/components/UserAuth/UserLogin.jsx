import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./UserLogin.css";

const UserLogin = () => {
  return (
    <Fragment>
      <section
        id="login"
        className="d-flex justify-content-center align-items-center">
        <Container>
          <Col md={6} className="mx-auto">
            <Form>
              <Form.Group className="mb-3" controlId="userEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email " name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="userPass">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" />
              </Form.Group>
              <Button type="submit" variant="info">
                Login
              </Button>
            </Form>
          </Col>
        </Container>
      </section>
    </Fragment>
  );
};

export default UserLogin;
