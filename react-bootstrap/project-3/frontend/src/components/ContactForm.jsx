import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      message: '',
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
    });
    const [isSent, setIsSent] = useState(false);
    const [isError, setIsError] = useState(false);
  
    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        // Ensure that for checkboxes, it updates with the checked value, otherwise update with the input's value.
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,  // For checkboxes, we use checked; for others, we use value
        });
      };
  
    

      const handleSubmit = (e) => {
        e.preventDefault();
      
        // Define the correct service ID, template ID, and user ID
        const serviceID = 'service_7gkrn4u';   
        const templateID = 'template_syjxzj4';  
        const userID = 'MSY-9ry1WuHNNTQAT';          
      
        // Use emailjs.sendForm() correctly
        emailjs
          .sendForm(serviceID, templateID, e.target, userID)
          .then(
            (result) => {
              setIsSent(true);
              setIsError(false);
              console.log('Email sent successfully:', result.text);
            },
            (error) => {
              setIsError(true);
              setIsSent(false);
              console.log('Error sending email:', error.text);
            }
          );
      };
      

  return (
    <Container fluid className="contact-form-container">
      <Row className="align-items-center py-3 px-3" >
        <Col lg={6} className="contact-left-side">
          <h2>Get in Touch with Us</h2>
          <p>We'd love to hear from you! Whether you have questions or need support, feel free to reach out.</p>
        </Col>

        <Col lg={6}>
          <Card className="shadow-lg border-0 rounded-lg">
            <Card.Body>
              <h3 className="text-center mb-4">Contact Us</h3>

              {isSent ? (
                <div className="alert alert-success text-center">
                  <strong>Success!</strong> Thank you for reaching out. We'll get back to you shortly.
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formName">
                        <Form.Control
                          type="text"
                          name="from_name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formEmail">
                        <Form.Control
                          type="email"
                          name="from_email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="formPhone">
                        <Form.Control
                          type="tel"
                          name="from_phone"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formMessage">
                        <Form.Control
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <Form.Check
                      type="checkbox"
                      name="checkbox1"
                      label="I agree to the terms and conditions"
                      checked={formData.checkbox1}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      name="checkbox2"
                      label="Subscribe to our newsletter"
                      checked={formData.checkbox2}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      name="checkbox3"
                      label="I would like a follow-up"
                      checked={formData.checkbox3}
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="checkbox"
                      name="checkbox4"
                      label="Send me special offers"
                      checked={formData.checkbox4}
                      onChange={handleChange}
                    />
                  </div>

                  <Button variant="primary" type="submit" size="lg" className="w-100 mt-4 btn-modern">
                    Send Message
                  </Button>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
