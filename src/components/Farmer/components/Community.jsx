import React from 'react';
import '../styles/Community.css';

const Community = () => {
  return (
    <div className="community">
      <h2>Farmer Community</h2>
      <p>Join the discussion and share your experiences with other farmers.</p>
      <textarea placeholder="Write your message here..."></textarea>
      <button>Post</button>
      <div className="messages">
        <p>Farmer A: Great session today!</p>
        <p>Farmer B: Learned a lot about millet farming.</p>
      </div>
    </div>
  );
};

export default Community;