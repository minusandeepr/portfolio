function Projects() {
  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="cards">

        <div className="card">
          <h3>InterviewAce</h3>

          <p>
              • Converts interview answers into STAR format
              • Responsive React application
              • Modern UI
              • Instant formatting
          </p>

          <a
            href="https://interview-ace-gamma-umber.vercel.app/"
            target="_blank"
          >
            Live Demo
          </a>
        </div>

        <div className="card">
          <h3>MERN Ecommerce</h3>

          <p>
            Full-stack ecommerce application with authentication and cart.
          </p>

          <a href="#">
            GitHub
          </a>
        </div>

      </div>

    </section>
  );
}

export default Projects;