const Projects = () => (
  <div className="projects" id="about">
    <h1>Projects</h1>
    <h2 className="font--light">Here is a taste of what I do</h2>
    <section>
      <div className="card">
      <div>
      <h3>Bergen STEM</h3>
      </div>
        
        <img src="https://i.imgur.com/mXVg5NM.jpg" alt="flask frame"/>
        <div>
        <p>Single page React app created for the STEM Department at Bergen Community College.</p>
        <p>
        Collaborated with backend-developer to create a site that showcases student projects, STEM events, and scholarship opportunities.
        </p>
        </div>
        
      </div>
      <div className="card">
      <div>
      <h3>FlaskFrame</h3>
      </div>
        
        <img src="https://i.imgur.com/mXVg5NM.jpg" alt="flask frame"/>
        <div>
          <p>Once users verify their email address, they will have access to the SmartFrame — an app where they will be able to do the following:</p>
        <ul>
          <li>Configure a location for weather information</li>
          <li>Easily add/remove stocks to appear in the scrolling stock-ticker</li>
          <li>Use Youtube embed codes to asynchronously set a background-video</li>
        </ul>
        </div>
        
      </div>
    </section>
  </div>
);

export default Projects;