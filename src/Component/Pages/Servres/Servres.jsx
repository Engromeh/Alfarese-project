import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
          <div style={{ position: "absolute", right: "100%" }}>
            <FaChevronLeft size={30} color="#C4A77D" />
          </div>
        }
        nextIcon={
        <div style={{ position: "absolute",left: "100%" }}>
        <FaChevronRight size={30} color="#C4A77D" />
        </div>
        }
      >
        {groupedServices.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row justify-content-center">
              {group.map((service, index) => (
                <div key={index} className={`mb-3 ${itemsPerSlide === 1 ? "col-12" : "col-md-6 col-lg-3"}`}>
                  <div className="card text-white p-3 text-center" style={{ backgroundColor: "#202130", width: "100%" , height:"100%"}}>
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
