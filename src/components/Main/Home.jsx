import { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Notes from "../Notes/Notes";
import jwt_decode from "jwt-decode";
import axios from "axios";

// adding the notes from the home component
const endPoint = process.env.REACT_APP_ROUTE_EGY_ENDPOINT;
const userToken = localStorage.getItem("userToken");

if (userToken) {
  var decoded = jwt_decode(userToken);
  var userId = decoded._id;
}
const addNewNote = {
  title: "",
  desc: "",
  token: userToken,
  userID: userId,
};

const Home = () => {
  const [newNote, setNewNote] = useState(addNewNote);
  const [viewModal, setViewModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const handleModal = () => setViewModal(!viewModal);

  const addTitleHandler = ({ target }) => {
    setNoteTitle(target.value);
  };

  const addBodyHandler = ({ target }) => {
    setNoteBody(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (noteTitle.trim().length === 0 || noteBody.trim().length === 0) {
      console.log("empty");
      return;
    }

    setNewNote({ ...addNewNote, title: noteTitle, desc: noteBody });

    addNote();

    setNoteTitle("");
    setNoteBody("");
    setViewModal(false);
  };

  const addNote = async () => {
    const newNotes = await newNote;
    // let { data } = await axios.post(endPoint + "/addNote", newNote);
    console.log(newNotes);
  };

  return (
    <Fragment>
      <Container>
        <Row className="justify-content-md-between  mt-5 mb-3">
          <Col md={6}>
            <div>
              <h1 className="text-start">
                Welcome, User
              </h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-end">
              <Button
                onClick={handleModal}
                className="btn-primary btn rounded-2 py-2">
                <i class="fa-solid fa-circle-plus"></i> Add New Note
              </Button>
            </div>
          </Col>
        </Row>

        <Notes onAdding={newNote} />

        {/* <!-- Modal --> */}
        <Modal show={viewModal} onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Note</Modal.Title>
          </Modal.Header>
          <Form onSubmit={submitHandler}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="noteTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name="title"
                  type="text"
                  onChange={addTitleHandler}
                  value={noteTitle}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="noteContent">
                <Form.Label>Start Typing</Form.Label>
                <Form.Control
                  as="textarea"
                  cols="30"
                  rows="10"
                  onChange={addBodyHandler}
                  value={noteBody}
                />
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
