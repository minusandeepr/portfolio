function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Featured Project</h2>

      <div className="cards">
        <div className="card featured-card">
          <div className="project-header">
            <h3>InterviewAce</h3>

            <span className="badge">
              🏆 Internship Trial Project
            </span>
          </div>

          <p className="project-description">
            InterviewAce is an AI-inspired STAR interview answer formatter
            designed to help job seekers transform rough interview responses
            into clear, structured, and professional STAR-format answers
            through a clean and responsive React interface.
          </p>

          <div className="tech-stack">
            <strong>Tech Stack</strong>

            <p>
              React • Vite • JavaScript • CSS • Responsive Design
            </p>
          </div>

          <ul className="feature-list">
            <li>✓ STAR interview answer formatter</li>
            <li>✓ Modern responsive UI</li>
            <li>✓ Component-based React architecture</li>
            <li>✓ Mobile-friendly design</li>
            <li>✓ Fast Vite development environment</li>
            <li>✓ Clean and intuitive user experience</li>
          </ul>

          <div className="project-links">
            <a
              href="https://interview-ace-gamma-umber.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Live Demo
            </a>

            <a
              href="https://github.com/minusandeepr/InterviewAce"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;