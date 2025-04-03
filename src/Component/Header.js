import React, { useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Nav,
  Button,
  Offcanvas,
} from "react-bootstrap";
import "../styles/header.css";

const Header = ({ handleRegionFilter }) => {
  const [activeRegion, setActiveRegion] = useState("All");
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = (region) => {
    setActiveRegion(region);
    handleRegionFilter(region);
    setShowMenu(false);
  };

  return (
    <header className="headerWrapper">
      <Container>
        <Row>
          <Navbar expand="lg" className="w-100">
            <div className="header d-flex justify-content-between w-100">
              <div className="logo">
                <h1>Countries</h1>
              </div>

              <div className="filters d-none d-lg-flex">
                {["All", "Asia", "Europe"].map((region) => (
                  <button
                    key={region}
                    onClick={() => handleButtonClick(region)}
                    className={activeRegion === region ? "active" : ""}
                  >
                    {region}
                  </button>
                ))}
              </div>

              <Button
                className="d-lg-none"
                onClick={(e) => {
                  e.preventDefault();
                  setShowMenu(true);
                }}
              >
                <i class="bi bi-list"></i>
              </Button>
            </div>
          </Navbar>
        </Row>
      </Container>

      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="end"
        className="customCanvas"
      >
        <Offcanvas.Header>
          <Button onClick={() => setShowMenu(false)}>
            <i class="bi bi-x-lg"></i>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            {["All", "Asia", "Europe"].map((region) => (
              <Button
                key={region}
                variant="link"
                className={`w-100 text-start ${
                  activeRegion === region ? "active" : ""
                }`}
                onClick={() => handleButtonClick(region)}
              >
                {region}
              </Button>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
