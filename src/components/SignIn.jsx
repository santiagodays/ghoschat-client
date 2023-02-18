import { Form, ButtonToolbar, Button } from 'rsuite';
import React, { useState } from "react";
import cookie from 'js-cookie';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = async () => {
    const user = { username, email, password };
    const data = JSON.stringify(user);

    try {
      const response = await fetch('http://localhost:3000/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: data
      });

      if (!response.ok) {
        alert("Any data is incorrect, please try again!")
        throw new Error('Network response was not ok');
      }

      const { authorization } = await response.json();

      cookie.set('token', authorization, { expires: 7 });
      alert("Log in success!");
      window.location.href = "/home"
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e);
  };

  const handleEmailChange = (e) => {
    setEmail(e);
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
  };

  return (
    <>
      <Form layout="horizontal" className="form-center">
        <h2> Log in 🔮 </h2>
        <Form.Group controlId="name-6" className="center-inputs">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control
            name="name"
            type="name"
            value={username}
            onChange={handleUsernameChange} />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email-6" className="center-inputs">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange} />
          <Form.HelpText tooltip>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="password-6" className="center-inputs">
          <Form.ControlLabel>Password</Form.ControlLabel>
          <Form.Control
            name="password"
            type="password"
            autoComplete="off"
            value={password}
            onChange={handlePasswordChange} />
        </Form.Group>
        <Form.Group className="center-inputs">
          <ButtonToolbar className="center-inputs form-center">
            <Button appearance="ghost" onClick={logIn}>Sign In</Button>
          </ButtonToolbar>
        </Form.Group>
      </Form>
    </>
  );
};

export default SignIn;
