import React from 'react'
import planphoto from '../../../Images/freepik__the-style-is-candid-image-photography-with-natural__76423 3.svg'
const Sectioneplan = () => {
  return (
    <>
    <div className="container my-5 text-white text-end" >
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={ planphoto }
            alt="Market Analysis"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 text-end">
          <h2 className="fw-bold" style={{fontSize:"65px"}}>أحدث ما في مدونتنا بمكانك زيارته</h2>
        
          <p className="text-white ">قم بتحديث أحدث الأخبار ومتابعة حول عالم التسويق الرقمي حديثنا لإفادة مشروعك</p>
          <ul className="list-unstyled">
            <li className="mb-3">
              <h5 className="fw-bold">01 أبحاث السوق</h5>
              <p>نشاط جمع البيانات المتعلقة بمستهلكي السوق المستهدفة</p>
            </li>
            <br />
            <li className="mb-3">
              <h5 className="fw-bold">02 جمع البيانات</h5>
              <p>ومن المتوقع أن تزيد المبيعات وأن تتحسن الأعمال</p>
            </li>
            <li>
            <br />

              <h5 className="fw-bold">03 الجمهور المستهدف</h5>
              <p>الفئة المستهدفة لإجراء أبحاث السوق بشكل مثالي</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sectioneplan
