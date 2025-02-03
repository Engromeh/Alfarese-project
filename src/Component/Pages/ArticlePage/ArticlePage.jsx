import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ph1 from "../../../Images/Mask group (1).svg";
import ph2 from "../../../Images/ph22.svg";
import logo188 from "../../../Images/Group 188.svg";
import logo189 from "../../../Images/Group 189.svg";
import backLogo from "../../../Images/Icon back.svg"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


    

        
        const ArticlePage = () => {
          return (
            <>
            <Navbar />
            <div className="container py-4 text-light">
            <div className="row mb-3" style={{ marginTop: window.innerWidth < 768 ? "25%" : "7%" }}>
              <div className="col-md-5 col-12 p-3 rounded mb-3 mb-md-0" style={{ backgroundColor: "#202130", marginRight: "10px" }}>
                <div className="d-flex justify-content-end align-items-center">
                  <span className="text-light ms-2" style={{ marginRight: "5px" }}>2025، يناير 30</span>
                  <img src={logo188} alt="Logo 1" className="img-fluid" style={{ width: "20px" }} />
                  <img src={logo189} alt="Logo 2" className="img-fluid ms-2" style={{ width: "20px" }} />
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <img src={backLogo} alt="Back Logo" className="img-fluid" style={{ width: "14px" }} />
                  <span>العودة للمقالات</span>
                </div>
              </div>
              <div className="col-md-6 col-12 p-3 rounded mt-2 mt-md-0" style={{ backgroundColor: "#202130" }}>
                <h2 className="text-light">خدمة العملاء والاهتمام بالعميل</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 order-md-2">
                <img src={ph1} className="img-fluid rounded" alt="Main Visual" />
              </div>
              <div className="col-md-6 order-md-1" style={{ fontSize: "20px" }}>
                <p style={{ width: "100%", fontWeight: "bold", lineHeight: "40px" }}>
                  قد تمر عليك بعض المشاكل من العميل ويجب التعامل معها بشكل جيد حتى تتجنب بعض المشاكل
                  وتكسبها لما فيه المصلحة بما يتماشى مع أهدافك. يمكن أن يشعر المستهلك بعدم الرضا
                  بغض النظر إن كان منتجك أو خدمتك بشكل رائع، لذلك يكون من المهم جدًا فهم المنتج أو
                  الخدمة بشكل جيد والتصور وتوضيح رؤية العلامة التجارية والقيادة بطريقة احترافية.
                  لذلك تقوم الشركات الناجحة باختيار موظفيها بعناية بحيث يقدمون لمتعاملهم دعمهم
                  واكتساب ثقتهم.
                </p>
              </div>
            </div>
            <div className="row mt-3 flex-column-reverse flex-md-row">
              <div className="col-md-6 mb-3 mb-md-0">
                <img src={ph2} className="img-fluid rounded" alt="Secondary Visual" style={{ marginLeft: "auto", marginRight: "auto", display: "block" }} />
              </div>
              <div className="col-md-6" style={{ fontSize: "20px" }}>
                <p style={{ width: "100%", fontWeight: "bold", lineHeight: "40px" }}>
                  قد تمر عليك بعض المشاكل من العميل ويجب التعامل معها بشكل جيد حتى تتجنب بعض المشاكل
                  وتكسبها لما فيه المصلحة بما يتماشى مع أهدافك. يمكن أن يشعر المستهلك بعدم الرضا
                  بغض النظر إن كان منتجك أو خدمتك بشكل رائع، لذلك يكون من المهم جدًا فهم المنتج أو
                  الخدمة بشكل جيد والتصور وتوضيح رؤية العلامة التجارية والقيادة بطريقة احترافية.
                  لذلك تقوم الشركات الناجحة باختيار موظفيها بعناية بحيث يقدمون لمتعاملهم دعمهم
                  واكتساب ثقتهم.
                </p>
              </div>
            </div>
          </div>
<Footer />
          </>
  );
};

export default ArticlePage;