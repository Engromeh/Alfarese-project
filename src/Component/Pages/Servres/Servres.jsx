import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import photo7 from "../../../Images/image 7.svg";
import photo5 from "../../../Images/image 5.svg";
import photo6 from "../../../Images/image 6.svg";
import photo8 from "../../../Images/image 8.svg";

const services = [
  { img: photo7, title: "تنظيم البيانات والتقارير", desc: "تحليل البيانات وإعداد التقارير المتكاملة." },
  { img: photo6, title: "تصميم متاجر", desc: "إنشاء متاجر إلكترونية احترافية وفق احتياجات العملاء." },
  { img: photo5, title: "تصميم المواقع الإلكترونية", desc: "تصميم مواقع ويب متجاوبة وتحسين تجربة المستخدم." },
  { img: photo8, title: "UGC", desc: "إنشاء محتوى مخصص باستخدام استراتيجيات تسويقية فعالة." },
  { img: photo7, title: "تحليل البيانات", desc: "تقديم استراتيجيات بناء على البيانات وتحليلها." },
  { img: photo6, title: "تحسين الأداء", desc: "تحليل أداء المواقع وتقديم حلول لتحسين السرعة." },
];

const chunkArray = (array, size) => {
  return array.reduce((acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]), []);
};

const Servres = () => {
  const [itemsPerSlide, setItemsPerSlide] = useState(window.innerWidth < 768 ? 1 : 4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 4);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedServices = chunkArray(services, itemsPerSlide);

  return (
    <div className="container text-center text-white py-5">
      <h1 className="fw-bold">الخدمات</h1>
      <Carousel indicators={false} controls={true} className="my-4"
        prevIcon={
          <div className="carousel-control left">
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="53" width="53" height="53" rx="8" transform="rotate(90 53 0)" fill="url(#paint0_linear_119_120)"/>
              <path d="M34 12L19 27.0024L34 42" stroke="#151723" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_119_120" x1="79.5" y1="0" x2="79.5" y2="53" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4CFAB"/>
                  <stop offset="1" stopColor="#8E7864"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        }
        nextIcon={
          <div className="carousel-control right">
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="53" height="53" rx="8" fill="url(#paint0_linear_119_117)"/>
              <path d="M19 42L34 26.9976L19 12" stroke="#151723" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear_119_117" x1="26.5" y1="0" x2="26.5" y2="53" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4CFAB"/>
                  <stop offset="1" stopColor="#8E7864"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        }
      >
        {groupedServices.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row justify-content-center">
              {group.map((service, index) => (
                <div key={index} className={`mb-3 ${itemsPerSlide === 1 ? "col-12" : "col-md-6 col-lg-3"}`}>
                  <div className="card text-white p-3 text-center" style={{ backgroundColor: "#202130", width: "100%", height: "100%" }}>
                    <img src={service.img} alt={service.title} className="card-img-top" style={{ height: "100px", objectFit: "contain" }} />
                    <h5 className="mt-3">{service.title}</h5>
                    <p>{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Servres;
