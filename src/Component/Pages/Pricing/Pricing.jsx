import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa"; // أيقونة صح
import { BsCircleFill } from "react-icons/bs"; // أيقونة دائرة ممتلئة

const Pricing = () => {
  return (
    <div className="pricing-container text-center w-100" style={{backgroundColor:"#171a28" }}>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2 className="pricing-subtitle text-start">
            احصل على أفضل خطة تناسب عملك، مع خيارات دفع مرنة - يومي - شهري - سنوي.
          </h2>
        </Col>
        <Col md={6} className="text-end">
          <p className="pricing-title">أفضل باقة سعرية مصممة خصيصًا لك</p>
        </Col>
      </Row>

      <div className="toggle-buttons">
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
        {/* كارد 1 */}
        <Col md={4} sm={6}>
          <Card className="pricing-card">
            <Card.Body>
              <Card.Title className="plan-title ">مشروع</Card.Title>
              <Card.Text className="plan-price ">$164</Card.Text>
              <Card.Text className="plan-duration ">لكل شهر | 07 خدمات</Card.Text>
              <ul className="plan-features text-start ms-0">
                <li><FaCheckCircle  style={{color:"#F4CFAB"}}/> دعم الأولوية</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> دعم الدردشة</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> إدارة الفريق</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> الاستهداف المتقدم</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> إدارة مواقع متعددة</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> الاجتماع الأسبوعي للفرق</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> تقرير أداء الحساب</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* كارد 2 */}
        <Col md={4} sm={6}>
          <Card className="pricing-card featured">
            <Card.Body>
              <Card.Title className="plan-title ">مميز</Card.Title>
              <Card.Text className="plan-price ">$148</Card.Text>
              <Card.Text className="plan-duration ">لكل شهر | 05 خدمات</Card.Text>
              <ul className="plan-features text-start ms-0">
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> دعم الأولوية</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> دعم الدردشة</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> إدارة الفريق</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> الاستهداف المتقدم</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> إدارة مواقع متعددة</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> الاجتماع الأسبوعي للفرق</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> تقرير أداء الحساب</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* كارد 3 */}
        <Col md={4} sm={6}>
          <Card className="pricing-card">
            <Card.Body>
              <Card.Title className="plan-title ">بداية</Card.Title>
              <Card.Text className="plan-price ">$132</Card.Text>
              <Card.Text className="plan-duration ">لكل شهر | 03 خدمات</Card.Text>
              <ul className="plan-features text-start ms-0">
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> دعم الأولوية</li>
                <li><FaCheckCircle style={{color:"#F4CFAB"}} /> دعم الدردشة</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> إدارة الفريق</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> الاستهداف المتقدم</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> إدارة مواقع متعددة</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> الاجتماع الأسبوعي للفرق</li>
                <li><FaCheckCircle  style={{color:"#D9D9D933"}} /> تقرير أداء الحساب</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pricing;
