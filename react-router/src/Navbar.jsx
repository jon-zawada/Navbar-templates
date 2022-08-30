import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-titles">Site Name</Link>
      <ul>
        <CustomLink to='/pricing'>Pricing</CustomLink>
        <CustomLink to='/about'>About</CustomLink>  
      </ul>
    </nav>
  )
};

function CustomLink( {to, children, ...props} ) {
  const resovlvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resovlvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

export default Navbar;