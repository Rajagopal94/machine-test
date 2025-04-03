import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomCheckbox from "./CheckBox";
import SocialIcons from "./SocialIcons";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("User name or email is required.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 symbol."
      );
      return;
    }

    setError("");
    navigate("/home");
  };

  return (
    <Form onSubmit={handleSubmit} className="loginBlock">
      <h1 className="mb-4">Sign In</h1>
      <p className="text">
        New User? <a href="?">Create an account</a>
      </p>

      <div className="form-wrapper">
        <Form.Group className="form-group" controlId="username">
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter user name or email"
          />
        </Form.Group>

        <Form.Group className="form-group" controlId="password">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Group>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}

        <CustomCheckbox />
      </div>

      <Button variant="primary" type="submit" className="mt-1 w-100">
        Sign in{" "}
      </Button>

      <div className="lineDivider">
        <span>Or Sign In with</span>
      </div>
      <div className="social">
        <SocialIcons iconClass="bi-google" />
        <SocialIcons iconClass="bi-facebook" />
        <SocialIcons iconClass="bi-linkedin" />
        <SocialIcons iconClass="bi-twitter-x" />
      </div>
    </Form>
  );
};

export default LoginForm;
