import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
