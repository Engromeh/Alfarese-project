import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <Container className="pricing-container text-center">
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2 className="pricing-subtitletext-start">
            احصل على أفضل خطة تناسب عملك، مع خيارات دفع مرنة - يومي - شهري -
            سنوي.
          </h2>
        </Col>
        <Col md={6} className="text-end">
          <p className="pricing-title ">أفضل باقة سعرية مصممة خصيصًا لك</p>
        </Col>
      </Row>

      <div
        className="toggle-buttons d-flex justify-content-left "
        style={{ justifyContent: "left", gap: "0", borderRadius: "10px" }}
      >
        <Button variant="dark" className="toggle-btn">
          يومي
        </Button>
        <Button variant="warning" className="toggle-btn active">
          شهري
        </Button>
        <Button variant="dark" className="toggle-btn">
          سنوي
        </Button>
      </div>

      <Row className="justify-content-center mt-4">
        <Col md={4}>
          <Card className="pricing-card">
            <Card.Body>
              <Card.Title className="plan-title">مشروع</Card.Title>
              <Card.Text className="plan-price">$164</Card.Text>
              <Card.Text className="plan-duration">
                لكل شهر | 07 خدمات
              </Card.Text>
              <ul className="plan-features">
                <li>تصميم واجهة المستخدم</li>
                <li>تطوير الموقع</li>
                <li>تحسين SEO</li>
                <li>دعم فني</li>
                <li>حماية الموقع</li>
                <li>تحديثات دورية</li>
                <li>إدارة المحتوى</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="pricing-card featured">
            <Card.Body>
              <Card.Title className="plan-title">مميز</Card.Title>
              <Card.Text className="plan-price">$148</Card.Text>
              <Card.Text className="plan-duration">
                لكل شهر | 05 خدمات
              </Card.Text>
              <ul className="plan-features">
                <li>تصميم واجهة المستخدم</li>
                <li>تطوير الموقع</li>
                <li>تحسين SEO</li>
                <li>دعم فني</li>
                <li>حماية الموقع</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="pricing-card">
            <Card.Body>
              <Card.Title className="plan-title">بداية</Card.Title>
              <Card.Text className="plan-price">$132</Card.Text>
              <Card.Text className="plan-duration">
                لكل شهر | 03 خدمات
              </Card.Text>
              <ul className="plan-features">
                <li>تصميم واجهة المستخدم</li>
                <li>تطوير الموقع</li>
                <li>تحسين SEO</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pricing;
