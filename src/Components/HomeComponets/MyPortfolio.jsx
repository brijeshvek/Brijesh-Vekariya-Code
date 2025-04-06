import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase"; // Adjust if needed

function MyPortfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectData = querySnapshot.docs.map((doc) => doc.data());
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="section-4" style={{ margin: "18rem 0px" }}>
      <div className="container">
        <h1
          className="text-light text-center"
          style={{
            fontSize: "50px",
            margin: "6rem 0px",
            textShadow: "0px 0px 30px #d61d3d",
          }}
        >
          Portfolio
        </h1>
        <div className="row justify-content-center mx-2 my-5">
          {projects.slice(3, 6).map((project, index) => (
            <div
              key={index}
              className="card col-12 col-md-4 bg-dark border border-2 p-3 mx-3 my-3 d-flex flex-column"
              style={{ width: "20rem", minHeight: "100%", cursor: "pointer" }}
              onClick={() => window.open(project.websiteLink, "_blank")}
            >
              <img
                src={project.img}
                className="card-img-top"
                alt={project.title}
                style={{
                  borderRadius: "10px",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-body text-center d-flex flex-column justify-content-between"
                style={{ flexGrow: 1 }}
              >
                <div>
                  <h5 className="card-title text-light">{project.title}</h5>
                  <p className="card-text text-light">{project.description}</p>
                </div>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary w-100 mt-3"
                >
                  Show This Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MyPortfolio;
