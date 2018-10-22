const Projects = () => (
  <div className="projects" id="about">
    <header>
      <h1>Projects</h1>
      <h2 className="font--light">Here is a taste of what I do</h2>
    </header>
    <section>
      <div className="card">
        <img src="https://i.imgur.com/imp5c6G.jpg" alt="flask frame" />
        <div>
          <h3>Bergen STEM</h3>
          <p>Single page React app created for the STEM Department at Bergen Community College.</p>
          <p>
            Collaborated with backend-developer to create a site that showcases student projects, STEM events, and scholarship opportunities.
        </p>
          <a href="">Bergen STEM <span>&rsaquo;</span></a>
          <br />
          <a href="">Github Repo <span>&rsaquo;</span></a>
        </div>
      </div>
      <div className="card">
        <img src="https://i.imgur.com/mXVg5NM.jpg" alt="flask frame" />
        <div>
          <h3>FlaskFrame</h3>
          <p>Once users verify their email address, they will have access to the SmartFrame — an app where they will be able to do the following:</p>
          <ul>
            <li>Configure a location for weather information</li>
            <li>Easily add/remove stocks to appear in the scrolling stock-ticker</li>
            <li>Use Youtube embed codes to asynchronously set a background-video</li>
          </ul>
          <a href="">FlaskFrame <span>&rsaquo;</span></a>
          <br />
          <a href="">Github Repo <span>&rsaquo;</span></a>
        </div>
      </div>
      <div className="card">
        <img src="https://i.imgur.com/a7pKgWc.jpg" alt="flask frame" />
        <div>
          <h3>GatsbyJS Blog</h3>
          <p>GatsbyJS build hosted on gitpages.</p>
          <p>
          Features a markdown blog that supports YAML front matter.
          </p>
          <a href="">GatbsyJS Blog <span>&rsaquo;</span></a>
          <br />
          <a href="">Github Repo <span>&rsaquo;</span></a>
        </div>
      </div>
    </section>
  </div>
);

export default Projects;