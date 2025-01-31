import group1 from "../../../Images/Mask group (1).png";
import group2 from "../../../Images/Mask group (2).png";
import group3 from "../../../Images/Mask group.png";
import videoIcon from "../../../Images/Ellipse 1.svg";
const HeroSection = () => {
  return (
    <>
      <section className="hero text-center py-5">
        <div>
          <h1 className=" text-white  fw-bold ">التسويق هو مفتاح النجاح</h1>
          <p className="lead text-white ">
            هو فن بناء العلاقات وصناعة التأثير. نقدم استراتيجيات مبتكرة لتعزيز
            علامتك التجارية وتحقيق النجاح. ابدأ اليوم واجعل أفكارك تصل لعملائك
            بفعالية.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <span
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
            </span>{" "}
            <p
              className="custom-btn fw-bold d-flex align-items-center"
              style={{ color: "white", fontSize: "20px" }}
            >
              <img
                src={videoIcon}
                alt="Video Icon"
                style={{ width: "25px", height: "25px", marginLeft: "8px" }}
              />
              فيديو تعريفي
            </p>{" "}
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card ">
                <img
                  src={group1}
                  className="card-img-top"
                  alt="التسويق الرقمي"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <img
                  src={group3}
                  className="card-img-top"
                  alt="استراتيجية التسويق"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ">
                <img
                  src={group2}
                  className="card-img-top"
                  alt="تطوير العلامة التجارية"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
