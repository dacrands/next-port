import Link from 'next/link'
import Head from 'next/head'

const Nav = () => (
  <div>
    <Head>
      <title>David Crandall</title>
      <meta name="viewport" content="width=device-width" />
    </Head>
    <nav className="navbar">
    <ul className="navbar__list">
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/projects"><a>Projects</a></Link>
      <Link href="/contact"><a>Contact</a></Link>                
    </ul>
  </nav>
  </div>
  
)

export default Nav;
