import React from 'react'
import impr1 from "../../../Images/nahid photo (1).svg"
import impr2 from "../../../Images/nahid photo (2).svg"
import impr3 from "../../../Images/nahid photo.svg"
import buttonIcon from "../../../Images/Frame 22.svg"
import './Improve.css'
const Improve = () => {
  return (
    <>
     <div className="container-fluid  text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-6 text-end">
            <p className="text" style={{color:"#D9D9D9" , fontSize:"30px" }}>
              نقدم استراتيجيات تسويقية بسيطة نعمل كواجهة واحدة توفر لشركتك فريق تسويق محترف، خبرات متقدمة
              وموارد للظهور المستمر الذي يساهم في تحقيق تأثير إيجابي على عملك.
            </p>
          </div>

          <div className="col-md-6 text-end">
            <h2  style={{fontWeight:"700px" , fontSize:"44px" , fontWeight:"bold"}}>
   نحن نسعى لجعل عملك ينمو بشكل أسرع من أي وقت مضى</h2>
            <div className="d-flex align-items-center mt-3">
              <div className="d-flex profile-images">
                <img src={impr1} alt="impr 1" className="profile-img" />
                <img src={impr2} alt="impr 2" className="profile-img" />
                <img src={impr3} alt="impr 3" className="profile-img" />
              </div>
              <button className=" customes-button ms-3">
                <img src={buttonIcon} alt="Button Icon" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Improve
