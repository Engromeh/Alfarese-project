import React from "react";
import markating from "../../../Images/markating.svg";
import divider from "../../../Images/Line 4.svg";

const MarketingSection = () => {
  return (
    <section className="container-fluid text-light py-5" >
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-5 text-end d-flex flex-column justify-content-center" style={{ direction: "rtl" }}>
          <h2 className="fw-bold" style={{ fontSize: "3rem" }}>
            جعل التسويق أكثر من مجرد أداة ترويجية
          </h2>
          <p className="mt-3 fs-4" style={{ maxWidth: "90%" }}>
            التسويق ليس مجرد أداة ترويجية، بل هو عملية شاملة تهدف إلى فهم احتياجات العملاء وتقديم قيمة حقيقية لهم. 
            يساعدك على بناء علامة مع العملاء من خلال التواصل الفعّال واستراتيجيات التفاعل، مما يحقق لك النجاح والاستمرارية. 
            سنساعدك أيضًا على تعزيز الوعي بعلامتك التجارية أو الخدمة بطرق تنافسية وفعّالة.
          </p>
          <div className="mt-4">
            <div className="d-flex align-items-center justify-content-between" style={{ maxWidth: "100%" }}>
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "3rem" }}>+20</h4>
                <p className="mb-0 fs-4">سنوات الخبرة</p>
              </div>
              <img src={divider} alt="divider" style={{ height: "60px" }} />
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "3rem" }}>+80</h4>
                <p className="mb-0 fs-4">جائزة مكتسبة</p>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-4" style={{ maxWidth: "100%" }}>
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "3rem" }}>+460</h4>
                <p className="mb-0 fs-4">المشاريع المنجزة</p>
              </div>
              <img src={divider} alt="divider" style={{ height: "60px" }} />
              <div className="text-center">
                <h4 className="fw-bold" style={{ fontSize: "3rem" }}>+140</h4>
                <p className="mb-0 fs-4">ثقة مكتسبة</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-7 text-center d-flex justify-content-right">
          <img
            src={markating}
            alt="Marketing Presentation"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "80%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
