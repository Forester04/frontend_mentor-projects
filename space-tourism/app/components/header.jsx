import { Link, NavLink } from "react-router";
import logo from "/assets/shared/logo.svg";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="space tourism logo" />
        </Link>
        <nav>
          <NavLink to="/">
            <span>00</span>Home
          </NavLink>
          <NavLink to="destinations">
            <span>01</span>Destination
          </NavLink>
          <NavLink to="crew">
            <span>02</span>Crew
          </NavLink>
          <NavLink to="technology">
            <span>03</span>Technology
          </NavLink>
        </nav>
      </header>
    </>
  );
}
