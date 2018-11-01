import Link from 'next/link';
import React, { Component } from 'react';

const config = {
  threshold: [0, 0.25, 0.75, 1]
};

class Nav extends Component {

  componentDidMount() {
    const links = document.querySelectorAll('.navbar__list a')
    const views = document.querySelectorAll('.view')
    console.log(links);
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          console.log(entry.target.clientHeight);
          if (entry.intersectionRatio > 0.25) {
            links.forEach(link => {        
              console.log(entry.target.id)    
              if (link.dataset.link == entry.target.id) {
                  // link.style.color = "red";
                  link.classList.add('active');                  
              } else {
                // link.style.color = "";
                link.classList.remove('active');
              }             
            })
            entry.target.unobserve;
          }
        
      });
    }, config);

    views.forEach(view => {
      observer.observe(view)
    });
  }

  render() {
    return (
      <nav className="navbar">
        <ul className="navbar__list">
          <Link href="/"><a data-link="home">Home</a></Link>
          <Link href="#projects"><a data-link="projects">Portfolio</a></Link>
          <Link href="#skills"><a data-link="skills">Skills</a></Link>
          <Link href="#contact"><a data-link="contact">Contact</a></Link>
          <a href="https://dacrands.github.io/" target="_blank" rel="noopener noreferrer">Blog</a>
        </ul>
      </nav>
    );
  }
}

// const Nav = () => (
  
// );

export default Nav;
