import { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import SingleNote from "../Notes/SingleNote";

const Home = () => {
  const [viewModal, setViewModal] = useState(false);
  const handleModal = () => setViewModal(!viewModal);
  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="text-end my-5">
              <Button
                onClick={handleModal}
                className="btn-primary btn rounded-2 py-2">
                Add New
              </Button>
            </div>
          </Col>
        </Row>

        <SingleNote />

        {/* <!-- Modal --> */}
        <Modal show={viewModal} onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Note</Modal.Title>
          </Modal.Header>
          <Form>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="noteTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="noteContent">
                <Form.Label>Start Typing</Form.Label>
                <Form.Control as="textarea" cols="30" rows="10" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModal}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Note
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default Home;
