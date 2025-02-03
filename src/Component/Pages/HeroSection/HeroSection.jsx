import group1 from "../../../Images/Mask group (1).png";
import group2 from "../../../Images/Mask group (2).png";
import group3 from "../../../Images/Mask group.png";

const HeroSection = () => {
  return (
    <>
      <section className="hero text-center py-5">
        <div>
          <h1 className="text-white fw-bold" style={{ marginTop: "100px" }}>
            شركة الفارس للتسويق الالكتروني{" "}
          </h1>
          <p className="lead text-white">
            هو فن بناء العلاقات وصناعة التأثير. نقدم استراتيجيات مبتكرة لتعزيز
            علامتك التجارية وتحقيق النجاح. ابدأ اليوم واجعل أفكارك تصل لعملائك
            بفعالية.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="customee-btn"
              style={{
                backgroundColor: "#F4CFAB",
                borderRadius: "25px",
                padding: "8px 16px",
                textAlign: "center",
                fontWeight: "bold",
                width: "150px",
                height: "56px",
              }}
            >
              ابدأ الآن
            </button>
            <p
              className="custom-btn fw-bold d-flex align-items-center"
              style={{ color: "white", fontSize: "20px" }}
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.8999 23.8193C31.364 24.6654 31.3694 25.7297 29.8999 26.6863L18.546 34.6273C17.1194 35.4168 16.1505 34.9506 16.0488 33.2423L16.0006 16.622C15.9685 15.0484 17.2184 14.6038 18.4095 15.3583L29.8999 23.8193Z"
                  fill="#151723"
                  stroke="url(#paint0_linear_0_1)"
                  strokeWidth="2"
                />
                <path
                  d="M33.8999 23.8193C35.364 24.6654 35.3694 25.7297 33.8999 26.6863L22.546 34.6273C21.1194 35.4168 20.1505 34.9506 20.0488 33.2423L20.0006 16.622C19.9685 15.0484 21.2184 14.6038 22.4095 15.3583L33.8999 23.8193Z"
                  fill="#151723"
                  stroke="url(#paint1_linear_0_1)"
                  strokeWidth="2"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="24.5"
                  stroke="url(#paint2_linear_0_1)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_0_1"
                    x1="23.5"
                    y1="15"
                    x2="23.5"
                    y2="35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F4CFAB" />
                    <stop offset="1" stopColor="#D9D9D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_0_1"
                    x1="27.5"
                    y1="15"
                    x2="27.5"
                    y2="35"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F4CFAB" />
                    <stop offset="1" stopColor="#D9D9D9" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_0_1"
                    x1="25"
                    y1="0"
                    x2="25"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F4CFAB" />
                    <stop offset="1" stopColor="#D9D9D9" />
                  </linearGradient>
                </defs>
              </svg>
              فيديو تعريفي
            </p>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <img
                src={group1}
                className="card-img-top hero-image"
                alt="التسويق الرقمي"
              />
            </div>
            <div className="col-md-4">
              <img
                src={group3}
                className="card-img-top hero-image"
                alt="استراتيجية التسويق"
              />
            </div>
            <div className="col-md-4">
              <img
                src={group2}
                className="card-img-top hero-image"
                alt="تطوير العلامة التجارية"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
