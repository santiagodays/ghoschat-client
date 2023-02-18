import { Form, Input, ButtonToolbar, Button } from 'rsuite';
import React, { useState } from "react";
import axios from "axios";

const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    // Destructure user input
    const type = "consumer";
    const user = { username, email, password, type };

    // Create the data object
    const data = JSON.stringify(user);

    // Add a condition to send a request via axios when the users clicks in 'Sign Up'
    axios
      .post("http://localhost:3000/sign_up", data, {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(res => {
        alert("Data was submited");
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Form layout="horizontal" className="form-center">
      <h2>Register 🚀</h2>
      <Form.Group controlId="name-6" className="center-inputs">
        <Form.ControlLabel>Username</Form.ControlLabel>
        <Form.Control name="name" value={username} onChange={e => setUsername(e)} />
        <Form.HelpText>Required</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="email-6" className="center-inputs">
        <Form.ControlLabel>Email</Form.ControlLabel>
        <Form.Control name="email" type="email" value={email} onChange={e => setEmail(e)} />
        <Form.HelpText tooltip>Required</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="password-6" className="center-inputs">
        <Form.ControlLabel>Password</Form.ControlLabel>
        <Form.Control name="password" type="password" autoComplete="off" value={password} onChange={e => setPassword(e)} />
      </Form.Group>
      <Form.Group controlId="password-6" className="center-inputs">
        <Form.ControlLabel>Confirm Password</Form.ControlLabel>
        <Form.Control name="password" type="password" autoComplete="off" />
      </Form.Group>
      <Form.Group className="center-inputs">
        <ButtonToolbar className="center-inputs">
          <Button appearance="ghost" onClick={register}>Sign Up</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
}
export default SignUp;
