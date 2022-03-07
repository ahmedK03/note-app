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
/*
*
*
*
better make the addNotes func in the <Notes /> comp... and pass the modal data to it ... 

*/
const Home = () => {
  const [newNote, setNewNote] = useState(addNewNote);
  const [viewModal, setViewModal] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const addTitleHandler = ({ target }) => {
    setNoteTitle(target.value);
  };

  const addBodyHandler = ({ target }) => {
    setNoteBody(target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // if (noteTitle.trim().length === 0 || noteBody.trim().length === 0) {
    //   return;
    // }
    console.log({...addNewNote, title: noteTitle, desc: noteBody });
    addNote(addNewNote);
    setNoteTitle("");
    setNoteBody("");
    setViewModal(false);
  };

  const addNote = async () => {
    setNewNote({ ...addNewNote, title: noteTitle, desc: noteBody });
    let {data} = await axios.post(endPoint + '/addNote', await addNewNote);
    console.log(data.message);
  }

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

        <Notes />

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
