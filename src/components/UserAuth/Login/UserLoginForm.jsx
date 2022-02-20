import React from "react";
import useInput from "../../../hooks/use-input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const emailNotVaild = (value) => value.includes("@");
const passwordNotValid = (value) => value.trim().length > 8;

let formIsValid = false;

const UserLoginForm = ({ onFormSubmit }) => {
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

  const valuesAreValid = enteredEmailIsValid && enteredPasswordIsValid;

  const valuesAreinValid = !enteredEmailIsValid || !enteredPasswordIsValid;

  if (valuesAreValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (valuesAreinValid) {
      return;
    }

    const userLoginInfo = {
      email: enteredEmail,
      password: enteredPassword,
    };

    onFormSubmit(userLoginInfo);

    resetEmail();
    resetPassword();
  };
  return (
    <Form onSubmit={submitHandler}>
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
          <p className="text-danger">Password must be more than 8 Characters</p>
        )}
      </Form.Group>

      <Button type="submit" disabled={!formIsValid} variant="primary">
        Login
      </Button>
    </Form>
  );
};

export default UserLoginForm;
