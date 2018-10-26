import Nav from '../components/Nav';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import '../static/styles/main.scss';
import Head from 'next/head';

export default () =>
  <div>
    <Head>
      <title>David Crandall</title>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Nav />
    <div className="landing__container">
    <div className="landing__skew"></div>
    <div className="landing">
      <div>
        <h1 className="primary">David Crandall</h1>
        <h2 className="font--light ">Full-stack Web Developer</h2>
        <p>I build websites that make sense. From email-authentication to
          responsive web-design, I can do it all.
        </p>
        <p>As a front-end develoer, I focus on accessibility, performance, and beauty, in that order.</p>
        <p>As a back-end develoer, I am all about security.</p>
        <br/>
        <div>
          <a href="#about">
            Learn more &rsaquo;
          </a>
          <a href="#about">
            Blog &rsaquo;
          </a>
        </div>
      </div>
    </div>    
    </div>
    <div className="container">
      <Projects />
    </div>
    {/* <div className="container"> */}
      <About />
    {/* </div> */}
    <div>
    <Contact />
    </div>

    
  </div>