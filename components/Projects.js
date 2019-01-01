const Projects = () => (
  <div className="projects view" id="projects">
    <header>
      <h1 className="primary">Portfolio</h1>
      <h2 className="font--light less--dark">Here is a taste of what I do</h2>
    </header>
    <section>
      <div className="card">
        <div style={{ backgroundImage: 'url(https://i.imgur.com/IT2RdUk.jpg)' }} className="card__img">          
        </div>

        <div>
          <h3>FlaskFrame</h3>
          <p>
            <em>


              Email Authentication,
                        JSON Web Tokens, Postgresql, Heroku Hosting,
                         JinJa2 Templates


            </em>
          </p>
          <p>Once users verify their email address, they will have access to the SmartFrame — an app where they will be able to do the following:</p>
          <ul>
            <li>Configure a location for weather information</li>
            <li>Easily add/remove stocks to appear in the scrolling stock-ticker</li>
            <li>Use Youtube embed codes to asynchronously set a background-video</li>
          </ul>
          <div className="card__links">
            <a href="https://flaskframe.herokuapp.com">


              FlaskFrame
              
<span>&rsaquo;</span>
            </a>            
            <a href="https://github.com/dacrands/flask-smart-monitor">


              Github Repo
              
<span>&rsaquo;</span>
            </a>
          </div>

        </div>
      </div>
      <div className="card">
        <div style={{ backgroundImage: 'url(https://i.imgur.com/imp5c6G.jpg)' }} className="card__img">          
        </div>
        <div>
          <h3>Bergen STEM</h3>
          <p>
            <em className="less--dark">


              React, Webpack, Fetch-API


            </em>
          </p>
          <p>
            React application designed and
            built for the STEM Department at Bergen Community College.
            Collaborated with backend-developer to 
            create a site that showcases student projects, STEM events, and scholarship opportunities.
          </p>
          <p>
            Achieves responsive web-design via custom CSS. Implements the fetch API to
            return student project information.             
          </p>
          <a href="https://www.bergenstem.com/">


            Bergen STEM

            <span>&rsaquo;</span>
          </a>

          <a href="https://github.com/dacrands/bergen-reactpack">


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
              GatbsyJS, styled-components, Markdown CMS
            </em>
          </p>
          <p>
            Personal blog where I chronicle my programming journey.
          </p>
          <p>
            GatsbyJS build hosted on gitpages.
            Features a markdown blog that supports
                          YAML front matter.
          </p>
          <a href="https://dacrands.github.io">


            GatbsyJS Blog

            <span>&rsaquo;</span>
          </a>
          {/* <br /> */}
          <a href="https://github.com/dacrands/gatsby-blog">


            Github Repo

            <span>&rsaquo;</span>
          </a>
        </div>
      </div>
      <div className="card">
        <div style={{ backgroundImage: 'url(https://i.imgur.com/7SIlmAJ.jpg)' }} className="card__img">          
        </div>
        <div>
          <h3>New York Times App</h3>
          <p>
            <em>


              React, Redux, Redux-Thunk


            </em>
          </p>
          <p>
          Set a year range between 1900 and 2018 and browse articles from another era, view the New
          York Times Best-Sellers, read the most-emailed stories.
          </p>
          <p>
            Created Flask application to proxy requests betwwen the the client and the NYT API.
          </p>
          <a href="https://times.dcrands.com/">


            NYT App

            <span>&rsaquo;</span>
          </a>
          {/* <br /> */}
          <a href="https://github.com/dacrands/times-app">


            Github Repo

            <span>&rsaquo;</span>
          </a>
        </div>
      </div>


    </section>
  </div>
);

export default Projects;
