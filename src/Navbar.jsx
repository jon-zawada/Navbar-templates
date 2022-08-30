const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/" className="site-titles">Site Name</a>
      <ul>
        <CustomLink href='/pricing'>Pricing</CustomLink>
        <CustomLink href='/about'>About</CustomLink>
        
      </ul>
    </nav>
  )
};

function CustomLink( {href, children, ...props} ) {
  const path = window.location.pathname;
  const active = path === href ? "active" : "";
  return (
    <li className={active}>
      <a href={href}>{children}</a>
    </li>
  )
}

export default Navbar;