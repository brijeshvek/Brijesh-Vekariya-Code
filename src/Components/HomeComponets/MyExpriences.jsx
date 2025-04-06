import React from "react";

export default function MyExperiences() {
  return (
    <section className="section-6 myexperiences" style={{ margin: "15px 0px", overflowY: "hidden" }}>
      <div className="container">
        <h3
          className="text-light text-center"
          style={{ fontSize: "50px", margin: "5rem 0px", textShadow: "0px 0px 30px #d61d3d" }}
        >
          Experience
        </h3>

        {/* Experience 1: TOPS Technology */}
        <div className="row align-items-start tops">
          <div className="col-2 col-md-1 d-flex justify-content-center" />
          <div className="col-11 col-md-10 mx-md-5 my-3">
            <h3 className="text-light fs-1">TOPS Technology</h3>
            <ul className="text-light fs-5">
              <li>1 year of experience as a <b>Front-End Developer & Web Designer</b></li>
              <li>Worked with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>jQuery</b></li>
              <li>Built responsive UIs with <b>React.js</b> and <b>Bootstrap</b></li>
            </ul>
            <a
              className="btn btn-outline-light mt-3"
              href="TOPS certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Certificate
            </a>
          </div>
        </div>

        {/* Experience 2: IntersElite */}
        <div className="row align-items-start intersElite" >
          <div className="col-11 col-md-10 mx-md-5 my-3">
            <h3 className="text-light fs-1">IntersElite</h3>
            <ul className="text-light fs-5">
              <li>3 months of experience in <b>Web Development Course</b></li>
              <li>Learned <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>jQuery</b></li>
              <li>Practiced layout and design using <b>Bootstrap</b></li>
            </ul>
            <a
              className="btn btn-outline-light mt-3"
              href="IntersElite.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Show Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
