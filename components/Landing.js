const Landing = () => (
  <div className="landing__container">
    <div className="landing__skew"></div>
    <div className="landing">
      <div>
        <h1 className="primary">David Crandall</h1>
        <h2 className="font--light ">Full-stack Web Developer</h2>
        <p>I build websites that make sense. From email-authentication to
          responsive web-design, I love all aspects of building a website.
        </p>
        <p>As a front-end developer, I focus on accessibility, performance, and beauty.
          As a back-end developer, I am all about security.</p>
        <br />
        <div>
          <div class="mouse">
            <div class="mouse__container">
              <div class="line"></div>
              <div class="wheel">
              </div>
            </div>
            <p>Scroll</p>
          </div>
          {/* <a href="#projects">
            Portfolio &rsaquo;
          </a>
          <a href="https://dacrands.github.io">
            Blog &rsaquo;
          </a> */}
        </div>
      </div>
    </div>
  </div>
)

export default Landing;