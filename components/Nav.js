import Link from 'next/link'


const Nav = () => (
    <nav className="navbar">
    <ul className="navbar__list">
      <Link href="/"><a>Home</a></Link>
      <Link href="#projects"><a>Portfolio</a></Link>
      <Link href="#skills"><a>Skills</a></Link>      
      <Link href="#contact"><a>Contact</a></Link>                
      <a href="https://dacrands.github.io/" target="_blank">Blog</a>             
    </ul>
  </nav>  
)

export default Nav;
