import React from "react";
import { NavLink } from "react-router-dom";
import cs from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <NavLink exact to="/" className={cs.link} activeClassName={cs.active}>
          Home
        </NavLink>
        <NavLink
          exact
          to="/movies"
          className={cs.link}
          activeClassName={cs.active}
        >
          Movies
        </NavLink>
        <hr />
      </header>
    </>
  );
};

export default Header;
