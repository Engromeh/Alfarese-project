import React from 'react'
import impr1 from "../../../Images/nahid photo (1).svg"
import impr2 from "../../../Images/nahid photo (2).svg"
import impr3 from "../../../Images/nahid photo.svg"

const Improve = () => {
  return (
    <>
       <section className="container-fluid  text-light py-5 px-4">
      <div className="row align-items-center">
        <div className="col-md-6">
          <p className="text-white">
            نقدم استراتيجيات تسويقية مبسطة تعمل كوجهة واحدة توفر لشركتك فريق تسويق محترف، خبرات متقدمة، وموارد للتطوير المستمر
            الذي يساهم في تحقيق التأثير الإيجابي على عملك.
          </p>
        </div>
        <div className="col-md-6 text-end">
          <h2 className="fw-bold">نحن نسعى لجعل عملك</h2>
          <h2 className="fw-bold text-primary">ينمو بشكل أسرع من أي</h2>
          <h2 className="fw-bold">وقت مضى</h2>
          <div className="d-flex align-items-center mt-3">
            <img src={impr1} alt="User1" className="rounded-circle border border-light" width="40" height="40" />
            <img src={impr2} alt="User2" className="rounded-circle border border-light mx-1" width="40" height="40" />
            <img src={impr3} alt="User3" className="rounded-circle border border-light" width="40" height="40" />
            <button className="btn btn-outline-light btn-sm ms-2">+100</button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Improve
