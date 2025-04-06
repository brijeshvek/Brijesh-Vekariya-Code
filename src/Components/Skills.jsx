import React from "react";
export default function Skills() {
  return (
    <>
      <div className="container-fluid section-3" style={{margin:"10rem 0px",overflowX:"hidden"}}>
          <div className="cards row  mx-md-4 d-flex justify-content-center">
            <div
              className="cardhover border border-4 col-6 col-md-3  bg-warning"
              style={{ width: "10rem" ,margin:"50px"}}
            >
              <img
                src="https://img.icons8.com/?size=100&id=9nmz9TYzN8iO&format=png&color=FFFFFF"
                alt="html"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark bold text-center text">HTML</h4>
              </div>
            </div>
            <div
              className="cardhover border border-4 col-6 col-md-3 bg-primary"
              style={{ width: "10rem", margin:"50px"}}
            >
              <img
                src="https://img.icons8.com/?size=100&id=38273&format=png&color=FFFFFF"
                alt="css"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">CSS</h4>
              </div>
            </div>
            <div
              className="cardhover border border-4 col-6 col-md-3 bg-warning"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=3752&format=png&color=FFFFFF"
                alt="js"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">Java Script</h4>
              </div>
            </div>
            <div
              className="cardhover border border-4 col-6 col-md-3 bg-primary"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=40253&format=png&color=FFFFFF"
                alt="jqaury"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">Jquary</h4>
              </div>
            </div>
          </div>
          <div className="cards row  mx-md-4 d-flex justify-content-center">
            <div
              className="cardhover border border-4 col-6 col-md-4 bg-info"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=35989&format=png&color=FFFFFF"
                alt="react"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">React JS</h4>
              </div>
            </div>
            <div
              className="cardhover border border-4 col-6 col-md-4 bg-primary"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=EfPQuvA3mB8q&format=png&color=FFFFFF"
                alt="bootstrap"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">Bootstrap</h4>
              </div>
            </div>
            <div
              className="cardhover border border-4 col-6 col-md-4 bg-primary-subtle"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=111021&format=png&color=000000"
                alt="c"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">C languages</h4>
              </div>
            </div>
          </div>
          <div className="cards row  mx-md-4 d-flex justify-content-center">
            <div
              className="cardhover border border-4 col-6 col-md-6 bg-primary"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=44328&format=png&color=FFFFFF"
                alt="c++"
                className="m-3"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">C++</h4>
              </div>
            </div>
            <div
              className="cardhover border border-4 col-6 col-md-6 bg-secondary"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=22441&format=png&color=FFFFFF"
                alt="json"
                className="m-2 p-2"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">JSON</h4>
              </div>
            </div>
          </div>
          <div className="cards row  mx-md-4 d-flex justify-content-center">
          <div
              className="cardhover border border-4 col-6 col-md-6 bg-light"
              style={{ width: "10rem", margin:"50px" }}
            >
              <img
                src="https://img.icons8.com/?size=100&id=87330&format=png&color=000000"
                alt="json"
                className="m-2 p-2"
              />
              <div className="overplay">
                <h4 className="text-dark text-center text">Firebase</h4>
              </div>
            </div>
          </div>
        </div>
      <div className="container-fluid ">
        <div className="html my-3">
          <h5 className="text-light">HTML</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
        <div className="css my-3">
          <h5 className="text-light">CSS</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "85%" }}
            ></div>
          </div>
        </div>
        <div className="js my-3">
          <h5 className="text-light">JAVA SCRIPT</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div className="bootstarp my-3">
          <h5 className="text-light">BOOTSTRAP</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div className="jquary my-3">
          <h5 className="text-light">JQUARY</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
        <div className="reactjs my-3">
          <h5 className="text-light">REACT JS</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "80%" }}
            ></div>
          </div>
        </div>
        <div className="jquary my-3">
          <h5 className="text-light">C Language</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
        <div className="jquary my-3">
          <h5 className="text-light">C++</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "55%" }}
            ></div>
          </div>
        </div>
        <div className="jquary my-3">
          <h5 className="text-light">Firebase</h5>
          <div
            className="progress"
            role="progressbar"
            aria-label="Animated striped example"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
