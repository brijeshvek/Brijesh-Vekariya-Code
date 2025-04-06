import React,{useState}from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navigation" style={{ backgroundColor: "#eff3ea" }}>
        <div className="container-fluid">
          
          {/* Brand Logo & Name */}
          <Link className="navbar-brand text-dark d-flex align-items-center" to="/home">
            <img
              src="Mylogo.png"
              alt="Brijesh Vekariya Logo"
              style={{ width: "50px" }}
              className="mx-3"
            />
            <b className="title">Brijesh Vekariya</b>
          </Link>

          {/* Mobile Navbar Toggle Button */}
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${isOpen ? "show": ""}`}id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto pe-3">
              {[
                { name: "Home", path: "/home" },
                { name: "Skills", path: "/skill" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "https://wa.me/9737539533", external: true }
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  {item.external ? (
                    <a className="nav-link text-dark text-center" href={item.path} target="_blank" rel="noopener noreferrer"  onClick={closeMenu}>
                      <b>{item.name}</b>
                    </a>
                  ) : (
                    <Link className="nav-link text-dark text-center" to={item.path} onClick={closeMenu}>
                      <b>{item.name}</b>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Download Resume Button */}
            <div className="d-flex justify-content-center" style={{marginLeft:"0vh"}}>
              <a href="My Resume.pdf" download="Brijesh_Vekariya_CV.pdf" className="btn btn-outline-dark">
                Download CV
              </a>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;
