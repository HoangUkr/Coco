import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../src/App.css";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault(); // Logic for authenticating the user can be added here 
    if (username === 'testuser' && password === 'password') { 
        debugger;
        setLoggedIn(true); 
        navigate('/'); 
    } 
    else { 
        alert('Invalid credentials, please try again.'); 
    }
  }
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={12} lg={12}>
          <h2 className="text-center">Sign In</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                className="wide-input mx-auto"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="wide-input mx-auto"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Sign In
            </Button>
            <Button variant="secondary" type="button" className="mt-3 w-100">
              Cancel
            </Button>
            <div className="mt-3 text-center">
              <Link to="/register">Don't have an account? Register</Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
