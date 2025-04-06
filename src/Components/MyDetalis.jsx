import React from "react";
import AboutMeDetalis from "./HomeComponets/AboutMeDetalis";
import MySkills from "./HomeComponets/MySkills";
import MyPortfolio from "./HomeComponets/MyPortfolio";
import MyExpriences from "./HomeComponets/MyExpriences";
import MyInfromeaction from "./HomeComponets/MyInfromeaction";

export default function MyDetalis() {
  return (
    <>
      <section className="section-1">
        <div className="container-fluid row py-5 d-flex align-items-center">
          
          {/* Introduction Section */}
          <div className="col-10 col-md-5" style={{ marginTop: "10%", marginLeft: "15%" }}>
            <h1 className="text-light animation">Hey! It's Me...</h1>
            <p className="text-light fs-5">
              I am a{" "}
              <span className="text-info">
                Front-End Developer & Web Designer.
              </span>
            </p>
            <p className="text-light">
              I am mastering web development and have gained extensive experience in 
              front-end development and web design. I have 1 year of experience** in 
              building responsive and user-friendly websites.
            </p>
            <button type="button" className="btn btn-outline-light">
              <a className="nav-link" href="My Resume.pdf" download="Brijesh Vekariya CV">
                Download CV
              </a>
            </button>
          </div>

          {/* Profile Image Section */}
          <div className="position-relative col-6 col-md-4 mx-md-5 mt-5 mx-2">
            <div className="mx-md-5">
              <img
                src="https://img.icons8.com/?size=350&id=37375&format=png&color=FFFFFF"
                alt="Developer Icon"
              />
              <div className="position-absolute top-0">
                <img
                  src="logo.png"
                  alt="Profile Logo"
                  width={300}
                  style={{
                    margin: "20px 25px",
                    boxShadow: "0px 0px 50px white",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Other Components */}
      <AboutMeDetalis />
      <MySkills />
      <MyPortfolio />
      <MyExpriences />
      <MyInfromeaction />
    </>
  );
}
