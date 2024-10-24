import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch the message from Flask API
    fetch('http://127.0.0.1:5000/api/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>{message ? message : 'Loading...'}</h1>
    </div>
  );
}

export default App;
