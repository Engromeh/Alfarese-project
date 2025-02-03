import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import team from "../../../Images/Group 169.svg";
import { FaStar } from "react-icons/fa";

const TeamSlider = () => {
  return (
    <div className="text-center my-5 position-relative w-100" style={{ backgroundColor: "#171a28" }}>
      <h2 className="text-white mb-3">فريق العمل</h2>
      <p style={{ color: "#D9D9D9" }}>
        الفارس المصدر المثالي لكل ما يتعلق بالتسويق الذكي والأعمال، نحن نقدم لك فرصة استثنائية لاكتساب نجاح خبير لأعمالك في عالم التسويق
      </p>

      <div className="rounded" style={{ padding: "50px 15%" }}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex flex-column align-items-center">
                <img src={team} className="card-img-top" alt="hedra" style={{ maxWidth: "100%", height: "auto" }} />

                <div
                  className="card p-3 rounded-bottom text-center"
                  style={{
                    backgroundColor: "#202130",
                    marginTop: "19px",
                    width: "100%",
                    maxWidth: "263px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between px-3" style={{ marginTop: "20px" }}>
                    <h5 className="fw-bold mb-0 text-white">hedra</h5>
                    <div className="d-flex" style={{ color: "#B08D57" }}>
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="mb-0 mt-1 text-light" style={{ opacity: 0.6, textAlign: "left" }}>Manager</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSlider;