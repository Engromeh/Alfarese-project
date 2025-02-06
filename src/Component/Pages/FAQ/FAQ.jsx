import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="container py-5" style={{ direction: "rtl" }}>
        <h2 className="text-center text-white mb-4">FAQ</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="accordion" id="faqAccordionRight">
              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none", boxShadow:"none" }}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq1"
                  >
                    كيف أبدأ؟
                  </button>
                </h2>
                <div id="faq1" className="accordion-collapse collapse show">
                  <div className="accordion-body">يمكنك البدء عبر التسجيل...</div>
                </div>
              </div>

              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none" , boxShadow:"none"}}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq2"
                  >
                    ما هي شركة ALFARES؟
                  </button>
                </h2>
                <div id="faq2" className="accordion-collapse collapse">
                  <div className="accordion-body">شركة ALFARES...</div>
                </div>
              </div>

              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none", boxShadow:"none" }}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq3"
                  >
                    ما هي رؤية ALFARES؟
                  </button>
                </h2>
                <div id="faq3" className="accordion-collapse collapse">
                  <div className="accordion-body">الرؤية الخاصة بالشركة...</div>
                </div>
              </div>

              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none", boxShadow:"none" }}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq4"
                  >
                    ما هي الخدمات التي تقدمونها؟
                  </button>
                </h2>
                <div id="faq4" className="accordion-collapse collapse">
                  <div className="accordion-body">نحن نقدم خدمات مثل...</div>
                </div>
              </div>

              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none" , boxShadow:"none"}}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq5"
                  >
                    ما هي شروط وأحكام افتتاح الشركة؟
                  </button>
                </h2>
                <div id="faq5" className="accordion-collapse collapse">
                  <div className="accordion-body">الشروط والأحكام الخاصة...</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="accordion" id="faqAccordionLeft">
              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none" , boxShadow:"none"}}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                  >
                    كيف يعمل موقع ALFARES؟
                  </button>
                </h2>
                <div id="faq6" className="accordion-collapse collapse">
                  <div className="accordion-body">موقع التسويق هو منصة إلكترونية...</div>
                </div>
              </div>

              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none", boxShadow:"none" }}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                  >
                    من هم مؤسسين ALFARES؟
                  </button>
                </h2>
                <div id="faq7" className="accordion-collapse collapse">
                  <div className="accordion-body">معلومات عن المؤسسين...</div>
                </div>
              </div>

              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none", boxShadow:"none"}}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                  >
                    ما هي أهداف ALFARES؟
                  </button>
                </h2>
                <div id="faq8" className="accordion-collapse collapse">
                  <div className="accordion-body">الأهداف الرئيسية لـ ALFARES...</div>
                </div>
              </div>

              <div className="accordion-item mb-3" style={{ backgroundColor: "transparent", border: "none" , boxShadow:"none"}}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed custom-accordion"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq9"
                  >
                    ما هي المزايا التي تقدمها شركة ALFARES؟
                  </button>
                </h2>
                <div id="faq9" className="accordion-collapse collapse">
                  <div className="accordion-body">المزايا المقدمة تشمل...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;