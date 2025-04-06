import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [message, setMessage] = useState("");
  const phoneNumber = "919737539533"; // Replace with your number (include country code)

  const sendMessage = () => {
    if (message.trim()) {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else {
      alert("Please enter a message.");
    }
  };
  return (
    <footer style={{ backgroundColor: "#eff3ea" }} className="d-none d-md-block">
      <div className="container-fluid row py-5 mx-4 mt-5 overflow-hidden">
        
        {/* Personal Info Section */}
        <div className="col-12 col-md-3">
          <h3 className="text-dark">Brijesh Vekariya</h3>
          <p className="text-dark">
            I am a Front-End Developer and Web Designer with experience in 
            building modern, responsive, and user-friendly websites.
          </p>
        </div>

        {/* Skills Section */}
        <div className="col-12 col-md-3">
          <h5 className="text-dark">Skills</h5>
          <ul className="list-unstyled">
            {["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "React.js"].map((skill, index) => (
              <li key={index}>
                <Link to="/skill" className="text-dark">{skill}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About & Contact Section */}
        <div className="col-12 col-md-3">
          <h5 className="text-dark">About</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://wa.me/9737539533" className="text-dark">Contact</a>
            </li>
            <li>
              <Link to="/skill" className="text-dark">Skills</Link>
            </li>
            <li>
              <a href="My Resume.pdf" className="text-dark" download="Brijesh_Vekariya_CV.pdf">
                Download CV
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="col-12 col-md-3">
          <h5 className="text-dark">Contact Us</h5>
          <div className="input-group mb-3">
          <input
          type="text"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            border: "1px solid #ccc",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            outline: "none",
          }}
        /> 
            <button
          onClick={sendMessage}
          style={{
            backgroundColor: "#222",
            border: "none",
            padding: "0 20px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            color: "white",
            cursor: "pointer",
          }}
        >
       <img src="https://img.icons8.com/?size=50&id=TCnKnYZFoOzM&format=png&color=FFFFFF" alt="" />
        </button>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="container row my-5 text-center">
          <div className="col-12">
            <ul className="d-flex justify-content-center list-unstyled">
              {[
                { name: "Twitter", url: "https://x.com/BrijeshV2004", img: "https://img.icons8.com/?size=40&id=fJp7hepMryiw&format=png&color=000000" },
                { name: "Instagram", url: "https://www.instagram.com/_itsbrijeshcall_", img: "https://img.icons8.com/?size=40&id=32292&format=png&color=000000" },
                { name: "GitHub", url: "https://github.com/brijeshvek", img: "https://img.icons8.com/?size=40&id=12598&format=png&color=000000" },
                { name: "Facebook", url: "https://www.facebook.com/brijesh.vekariya.7792", img: "https://img.icons8.com/?size=40&id=118468&format=png&color=000000" },
                { name: "Telegram", url: "https://t.me/+Lnv_t3S-rz0xZGI1", img: "https://img.icons8.com/?size=40&id=TCnKnYZFoOzM&format=png&color=000000" },
              ].map((social, index) => (
                <li key={index} className="mx-2">
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <img src={social.img} alt={social.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-dark">
          &copy; {new Date().getFullYear()} <a href="https://www.myworldnews.site" className="text-dark">www.brijeshvekariya.com</a>
        </div>
      </div>
    </footer>
  );
}
