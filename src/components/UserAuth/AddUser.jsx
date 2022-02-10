import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AddUser.css';


const AddUser = () => {


    return(
        <section id="registerForm" className="d-flex justify-content-center align-items-center">
            <Container>
                    <Col md={6} className="mx-auto">
                        <Form>
                            <Form.Group className="mb-3" controlId="userFirstName">
                                <Form.Label>Enter your first name</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="First name" 
                                name="first_name"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="userLastName">
                                <Form.Label>Enter your first name</Form.Label>
                                <Form.Control 
                                type="text"
                                name="last_name"
                                placeholder="Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="userEmail">
                                <Form.Label>Enter Your Email Address</Form.Label>
                                <Form.Control 
                                name="email" 
                                type="email"
                                placeholder="example@email.net"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="userPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password"
                                name="password"/>
                            </Form.Group>
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </Form>
                    </Col>
            </Container>
        </section>
    );
}

export default AddUser;