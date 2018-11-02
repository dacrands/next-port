const Landing = () => (
  <div className="landing__container">
    <div className="landing__skew" />
    <div className="landing view" id="home">
      <div>
        <h1 className="primary">David Crandall</h1>
        <h2 className="font--light ">Full-stack Web Developer</h2>
        <p>
As a front-end developer, I focus on accessibility, performance, and responsive-design.
          As a back-end developer, I am all about security.
        </p>

      
      </div>
          <button className="mouse">
            <div className="mouse__container">
              <div className="line" />
              <div className="wheel" />
            </div>                    
          {/* <a href="#projects">
            Portfolio &rsaquo;
          </a>
          <a href="https://dacrands.github.io">
            Blog &rsaquo;
          </a> */}
        </button>
        <p>Scroll</p>
    </div>
  </div>
);

export default Landing;
