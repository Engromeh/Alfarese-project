import React from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import plan from "../../../Images/Group 168.svg";
import './ContactForm.css'

const ContactForm = () => {
  return (
    <Container fluid className="p-4" style={{ color: "white" }}>
      <Row>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img src={plan} alt="خريطة" className="img-fluid" />
        </Col>

        <Col md={6}>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    className="custom-placeholder"
                    placeholder="الاسم الكامل"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    className="custom-placeholder"
                    placeholder="اسم شركتك"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    className="custom-placeholder"
                    placeholder="رقم الهاتف"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Dropdown className="mb-3 w-100">
                  <Dropdown.Toggle className="dropdown-custom w-100">
                    نوع الخدمة
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">خدمة 1</Dropdown.Item>
                    <Dropdown.Item href="#">خدمة 2</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                className="custom-placeholder"
                placeholder="اكتب رسالتك هنا..."
              />
            </Form.Group>

            <Button className="custom-button w-100">اطلب الخدمة</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
