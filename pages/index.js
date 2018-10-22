import Nav from '../components/Nav';
import Projects from '../components/Projects';
import '../static/main.scss'

export default () =>
  <div>
    <Nav />
    <div className="landing__container">
    <div className="landing__skew"></div>
    <div className="landing">
      <div>
        <h1>David Crandall</h1>
        <h2 className="font--light">Full-stack Web Developer</h2>
        <p>I build websites that make sense. From email-authentication to
          responsive web-design, I can do it all.
        </p>
        <p>As a front-end develoer, I focus on accessibility, performance, and beauty, in that order.</p>
        <p>As a back-end develoer, I am all about security.</p>
        <div>
          <a href="#about">
            Learn more &rsaquo;
          </a>
        </div>
      </div>
    </div>    
    </div>
    <div className="container">
      <Projects />
    </div>
    
  </div>