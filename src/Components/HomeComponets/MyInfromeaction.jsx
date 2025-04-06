import React from "react";

export default function MyInformation() {
  return (
    <section className="section-7 py-5 sec5" style={{ margin: "15rem 0px" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Personal Information */}
          <div className="col-12 col-md-6 my-5">
            <h1 className="text-light mb-4">Brijesh Vekariya</h1>
            <p className="text-light fs-5">
              I'm <b>Brijesh Vekariya</b>, a passionate <b>Front-End Developer</b> and 
              <b> Web Designer</b>. My expertise includes <b>HTML, CSS, JavaScript, React.js, 
              Bootstrap, jQuery, Express, and Node.js</b>.  
              <br />
              <br />
              I have <b>1 year of experience</b> in coding and have developed multiple 
              projects, including:
            </p>
            <ul className="text-light fs-5">
              <li>Animal Clinic Website</li>
              <li>World Traveling Website</li>
              <li>News Website</li>
              <li>Portfolio</li>
            </ul>
            <p className="text-light fs-5">
              I specialize in creating interactive, user-friendly, and responsive 
              web applications.
            </p>
          </div>

          {/* Profile Image */}
          <div className="col-12 col-md-5 d-flex justify-content-center mt-5">
            <div className="position-relative">
              <img
                src="https://img.icons8.com/?size=350&id=37375&format=png&color=FFFFFF"
                alt="Decorative Background"
                className="img-fluid"
              />
              <div className="position-absolute top-0 start-50 translate-middle-x">
                <img
                  src="logo.png"
                  alt="Profile Logo"
                  width={300}
                  className="rounded-circle shadow-lg"
                  style={{ marginTop: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
