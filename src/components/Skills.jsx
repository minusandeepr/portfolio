function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Technical Skills</h2>

      <div className="cards">
        <div className="card">
          <h3>🎨 Frontend</h3>

          <p>
            React <br />
            JavaScript (ES6+) <br />
            HTML5 <br />
            CSS3 <br />
            Responsive Design
          </p>
        </div>

        <div className="card">
          <h3>⚙️ Backend</h3>

          <p>
            Node.js <br />
            Express.js <br />
            REST APIs
          </p>
        </div>

        <div className="card">
          <h3>🗄️ Database</h3>

          <p>
            MongoDB <br />
            Mongoose
          </p>
        </div>

        <div className="card">
          <h3>🛠️ Tools</h3>

          <p>
            Git <br />
            GitHub <br />
            Vercel <br />
            VS Code
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;