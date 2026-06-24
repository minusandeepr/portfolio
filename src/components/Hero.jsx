function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="tag">
          🚀 Frontend Developer • MERN Stack Developer • Open to work
        </p>

        <h1>
          Hi, I'm <span>Minu R</span>
        </h1>

        <h2>
          I build beautiful, responsive and modern web applications.
        </h2>

        <p className="description">
          Passionate React & MERN Stack Developer focused on creating
          user-friendly interfaces, scalable applications, and delightful
          digital experiences.
        </p>

        <div className="hero-buttons">

          <a href="#projects">
            <button className="primary">
              View Projects
            </button>
          </a>
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
>
    <button className="secondary">
        Resume
    </button>
</a>
          <a
            href="https://github.com/minusandeepr"
            target="_blank"
            rel="noreferrer"
          >
            <button className="secondary">
              GitHub
            </button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;