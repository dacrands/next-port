import Link from 'next/link';
import React, { Component } from 'react';

const config = {
  threshold: [0, 0.25, 0.75, 1]
};

class Nav extends Component {

  componentDidMount() {
    const links = document.querySelectorAll('.navbar__list a')
    const views = document.querySelectorAll('.view')

    if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    // load polyfill now    
      let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {            
            if (entry.intersectionRatio > 0.25) {
              links.forEach(link => {           
                if (link.dataset.link == entry.target.id) {                    
                    link.classList.add('active');                  
                } else {
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
    } else {
      window.addEventListener('load', () => {
        views.forEach((view) => {          
          if (view.getBoundingClientRect().top < 60) {
            links.forEach(link => {           
              if (link.dataset.link == view.id) {                    
                link.classList.add('active');                  
              } else {
                link.classList.remove('active');
              }             
            })
          } else {
            view.classList.remove('active');
          }
        });
      });
      window.addEventListener('scroll', () => {
        views.forEach((view) => {          
          if (view.getBoundingClientRect().top < 200) {
            links.forEach(link => {           
              if (link.dataset.link == view.id) {                    
                link.classList.add('active');                  
              } else {
                link.classList.remove('active');
              }             
            })
          } else {
            view.classList.remove('active');
          }
        });
      });
    }
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
