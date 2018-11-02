const Projects = () => (
  <div className="projects view" id="projects">
    <header>
      <h1 className="primary">Portfolio</h1>
      <h2 className="font--light less--dark">Here is a taste of what I do</h2>
    </header>
    <section>
      <div className="card">
        <div style={{ backgroundImage: 'url(https://i.imgur.com/IT2RdUk.jpg)' }} className="card__img">
          {/* <img src="https://i.imgur.com/mXVg5NM.jpg" alt="flask frame" /> */}
        </div>

        <div>
          <h3>FlaskFrame</h3>
          <p>
            <em>


              Email Authentication,
                        JSON Web Tokens, Postgresql, Heroku Hosting,
                         JinJa Templates
              
              
            </em>
          </p>
          <p>Once users verify their email address, they will have access to the SmartFrame — an app where they will be able to do the following:</p>
          <ul>
            <li>Configure a location for weather information</li>
            <li>Easily add/remove stocks to appear in the scrolling stock-ticker</li>
            <li>Use Youtube embed codes to asynchronously set a background-video</li>
          </ul>
          <a href="https://flaskframe.herokuapp.com">


            FlaskFrame
            
            <span>&rsaquo;</span>
          </a>
          {/* <br /> */}
          <a href="">


            Github Repo
            
            <span>&rsaquo;</span>
          </a>
        </div>
      </div>
      <div className="card">
        <div style={{ backgroundImage: 'url(https://i.imgur.com/imp5c6G.jpg)' }} className="card__img">
          {/* <img src="https://i.imgur.com/imp5c6G.jpg" alt="flask frame" /> */}
        </div>
        <div>
          <h3>Bergen STEM</h3>
          <p>
            <em className="less--dark">


              Responsive Web Design (no CSS libraries),
                        Semantic HTML, ARIA, Ajax, Asset lazy-loading
              
              
            </em>
          </p>
          <p>
            React application designed and
            built for the STEM Department at Bergen Community College,
            built using Webpack.t
          </p>
          <p>


            Collaborated with backend-developer to create a site that showcases student projects, STEM events, and scholarship opportunities.


          </p>
          <a href="">


            Bergen STEM
            
            <span>&rsaquo;</span>
          </a>
          {/* <br /> */}
          <a href="">


            Github Repo
            
            <span>&rsaquo;</span>
          </a>
        </div>
      </div>

      <div className="card">
        <div style={{ backgroundImage: 'url(https://i.imgur.com/a7pKgWc.jpg)' }} className="card__img">
        </div>
        <div>
          <h3>Personal Blog</h3>
          <p>
            <em>


              Responsive Web Design (no CSS libraries),
                        Semantic HTML, ARIA, React static-site, styled-components
              
              
            </em>
          </p>
          <p>
            GatsbyJS



build hosted on

         gitpages.


          </p>
          <p>


            Features a

            markdown blog
            {' '}


            that
                        supports
                        YAML front matter.
            
            
          </p>
          <a href="">


            GatbsyJS Blog
            
            <span>&rsaquo;</span>
          </a>
          {/* <br /> */}
          <a href="">


            Github Repo
            
            <span>&rsaquo;</span>
          </a>
        </div>
      </div>
      <div className="card">
        <div style={{ backgroundImage: 'url(https://i.imgur.com/7SIlmAJ.jpg)' }} className="card__img">
          {/* <img src="https://i.imgur.com/a7pKgWc.jpg" alt="flask frame" /> */}
        </div>
        <div>
          <h3>New York Times App</h3>
          <p>
            <em>


              React, Redux, Responsive Web Design (no CSS libraries),
                        Semantic HTML, ARIA, React static-site, styled-components
              
              
            </em>
          </p>
          <p>
            React



and

          Redux
application Features a markdown blog


that
            supports

            YAML front matter


.


          </p>
          <a href="">


            NYT App
            
            <span>&rsaquo;</span>
          </a>
          {/* <br /> */}
          <a href="">


            Github Repo
            
            <span>&rsaquo;</span>
          </a>
        </div>
      </div>


    </section>
  </div>
);

export default Projects;
