import { Fragment } from "react";
import useInput from "../../../hooks/use-input"; // custom hook
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const nameNotValid = (value) => value.trim().length >= 3;
const emailNotVaild = (value) => value.includes("@");
const passwordNotValid = (value) => value.trim().length > 8;

let formIsValid = false;

const AddUserForm = ({ onFormSubmit }) => {
  const {
    value: enteredFname,
    isValid: enteredFnameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFname,
    isInValid: fNameisInValid,
  } = useInput(nameNotValid);

  const {
    value: enteredLname,
    isValid: enteredLnameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLname,
    isInValid: lNameisInValid,
  } = useInput(nameNotValid);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
    isInValid: emailisInValid,
  } = useInput(emailNotVaild);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passowrdInputBlutHandler,
    reset: resetPassword,
    inInValid: passwordisInValid,
  } = useInput(passwordNotValid);

  const valuesAreValid =
    enteredFnameIsValid &&
    enteredLnameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid;

  const valuesAreinValid =
    !enteredEmailIsValid ||
    !enteredFnameIsValid ||
    !enteredLnameIsValid ||
    !enteredPasswordIsValid;

  if (valuesAreValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (valuesAreinValid) {
      console.log("invalid values");
      return;
    }

    const userInfo = {
      first_name: enteredFname,
      last_name: enteredLname,
      email: enteredEmail,
      password: enteredPassword,
    };

    onFormSubmit(userInfo);

    resetFname();
    resetLname();
    resetEmail();
    resetPassword();
  };

  return (
    <Fragment>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="userFirstName">
          <Form.Label>Enter your first name</Form.Label>
          <Form.Control
            type="text"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={enteredFname}
            className={fNameisInValid}
            placeholder="First name"
            name="first_name"
          />
          {fNameHasError && (
            <p className="text-danger">Name must be &gt;= 3 letters</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="userLastName">
          <Form.Label>Enter your last name</Form.Label>
          <Form.Control
            type="text"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={enteredLname}
            className={lNameisInValid}
            name="last_name"
            placeholder="Last Name"
          />
          {lNameHasError && (
            <p className="text-danger">Name must be &gt;= 3 letters</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="userEmail1">
          <Form.Label>Enter Your Email Address</Form.Label>
          <Form.Control
            name="email"
            value={enteredEmail}
            className={emailisInValid}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            placeholder="example@email.net"
          />
          {emailHasError && <p className="text-danger">Email is invalid</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="userPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={enteredPassword}
            className={passwordisInValid}
            onChange={passwordInputChangeHandler}
            onBlur={passowrdInputBlutHandler}
            type="password"
            name="password"
          />
          {passwordHasError && (
            <p className="text-danger">
              Password must be more than 8 Characters
            </p>
          )}
        </Form.Group>

        <Button type="submit" disabled={!formIsValid} variant="primary">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default AddUserForm;
