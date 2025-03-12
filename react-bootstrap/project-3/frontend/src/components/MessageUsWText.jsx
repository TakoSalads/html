import { Card, Button, Form, Container, Row, Col } from 'react-bootstrap';

function ContactForm() {
  return (
    <Container className="d-flex justify-content-center my-5">
      <Row className="w-100">
        {/* Left Side: Contact Form */}
        <Col md={6} className="d-flex justify-content-center">
          <Card className="p-4 shadow-lg" style={{ maxWidth: '500px', width: '100%' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Get in Touch</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
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
        </Col>

        {/* Right Side: Additional Text or Information */}
        <Col md={6} className="d-flex align-items-center justify-content-center bg-light p-4">
          <p className="text-muted fs-5 text-center">
            Reach out to us for any inquiries, and we’ll get back to you as soon as possible.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;