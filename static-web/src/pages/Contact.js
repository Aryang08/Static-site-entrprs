import React from 'react';

const Contact = () => {
  const contactContainerStyle = {
    width: '100%',
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle = {
    color: '#333',
    marginBottom: '20px',
    fontSize: '2rem',
  };

  const contactInfoStyle = {
    textAlign: 'left',
    marginTop: '20px',
  };

  const infoItemStyle = {
    marginBottom: '15px',
    fontSize: '1.1rem',
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#555',
  };

  const spanStyle = {
    fontSize: '1.1rem',
    color: '#333',
  };

  return (
    <div style={contactContainerStyle}>
      <h2 style={headingStyle}>Contact Information</h2>
      <p>If you would like to get in touch with me, here's my contact information:</p>
      <div style={contactInfoStyle}>
        <div style={infoItemStyle}>
          <label style={labelStyle}>Name: </label>
          <span style={spanStyle}>Aryan Gupta</span>
        </div>
        <div style={infoItemStyle}>
          <label style={labelStyle}>Phone: </label>
          <span style={spanStyle}>9617100321</span>
        </div>
        <div style={infoItemStyle}>
          <label style={labelStyle}>Email: </label>
          <span style={spanStyle}>aryanguptacse1@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
