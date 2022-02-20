import { Fragment, useState } from "react";
import UserLoginForm from "./UserLoginForm";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "./UserLogin.css";

const endPoint = process.env.REACT_APP_ROUTE_EGY_ENDPOINT;

const UserLogin = ({ history }) => {
  const [userError, setUserError] = useState("");

  const sendLoginData = async (loginInfo) => {
    const { data } = await axios.post(`${endPoint}/signin`, await loginInfo);
    const { message, token } = await data;

    if (message === "success") {
      localStorage.setItem("userToken", token);
      history.replace("/home");
    } else {
      setUserError(message);
    }
  };

  return (
    <Fragment>
      <section
        id="login"
        className="d-flex justify-content-center align-items-center">
        <Container>
          <Col md={6} className="mx-auto">
            {userError !== "" && <Alert variant="danger">{userError}</Alert>}
            <UserLoginForm onFormSubmit={sendLoginData} />
          </Col>
        </Container>
      </section>
    </Fragment>
  );
};

export default UserLogin;
