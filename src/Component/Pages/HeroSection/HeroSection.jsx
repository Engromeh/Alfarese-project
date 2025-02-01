import group1 from "../../../Images/Mask group (1).png";
import group2 from "../../../Images/Mask group (2).png";
import group3 from "../../../Images/Mask group.png";
import videoIcon from "../../../Images/play.svg"; // استيراد أيقونة الفيديو

const HeroSection = () => {
  return (
    <>
      <section className="hero text-center py-5">
        <div>
          <h1 className="text-white fw-bold" style={{ marginTop: "100px" }}>
            التسويق هو مفتاح النجاح
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
                borderRadius: "16px",
                padding: "8px 16px",
                display: "inline-block",
                textAlign: "center",
                fontWeight: "bold",
                minWidth: "100px",
              }}
            >
              ابدأ الآن
            </button>{" "}
            <p
              className="custom-btn fw-bold d-flex align-items-center"
              style={{ color: "white", fontSize: "20px" }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "8px" }}
              >
                <circle
                  cx="25"
                  cy="25"
                  r="24.5"
                  stroke="url(#paint0_linear_67_36)"
                />
                {/* إضافة أيقونة الفيديو داخل الـ SVG */}
                <image
                  href={videoIcon} // ربط الصورة المستوردة هنا
                  x="14" // تحديد موقع الصورة داخل الدائرة
                  y="14"
                  width="20" // حجم الصورة
                  height="20"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_67_36"
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
            </p>{" "}
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <img src={group1} className="card-img-top" alt="التسويق الرقمي" />
            </div>
            <div className="col-md-4">
              <img
                src={group3}
                className="card-img-top"
                alt="استراتيجية التسويق"
              />
            </div>
            <div className="col-md-4">
              <img
                src={group2}
                className="card-img-top"
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
