import React from "react";
import { Container } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footerWrapper">
          <div className="social">
            <SocialIcons iconClass="bi-facebook" />
            <SocialIcons iconClass="bi-twitter-x" />
            <SocialIcons iconClass="bi-google" />
            <SocialIcons iconClass="bi-youtube" />
          </div>
          <a href="mailto:countries@gmail.com" className="link">
            countries@gmail.com
          </a>
          <p className="copy">
            Copyright © 2025 Countries.All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
