import React from 'react';

function About() {
  return (
    <>
      <section className="section2 my-5">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            
            {/* Profile Image */}
            <div className="col-8 col-md-4 col-sm-12 mt-4 mx-5">
              <img 
                src="MyImg.webp" 
                alt="Brijesh Vekariya" 
                style={{ 
                  width: "100%", 
                  borderRadius: "10%", 
                  boxShadow: "0px 0px 20px #f9b9ba" 
                }} 
              />
            </div>

            {/* About Content */}
            <div className="col-12 col-md-6 col-sm-12 mt-5 mx-1">
              <p className="text-light m-2" style={{ textTransform: "capitalize", fontSize: "20px", textAlign: "justify" }}>
                Hi, I'm <strong>Brijesh Vekariya</strong>, a passionate <strong>Front-End Developer</strong> and <strong>Web Designer</strong>. 
                I specialize in <strong>HTML, CSS, JavaScript, React.js, Bootstrap, jQuery, Express, and Node.js</strong>. 
                With over a year of experience in coding, I have developed multiple projects, including:
              </p>
              <ul className="text-light mx-3">
                <li>Animal Clinic Website</li>
                <li>World Traveling Website</li>
                <li>News Website</li>
                <li>Portfolio Website</li>
              </ul>
              <p className="text-light mx-2">
                I am currently pursuing a <strong>Bachelor of Technology (B.Tech)</strong> at <strong>Silver Oak University</strong> in Ahmedabad. 
                I am in my 3rd semester (2024 - Present) with a CGPA of <strong>7.63</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;
