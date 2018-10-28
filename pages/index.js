import Nav from '../components/Nav';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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
          responsive web-design, I love all aspects of building a website.
        </p>
        <p>As a front-end developer, I focus on accessibility, performance, and beauty.
          As a back-end developer, I am all about security.</p>
        <br/>
        <div>
          <a href="#projects">
            Portfolio &rsaquo;
          </a>
          <a href="https://dacrands.github.io">
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

  <Footer />
    
  </div>