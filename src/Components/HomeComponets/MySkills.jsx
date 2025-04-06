import React from "react";

export default function MySkills() {
  const skills = [
    { name: "HTML", color: "bg-warning", icon: "9nmz9TYzN8iO" },
    { name: "CSS", color: "bg-primary", icon: "38273" },
    { name: "JavaScript", color: "bg-warning", icon: "3752" },
    { name: "jQuery", color: "bg-primary", icon: "40253" },
    { name: "React JS", color: "bg-info", icon: "35989" },
    { name: "Bootstrap", color: "bg-primary", icon: "EfPQuvA3mB8q" },
    { name: "C Language", color: "bg-primary-subtle", icon: "111021" },
    { name: "C++", color: "bg-primary", icon: "44328" },
    { name: "JSON", color: "bg-secondary", icon: "22441" },
    {name:"Firebase", color:"bg-light",icon:"87330"}
  ];

  return (
    <section className="section-3 sec2" style={{ margin: "15rem 0px" }}>
      <div className="container">
        <h1
          className="text-light text-center"
          style={{ fontSize: "50px", margin: "100px 0px", textShadow: "0px 0px 30px #d61d3d" }}
        >
          Skills
        </h1>
        <div className="row justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`cardhover border border-4 col-6 col-md-3 ${skill.color} text-center m-3`}
              style={{ width: "10rem" }}
            >
              <img
                src={`https://img.icons8.com/?size=100&id=${skill.icon}&format=png&color=FFFFFF`}
                alt={skill.name}
                className="m-3"
              />
              <h4 className="text-dark bold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
