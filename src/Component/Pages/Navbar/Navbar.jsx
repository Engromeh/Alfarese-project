import logoe from "../../../Images/alfares_headar_logo 1.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* الشعار */}
        <img src={logoe} className="navbar-brand me-2" alt="logo" />

        {/* زر التوجل بجانب الشعار مباشرة */}
        <button
          className="navbar-toggler ms-1 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ width: "auto", padding: "5px 8px" }} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  justify-content-center w-100" id="navbarSupportedContent">
          <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0 gap-5 p-0">
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">المقالات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">الخدمات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">أعمالنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">تواصل معنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">احصل على عرض السعر</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-white" href="#">الرئيسية</a>
            </li>
          </ul>

          <form className="d-flex ms-2">
            <button
              type="submit"
              className="btn w-100 w-lg-auto"
              style={{
                color: "#FFFFFF",
                backgroundColor: "#151723",
                border: "2px #F4CFAB solid",
                borderRadius: "20px",
                padding: "5px 12px",
                fontSize: "15px",
                whiteSpace: "nowrap",
              }}
            >
              تسجيل دخول
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
