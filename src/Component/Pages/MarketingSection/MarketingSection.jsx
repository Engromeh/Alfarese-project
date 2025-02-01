import React from "react";
import markating from "../../../Images/markating.svg";
import divider from "../../../Images/Line 4.svg" 

const MarketingSection = () => {
  return (
    <section className="container-fluid text-light py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-5 text-start">
          <h2 className="fw-bold display-5" style={{ direction: "rtl" }}>
            جعل التسويق أكثر من مجرد أداة ترويجية.
          </h2>
          <p className="mt-3 fs-5">
            التسويق ليس مجرد وسيلة للترويج، بل هو فن بناء العلاقات وصناعة التأثير.
            نحن نؤمن أن النجاح يبدأ بفهم العميل، وإيصال القيمة الحقيقية له.
            لذلك، نعمل على تقديم استراتيجيات وأدوات مبتكرة تساعدك في التميز وإبراز
            علامتك التجارية كخيار أول في السوق. ابدأ اليوم واستثمر في مستقبل عملك،
            لأن التسويق هو الجسر الذي يصل أفكارك لعملائك.
          </p>

          <div className="mt-4">
            <div className="d-flex align-items-center gap-5">
              <div className="text-center">
                <h4 className="fw-bold display-4">+20</h4>
                <p className="mb-0 fs-5">سنوات الخبرة</p>
              </div>

              <img src={divider} alt="divider" style={{ height: "60px" }} />

              <div className="text-center">
                <h4 className="fw-bold display-4">+80</h4>
                <p className="mb-0 fs-5">جائزة مكتسبة</p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 mt-5">
              <div className="text-center">
                <h4 className="fw-bold display-4">+460</h4>
                <p className="mb-0 fs-5">المشاريع المنجزة</p>
              </div>

              <img src={divider} alt="divider" style={{ height: "60px" }} />

              <div className="text-center">
                <h4 className="fw-bold display-4">+140</h4>
                <p className="mb-0 fs-5">ثقة مكتسبة</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-7 text-center">
          <img
            src={markating}
            alt="Marketing Presentation"
            className="img-fluid rounded shadow"
            style={{ maxWidth: "95%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
