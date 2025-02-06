import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import serviceIcon from "../../../Images/Group 188.svg";
import prevIcon from "../../../Images/sidbaricones.svg";
import nextIcon from "../../../Images/nextIconsidelbar.svg";

const services = [
  { name: "تنظيم فعاليات و مؤتمرات", icon: serviceIcon },
  { name: "إدارة الفعاليات الافتراضية", icon: serviceIcon },
  { name: "التسويق الرقمي", icon: serviceIcon },
  { name: "التصوير الفوتوغرافي", icon: serviceIcon },
  { name: "الإنتاج الإعلامي", icon: serviceIcon },
];

const Slider = () => {
  return (
    <div
      className="position-relative p-1 p-md-4  mb-4"
      style={{ backgroundColor: "#2e2e3a", borderRadius: "20px" }}
    >
      <img
        src={prevIcon}
        alt="Prev"
        className="swiper-button-prev-custom d-none d-md-block"
        style={{
          position: "absolute",
          left: "-63px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          cursor: "pointer",
          zIndex: 10,
        }}
      />
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="d-flex justify-content-between align-items-center "
              style={{ backgroundColor: "#202130", borderRadius: "12px" }}
            >
              <p className="ms-5 text-white" style={{ direction: "rtl" }}>
                {service.name}
              </p>
              <img
                src={service.icon}
                alt="Service"
                style={{ width: "60px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img
        src={nextIcon}
        alt="Next"
        className="swiper-button-next-custom d-none d-md-block"
        style={{
          position: "absolute",
          right: "-65px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          cursor: "pointer",
          zIndex: 10,
        }}
      />
    </div>
  );
};

export default Slider;
