import React from "react";

const SocialMediaJoin = () => {
  return (
    <div
      className="text-center py-5"
      style={{ backgroundColor: "#f7f7f7", marginTop: "20px" }}
    >
      <h2>Join Us on Social Media</h2>
      <p>Stay connected with us through our social media channels.</p>
      <div className="d-flex justify-content-center gap-4 mt-3">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/milletinfo?utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-danger"
        >
          <i className="bi bi-instagram"></i> Instagram
        </a>

        {/* WhatsApp */}
        <a
          href="https://whatsapp.com/channel/0029Vatk8PhKLaHhYcGFyU3I"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-success"
        >
          <i className="bi bi-whatsapp"></i> WhatsApp
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/milletinfo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary"
        >
          <i className="bi bi-telegram"></i> Telegram
        </a>
      </div>
    </div>
  );
};

export default SocialMediaJoin;