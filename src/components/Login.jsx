import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../css/color.css";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginDetails, setloginDetails] = useState({
    username: "admin",
    password: "admin",
  });
  const navigate = useNavigate();

  const handleLogin = (username, password) => {
    if (
      username === loginDetails.username &&
      password === loginDetails.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      setLoggedIn(true);
      navigate("/admin/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  if (loggedIn) {
    navigate("/admin/dashboard");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <div className="login-wrapper">
        <Container className="mb-5 mt-5">
          <Row className="justify-content-center">
            <Col lg={5} className=" rounded-3 bgc2">
              <div className="log-in">
                <Row className="text-center">
                  <h1>LOGIN</h1>
                </Row>
                <Row>
                  <Form.Group className="mb-4">
                    <Form.Label className="ms-2">USERNAME</Form.Label>
                    <Form.Control
                      placeholder="USERNAME"
                      type="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-4">
                    <Form.Label className="ms-2">PASSWORD</Form.Label>
                    <Form.Control
                      placeholder="PASSWORD"
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    ></Form.Control>
                  </Form.Group>
                </Row>
                <Row className="text-center">
                  <Form.Group className="mb-3">
                    <Button onClick={handleSubmit} className="bgc4 border-0">
                      LOGIN
                    </Button>
                  </Form.Group>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
