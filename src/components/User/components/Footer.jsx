import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-dark text-white text-center py-4"
      style={{ position: "relative", bottom: "0", width: "100%" }}
    >
      <div className="container">
        <p>Millet Info</p>
        <div className="social-links">
          <a
            href="https://facebook.com"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook" style={{ fontSize: "24px" }}></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-twitter" style={{ fontSize: "24px" }}></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram" style={{ fontSize: "24px" }}></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-white mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin" style={{ fontSize: "24px" }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;