import markating from "../../../Images/markating.svg";
const MarketingSection = () => {
  return (
    <section className="container-fluid  text-light py-5 px-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold">جعل التسويق أكثر من مجرد أداة ترويجية.</h2>
          <p className="mt-3">
            التسويق ليس مجرد وسيلة للترويج، بل هو فن بناء العلاقات وصناعة
            التأثير. نحن نؤمن أن النجاح يبدأ بفهم العميل، وإيصال الهوية الحقيقية
            له، فلكي تتمكن من تقديم الاستراتيجيات وأفكارك بطريقة تساهم في
            التميز، عليك أن تضع رؤيتك في إطار جذاب. ابدأ اليوم واستثمر في مستقبل
            عملك، لأن التسويق هو الجسر الذي يصل أفكارك لعملائك.
          </p>
          <div className="row mt-4">
            <div className="col-md-6 position-relative">
              <h4 className="fw-bold">+20</h4>
              <hr className="border border-warning" />
              <p>سنوات الخبرة</p>
            </div>
            <div className="col-md-6 position-relative">
              <h4 className="fw-bold">+80</h4>
              <hr className="border border-warning" />
              <p>جائزة مكتسبة</p>
            </div>
            <div className="col-md-6 position-relative">
              <h4 className="fw-bold">+460</h4>
              <hr className="border border-warning" />
              <p>المشاريع المنجزة</p>
            </div>
            <div className="col-md-6 position-relative">
              <h4 className="fw-bold">+140</h4>
              <hr className="border border-warning" />
              <p>ثقة مكتسبة</p>
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
