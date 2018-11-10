import Link from 'next/link';
import React, { Component } from 'react';

const config = {
  threshold: [0, 0.25, 0.75, 1]
};

class Nav extends Component {

  componentDidMount() {
    let linksObj = {}
    const links = document.querySelectorAll('.navbar__list a')    
    const views = document.querySelectorAll('.view')
    const navbarMenu = document.querySelectorAll('.navbar__menu')
    const navbarList = document.querySelectorAll('.navbar__list')

    console.log(navbarList[0].clas)
    
    navbarMenu[0].addEventListener('click', () => {
      navbarList[0].classList.toggle('show');
    });

    links.forEach(link => {    
      linksObj[link.dataset.link] = link;      
    });

    

    // if ('IntersectionObserver' in window &&
    // 'IntersectionObserverEntry' in window &&
    // 'intersectionRatio' in window.IntersectionObserverEntry.prototype) { 
    //   let observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {            
    //         if (entry.intersectionRatio > 0.25) {
    //           links.forEach(link => {           
    //             if (link.dataset.link == entry.target.id) {                    
    //                 link.classList.add('active');                  
    //             } else {
    //               link.classList.remove('active');
    //             }             
    //           })
    //           entry.target.unobserve;
    //         }          
    //     });
    //   }, config);

    //   views.forEach(view => {
    //     observer.observe(view)
    //   });
    // } else {
      window.addEventListener('load', () => {
        views.forEach((view) => {                    
          if (window.scrollY < 1 && view.getBoundingClientRect().top < 60) {
            linksObj[view.id].classList.add('active')
            return;
          } else {
            if (view.getBoundingClientRect().top < 200) {
              links.forEach(link => {           
                if (link.dataset.link == view.id) {                    
                  link.classList.add('active');                  
                } else {
                  link.classList.remove('active');
                }             
              })
            }
          }
        });
      });
      
      window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
          links.forEach(link => {   
                 
            if (link.dataset.link === "contact") {                                     
              link.classList.add('active');                  
            } else {
              link.classList.remove('active');
            }             
          })
          return;
        }
        views.forEach((view) => {          
          if (view.getBoundingClientRect().top < 200) {
            links.forEach(link => {           
              if (link.dataset.link == view.id) {                    
                link.classList.add('active');                  
              } else {
                link.classList.remove('active');
              }             
            })
          }
        });
      });
    // }
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
        <button className="navbar__menu">
          <img src="../static/images/menu.svg" alt="nav menu" />
        </button>
      </nav>
    );
  }
}

// const Nav = () => (
  
// );

export default Nav;
