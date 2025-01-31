import './Navbar.css'
import logoe from '../../../Images/alfares_headar_logo 1.png'
const Navbar = () => {
  return (
    <>
         <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logoe} alt="Logo" className="navbar-logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto d-flex justify-content-center w-100">
            <li className="nav-item"><a className="nav-link" href="#">المقالات</a></li>
            <li className="nav-item"><a className="nav-link" href="#">الخدمات</a></li>
            <li className="nav-item"><a className="nav-link" href="#">اعمالنا</a></li>
            <li className="nav-item"><a className="nav-link" href="#">تواصل معنا</a></li>
            <li className="nav-item"><a className="nav-link" href="#">احصل على عرض السعر</a></li>
            <li className="nav-item"><a className="nav-link" href="#">الرئيسية</a></li>
          </ul>

          <div className="login-container ms-auto d-lg-block text-lg-end text-center">
            <a href="#" className="login-btn">تسجيل دخول</a>
          </div>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar
