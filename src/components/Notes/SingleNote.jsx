import { Fragment, useState } from "react";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
// endPoint Of The Project
const endPoint = process.env.REACT_APP_ROUTE_EGY_ENDPOINT;
const token = localStorage.getItem("userToken");

const SingleNote = ({ title, content, id, afterChanges }) => {
  const [deleteModalView, setDeleteModalView] = useState(false);
  const [updateModalView, setUpdateModalView] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  let [updatedContent, setUpdatedContent] = useState("content");

  const handleUpdateModal = () => setUpdateModalView(!updateModalView);
  const handleDeleteModal = () => setDeleteModalView(!deleteModalView);
 
  const updateTitleHandler = ({ target }) => {
    setUpdatedTitle(target.value);
    console.log(target.value);
  }

  const updateContentHandler = ({ target }) => {
    setUpdatedContent(target.value);
  }


  const deleteHandler = async (e) => {
    e.preventDefault();

    let { data } = await axios.delete(endPoint + "/deleteNote", {
      data: {
        NoteID: id,
        token,
      },
    });

    handleDeleteModal();
    afterChanges();
  };

  const updateHandler = (e) => {
    e.preventDefault();
    // handleUpdateModal();

    console.log("update " + id);
  };

  return (
    <Fragment>
      <Col md={4} className="my-4">
        <div className={" note text-secondary p-4"}>
          <div className="header">
            <h4 className="float-start fw-bold">{title} </h4>
            <div className="icons">
              <a onClick={handleUpdateModal} style={{ cursor: "pointer" }}>
                <i className="fas fa-edit float-end edit"></i>
              </a>
              <a onClick={handleDeleteModal} style={{ cursor: "pointer" }}>
                <i className="fas fa-trash-alt float-end px-3 del"></i>
              </a>
            </div>
          </div>
          <div className="clearfix"></div>
          {/* <hr /> */}
          <p>{content}</p>
        </div>
      </Col>

      {/* <!-- Delete Modal --> */}
      <Modal show={deleteModalView} onHide={handleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure?!</Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleDeleteModal}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Yes, Delete Note
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <!-- Update Modal --> */}
      <Modal show={updateModalView} onHide={handleUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Note</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="noteTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                onChange={updateTitleHandler}
                value={updatedTitle}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="noteContent">
              <Form.Label>Start Typing</Form.Label>
              <Form.Control
                as="textarea"
                cols="30"
                rows="10"
                onChange={updateContentHandler}
                value={updatedContent}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleUpdateModal}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Update Note
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </Fragment>
  );
};

export default SingleNote;
