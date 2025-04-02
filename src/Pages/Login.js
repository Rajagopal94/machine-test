import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import LoginForm from "../Component/LoginForm";

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="position-relative w-100">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <LoginForm />
          </Col>
          <Col className="d-none d-md-block" xs={12} md={6}>
            <div className="imageBlock">
              <Image src="./assets/illustration.png" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;
