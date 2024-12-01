import React from 'react';

const FormCard = ({ title, formUrl, description, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img src={"/images/nutri.png"} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.description}>{description}</p>
        <a href={formUrl} target="_blank" rel="noopener noreferrer" style={styles.button}>
          Apply Now
        </a>
      </div>
    </div>
  );
};

const ApplicationPortal = () => {
  return (
    <div style={styles.portalContainer}>
      <h1 style={styles.heading}>Join Our Team</h1>
      <div style={styles.cardsContainer}>
        <FormCard
          title="Apply for Agronomists"
          formUrl="https://forms.gle/1NV1jqtfe37xiLHMA"
          description="Join our team of agronomists and make a difference in sustainable agriculture."
          imageUrl="https://via.placeholder.com/150" 
        />
        <FormCard
          title="Apply for Nutritionists"
          formUrl="https://forms.gle/1NV1jqtfe37xiLHMA"
          description="Contribute to health and wellness by joining our team of nutritionists."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDqAyf_6Y9G5lGDo77UfG3cJd5VPMtJ-u7A&s" 
        />
      </div>
    </div>
  );
};

// Styling
const styles = {
  portalContainer: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
  },
  image: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '18px',
    color: '#4CAF50',
    margin: '0 0 10px 0',
  },
  description: {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 10px 0',
  },
  button: {
    display: 'inline-block',
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    textAlign: 'center',
  },
};

export default ApplicationPortal;