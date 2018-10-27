const Projects = () => (
  <div className="projects" id="about">
    <header>
      <h1 className="primary">Projects</h1>
      <h2 className="font--light less--dark">Here is a taste of what I do</h2>
    </header>
    <section>
    <div className="card">
        <div style={{backgroundImage:"url(https://i.imgur.com/IT2RdUk.jpg)"}} className="card__img">
          {/* <img src="https://i.imgur.com/mXVg5NM.jpg" alt="flask frame" /> */}
        </div>

        <div>
          <h3>FlaskFrame</h3>
          <p><em>Email Authentication,
          JSON Web Tokens, Postgresql, Heroku Hosting,
           JinJa Templates</em></p>
          <p>Once users verify their email address, they will have access to the SmartFrame — an app where they will be able to do the following:</p>
          <ul>
            <li>Configure a location for weather information</li>
            <li>Easily add/remove stocks to appear in the scrolling stock-ticker</li>
            <li>Use Youtube embed codes to asynchronously set a background-video</li>
          </ul>
          <a href="">FlaskFrame <span>&rsaquo;</span></a>
          {/* <br /> */}
          <a href="">Github Repo <span>&rsaquo;</span></a>
        </div>
      </div>  
      <div className="card">
        <div style={{backgroundImage:"url(https://i.imgur.com/imp5c6G.jpg)"}}  className="card__img">
          {/* <img src="https://i.imgur.com/imp5c6G.jpg" alt="flask frame" /> */}
        </div>
        <div>
          <h3>Bergen STEM</h3>
          <p><em className="less--dark">Responsive Web Design (no CSS libraries), 
          Semantic HTML, ARIA, Ajax, Asset lazy-loading</em></p>
          <p> <strong>React</strong> application designed and
          built for the STEM Department at Bergen Community College,
          built using <strong>Webpack</strong>.</p>
          <p>
            Collaborated with backend-developer to create a site that showcases student projects, STEM events, and scholarship opportunities.
        </p>
          <a href="">Bergen STEM <span>&rsaquo;</span></a>
          {/* <br /> */}
          <a href="">Github Repo <span>&rsaquo;</span></a>
        </div>
      </div>

     <div className="card">
        <div style={{backgroundImage:"url(https://i.imgur.com/a7pKgWc.jpg)"}} className="card__img">
          {/* <img src="https://i.imgur.com/a7pKgWc.jpg" alt="flask frame" /> */}
        </div>        
        <div>
          <h3>Personal Blog</h3>          
          <p><em>Responsive Web Design (no CSS libraries), 
          Semantic HTML, ARIA, React static-site, styled-components</em></p>
          <p><strong>GatsbyJS</strong> build hosted on <strong>gitpages</strong>.</p>          
          <p>
            Features a <strong>markdown blog</strong> that 
            supports <strong>YAML front matter</strong>.
          </p>
          <a href="">GatbsyJS Blog <span>&rsaquo;</span></a>
          {/* <br /> */}
          <a href="">Github Repo <span>&rsaquo;</span></a>
        </div>
      </div>





         
    </section>
  </div>
);

export default Projects;