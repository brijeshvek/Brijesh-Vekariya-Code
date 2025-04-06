import React from "react";

export default function AboutMeDetails() {
  return (
    <section className="section-2 sec1" style={{ margin: "15rem 0px" }}>
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* Image Section */}
          <div className="col-12 col-md-4 mt-5 mx-auto text-center">
            <img
              src="MyImg.webp"
              alt="Brijesh Vekariya"
              style={{
                width: "100%",
                borderRadius: "10%",
                boxShadow: "0px 0px 20px #f9b9ba",
              }}
            />
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-6 mt-4">
            <h1
              className="text-light text-center text-md-start"
              style={{ fontSize: "50px", textShadow: "0px 0px 30px #d61d3d" }}
            >
              About Me
            </h1>
            <p
              className="text-light mt-4"
              style={{
                textTransform: "capitalize",
                fontSize: "20px",
                fontFamily: "serif",
                textAlign: "justify",
              }}
            >
              I'm <b>Brijesh Vekariya</b>, a passionate <b>Front-End Developer</b> and 
              <b> Web Designer</b>. I have expertise in <b>HTML, CSS, JavaScript, React.js, 
              Bootstrap, jQuery, and Express.js</b>. With <b>1 year of experience</b> in 
              front-end development, I have worked on various projects, building interactive 
              and responsive web applications. I am dedicated to creating seamless and visually 
              appealing user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
