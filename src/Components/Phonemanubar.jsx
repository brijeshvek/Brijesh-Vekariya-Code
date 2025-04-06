import React from "react";
import { Link } from "react-router-dom";

function Phonemanubar() {
  return (
    <section className="phone-menubar fixed-bottom d-block d-md-none" style={{ backgroundColor: "#eff3ea" }}>
      <header>
        <nav className="d-flex justify-content-around align-item-center">
          <div className="py-2">
            <Link to="/home"><img
              src="https://img.icons8.com/?size=30&id=2797&format=png&color=000000"
              alt="Home Manu"
            />
            </Link>
          </div>
          <div className="py-2">
            <Link to="/portfolio"><img
              src="https://img.icons8.com/?size=30&id=61977&format=png&color=000000"
              alt="Portfolio"
            /></Link>
          </div>
          <div className="py-2">
            <Link to="/skill"><img
              src="https://img.icons8.com/?size=30&id=58852&format=png&color=000000"
              alt="Skills"
            /></Link>
          </div>
          <div className="py-2">
            <Link to="/about"><img
              src="https://img.icons8.com/?size=30&id=Qj1MSy6k8Qs8&format=png&color=000000"
              alt="me"
            /></Link>
          </div>
          <div className="py-2">
            <Link to="https://wa.me/9737539533"><img
              src="https://img.icons8.com/?size=30&id=59769&format=png&color=000000"
              alt="Content"
            /></Link>
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Phonemanubar;
