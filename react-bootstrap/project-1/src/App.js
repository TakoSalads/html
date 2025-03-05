import React, { useEffect, useState } from 'react';
import { Container, Button, Alert, Spinner } from 'react-bootstrap'; // React-Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to store the fetched data and loading state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the Python backend when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/data')
      .then(response => response.json())
      .then(data => {
        setData(data); // Save fetched data to state
        setLoading(false); // Stop loading
      })
      .catch(error => {
        setError(error); // Handle errors
        setLoading(false);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h1>React + Bootstrap + Flask</h1>

      {/* Show loading spinner while fetching */}
      {loading && (
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {/* Display error message if there was an issue fetching */}
      {error && (
        <Alert variant="danger">
          <Alert.Heading>Error fetching data</Alert.Heading>
          <p>{error.message}</p>
        </Alert>
      )}

      {/* Display data if successfully fetched */}
      {data && !loading && (
        <Alert variant="success">
          <Alert.Heading>{data.message}</Alert.Heading>
          <p>{data.description}</p>
        </Alert>
      )}

      {/* Button that could trigger more actions */}
      <Button variant="primary" onClick={() => alert("Button Clicked!")}>
        Click Me
      </Button>
    </Container>
  );
}

export default App;