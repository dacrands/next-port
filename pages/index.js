import Nav from '../components/Nav';
import Landing from '../components/Landing';
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
    <Landing />
    <div className="container">
      <Projects />
    </div>    
    <About /> 
       
    <div>
    <Contact />
    </div>

  <Footer />
    
  </div>