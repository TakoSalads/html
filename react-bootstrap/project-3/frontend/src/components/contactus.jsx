// src/components/ContactUs.jsx
import { Card, Button, Form, Container } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container className="d-flex justify-content-center my-5">
      <Card className="p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body>
          <Card.Title className="text-center mb-4">Get in Touch</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" />
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ContactUs;
