import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase"; // Adjust the path as needed

function Portfolio() {
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

  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("Website link not available.");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center mx-5 my-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card col-6 col-md-4 bg-dark border border-2 p-2 mx-4 my-4"
            onClick={() => openLink(project.websiteLink)}
            style={{ width: "18rem", cursor: "pointer" }}
          >
            <img
              src={project.img}
              className="card-img-top"
              alt={project.title}
            />
            <div className="card-body">
              <h5 className="card-title text-light text-center">
                {project.title}
              </h5>
              <p className="card-text text-light">{project.description}</p>
              <button className="btn btn-primary d-flex justify-content-center mx-4 px-4">
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light nav-link"
                >
                  Show This Website
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
