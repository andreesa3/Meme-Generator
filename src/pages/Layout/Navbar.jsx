import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to='/' className='logo'>Meme Generator</NavLink>
        <img className='icon' src='https://static.thenounproject.com/png/105261-200.png' alt="icon" />
      </nav>

      <Outlet />
    </div>
  );
}
