import React from "react";
import markating from "../../../Images/markating.svg";
import divider from "../../../Images/Line 4.svg";

const MarketingSection = () => {
  return (
    <section className="container text-light py-5" style={{ backgroundColor: "#151723" }}>
      <div className="row align-items-center flex-column flex-md-row text-md-end text-center text-md-start" style={{ marginLeft: "10%" }}>
        {/* القسم النصي */}
        <div className="col-lg-6 col-md-6 d-flex flex-column justify-content-center align-items-md-end text-center text-md-end" style={{ direction: "rtl" }}>
          <h2 className="fw-bold" style={{ fontSize: "2.5rem", lineHeight: "1.4" }}>
            جعل التسويق أكثر من مجرد أداة ترويجية
          </h2>
          <p className="mt-3 fs-5" style={{ maxWidth: "600px", lineHeight: "1.8", margin: "0 auto" }}>
            التسويق ليس مجرد أداة ترويجية، بل هو عملية شاملة تهدف إلى فهم احتياجات العملاء وتقديم قيمة حقيقية لهم.
            يساعدك على بناء علامة مع العملاء من خلال التواصل الفعّال واستراتيجيات التفاعل، مما يحقق لك النجاح والاستمرارية.
            سنساعدك أيضًا على تعزيز الوعي بعلامتك التجارية أو الخدمة بطرق تنافسية وفعّالة.
          </p>
          {/* الإحصائيات */}
          <div className="mt-4 w-100 d-flex flex-column align-items-center align-items-md-start">
            <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap gap-3 w-100"  style={{marginRight:"3%"}}>
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "2.5rem" }}>+20</h4>
                <p className="mb-0 fs-5">سنوات الخبرة</p>
              </div>
              <img src={divider} alt="divider" style={{ height: "50px" }} />
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "2.5rem" }}>+80</h4>
                <p className="mb-0 fs-5">جائزة مكتسبة</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap gap-3 w-100 mt-4">
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "2.5rem" }}>+460</h4>
                <p className="mb-0 fs-5">المشاريع المنجزة</p>
              </div>
              <img src={divider} alt="divider" style={{ height: "50px" }} />
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "2.5rem" }}>+140</h4>
                <p className="mb-0 fs-5">ثقة مكتسبة</p>
              </div>
            </div>
          </div>
        </div>

        {/* صورة التسويق */}
        <div className="col-lg-6 col-md-6 text-center d-flex justify-content-center mt-4 mt-md-0">
          <img
            src={markating}
            alt="Marketing Presentation"
            className="img-fluid rounded shadow"
            style={{
              maxWidth: "90%",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
