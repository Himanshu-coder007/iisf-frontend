import React from 'react';
import '../styles/TrainingSession.css';

const TrainingSession = () => {
  return (
    <div className="training-session">
      <h2>Apply for Training Sessions</h2>
      <form>
        <label>Full Name:</label>
        <input type="text" placeholder="Enter your name" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Preferred Training:</label>
        <select>
          <option value="farming">Farming Techniques</option>
          <option value="marketing">Marketing Strategies</option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default TrainingSession;