import React from "react";

const YouTubeCard = ({ title, description, videoId }) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      {/* Video Embed */}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allowFullScreen
          style={{ border: "none", width: "100%", height: "200px" }}
        ></iframe>
      </div>

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default YouTubeCard;