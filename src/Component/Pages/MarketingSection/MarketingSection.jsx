import markating from "../../../Images/markating.svg";

const MarketingSection = () => {
  return (
    <section className="container-fluid text-light py-5 px-4">
      <div className="row align-items-center">
        {/* القسم النصي يبدأ من جنب الصورة */}
        <div className="col-md-6">
          <h2 className="fw-bold" style={{ direction: "rtl" }}>
            جعل التسويق أكثر من مجرد أداة ترويجية.
          </h2>
          <p className="mt-3">
            التسويق ليس مجرد وسيلة للترويج، بل هو فن بناء العلاقات وصناعة
            التأثير. نحن نؤمن أن النجاح يبدأ بفهم العميل، وإيصال الهوية الحقيقية
            له، فلكي تتمكن من تقديم الاستراتيجيات وأفكارك بطريقة تساهم في
            التميز، عليك أن تضع رؤيتك في إطار جذاب. ابدأ اليوم واستثمر في مستقبل
            عملك، لأن التسويق هو الجسر الذي يصل أفكارك لعملائك.
          </p>

          <div className="mt-4">
            <div className="d-flex justify-content-center  gap-4">
              <div className="d-flex flex-column text-center">
                <h4 className="fw-bold" style={{fontSize:"35px"}}>+20</h4>
                <p className="mb-0">سنوات الخبرة</p>
              </div>

              <div className="border-start border-3 border-warning" style={{ height: "60px", width: "3px", color:"#F4CFAB" }}></div>

              <div className="d-flex flex-column text-center">
                <h4 className="fw-bold" style={{fontSize:"35px"}}>+80</h4>
                <p className="mb-0">جائزة مكتسبة</p>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-4 mt-5">
              <div className="d-flex flex-column text-center">
                <h4 className="fw-bold" style={{fontSize:"35px"}}>+460</h4>
                <p className="mb-0">المشاريع المنجزة</p>
              </div>

              <div className="border-start border-3 border-warning" style={{ height: "60px", width: "3px" ,color:"#F4CFAB" }}></div>

              <div className="d-flex flex-column text-center">
                <h4 className="fw-bold" style={{fontSize:"35px"}}>+140</h4>
                <p className="mb-0">ثقة مكتسبة</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 text-center">
          <img
            src={markating}
            alt="Marketing Presentation"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
