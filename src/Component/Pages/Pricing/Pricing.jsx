import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="pricing-container text-center w-100" style={{ backgroundColor: "#171a28", color: "white", padding: "50px 10%", borderRadius: "10px" }}>
      <Row className="align-items-center mb-4">
        <Col md={6} sm={12} className="text-start">
          <h2 className="pricing-subtitle">
            احصل على أفضل خطة تناسب عملك، مع خيارات دفع مرنة - يومي - شهري - سنوي.
          </h2>
        </Col>
        <Col md={6} sm={12} className="text-end">
          <p className="pricing-title">أفضل باقة سعرية مصممة خصيصًا لك</p>
        </Col>
      </Row>

      <div className="toggle-buttons d-flex justify-content-center flex-wrap mb-4">
        <Button variant="dark" className="toggle-btn m-1">يومي</Button>
        <Button variant="warning" className="toggle-btn active m-1">شهري</Button>
        <Button variant="dark" className="toggle-btn m-1">سنوي</Button>
      </div>

      <Row className="justify-content-center">
        {[  
          { title: "مشروع", price: "$164", services: 7, features: [true, true, true, true, true, true, false] },
          { title: "مميز", price: "$148", services: 5, features: [true, true, true, true, false, false, false] },
          { title: "بداية", price: "$132", services: 3, features: [true, true, false, false, false, false, false] }
        ].map((plan, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4 d-flex">
            <Card className={`pricing-card flex-fill ${plan.title === "مميز" ? "featured" : ""}`}>
              <Card.Body>
                <Card.Title className="plan-title">{plan.title}</Card.Title>
                <Card.Text className="plan-price">{plan.price}</Card.Text>
                <Card.Text className="plan-duration">لكل شهر | {plan.services} خدمات</Card.Text>
                <ul className="plan-features text-start ms-0">
                  {plan.features.map((enabled, idx) => (
                    <li key={idx}>
                      <FaCheckCircle style={{ color: enabled ? "#F4CFAB" : "#D9D9D933" }} />
                      {" "}ميزة {idx + 1}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Pricing;