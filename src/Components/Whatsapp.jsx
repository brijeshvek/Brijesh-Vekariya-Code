import React from "react";
import { Link } from "react-router-dom";

export default function Whatsapp() {
  return (
    <>
      <div className="whatsapp d-none d-md-block">
          <Link to="https://wa.me/9737539533">
            <img
              src="https://img.icons8.com/?size=70&id=16713&format=png&color=000000"
              alt=""
            />
          </Link>
      </div>
    </>
  );
}
