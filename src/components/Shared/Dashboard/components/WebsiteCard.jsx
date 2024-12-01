import React from "react";

const WebsiteCard = ({ title, url, previewImage }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      {/* Website Preview */}
      <img src={previewImage} className="card-img-top" alt={`${title} preview`} />
      
      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Check out this website for more details and information!
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default WebsiteCard;