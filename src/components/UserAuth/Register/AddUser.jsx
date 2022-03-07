import { useState } from "react";
import AddUserForm from "./AddUserForm";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import "./AddUser.css";

const endPoint = process.env.REACT_APP_ROUTE_EGY_ENDPOINT;

//  props from router-dom to navigate to another page
const AddUser = ({ history }) => {
  const [userError, setUserError] = useState("");

  const sendUserData = async (userInfo) => {
    let { data } = await axios.post(`${endPoint}/signup`, await userInfo);

    console.log(data);

    if (data.message === "success") {
      history.replace("/login");
    } else {
      console.log("email already registered");
      setUserError("email already registered");
    }
  };

  return (
    <section
      id="registerForm"
      className="d-flex justify-content-center align-items-center">
      <Container>
        <Col md={6} className="mx-auto">
          {userError !== "" && (
            <Alert variant="danger">
              <p>{userError}</p>
            </Alert>
          )}
          <AddUserForm onFormSubmit={sendUserData} />
        </Col>
      </Container>
    </section>
  );
};

export default AddUser;
