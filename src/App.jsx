import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [degree, setDegree] = useState("");
  const [skills, setSkills] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="container">
      <h1 className="title">ResumeCraft</h1>

      <div className="resume-wrapper">
        {/* Form Section */}
        <div className="form-section">
          <h2>Personal Information</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <h2>Education</h2>

          <input
            type="text"
            placeholder="College Name"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />

          <input
            type="text"
            placeholder="Degree"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />

          <h2>Skills</h2>

          <input
            type="text"
            placeholder="React, JavaScript, CSS"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />

          <h2>Experience</h2>

          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        {/* Resume Preview */}
        <div className="resume-sheet">
          <div className="header">
            <h1>{name || "Your Name"}</h1>

            <p>{email || "your@email.com"}</p>

            <p>{phone || "+91 XXXXX XXXXX"}</p>
          </div>

          <section>
            <h2>EDUCATION</h2>

            <p>
              <strong>{degree}</strong>
            </p>

            <p>{college}</p>
          </section>

          <section>
            <h2>SKILLS</h2>

            <p>{skills}</p>
          </section>

          <section>
            <h2>EXPERIENCE</h2>

            <p>
              <strong>{role}</strong>
            </p>

            <p>{company}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;