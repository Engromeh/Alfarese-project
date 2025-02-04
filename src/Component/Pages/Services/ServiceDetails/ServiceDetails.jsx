import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const ServiceCard = ({ title, description , imges }) => {
  return (
    
    <div
      className="card bg-dark text-white p-3 shadow-lg d-flex flex-row align-items-center w-100"
      style={{ maxWidth: "600px" }}
    >
      <div className="bg-secondary d-flex align-items-center justify-content-center p-4 rounded">
        <img
          src={imges}
          alt={title}
          className="img-fluid"
          style={{ width: "60px", height: "60px" }}
        />
      </div>

    </div>
    
  );
};

const ServicesDetails = () => {
  const services = {
    title: "UGC",
    description:
      "من خلالها نتيح للعملاء إنشاء ومشاركة المحتوى المتعلق بالعلامة التجارية أو المنتج، وتهدف إلى زيادة التفاعل بين العملاء وتحليل المحتوى الذي ينتجه العملاء لتحسين تجربتهم وزيادة ثقتهم وتحقيق أهداف العمل.",
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex py-5 articleshow-container " style={{ backgroundColor: "#151723" }}>
      <div className="container  my-5">
        <div className="row gy-5 gx-4 justify-content-center">
          <div className="  col-sm-12 col-md-5 col-lg-3">
            <div
              className="d-flex align-items-center justify-content-center  rounded  h-100  p-4"
              style={{
                backgroundColor: "#1f2130",
                borderRadius: "20px",
              }}
            >
              <img
                src="{serviceIcon}"
                alt={services.title}
                style={{ width: "350px" }}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-7   col-lg-8">
            <div
              className="py-5 px-4"
              style={{
                backgroundColor: "#1f2130",
                borderRadius: "5px",
              }}
            >
              <h5
                className="fw-bold text-light "
                style={{
                  direction: "rtl",
                }}
              >
                اسم الخدمة: {services.title}
              </h5>
              <p
                className=""
                style={{
                  direction: "rtl",
                  color: "#D9D9D9",
                  lineHeight: 1.8,
                  fontSize: "25px",
                }}
              >
                <strong
                  style={{
                    direction: "rtl",
                    color: "white",
                  }}
                >
                  وصف الخدمة:
                </strong>{" "}
                {services.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ServicesDetails;
