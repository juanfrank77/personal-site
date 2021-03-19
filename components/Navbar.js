import React, { useState } from "react";
import Link from "next/link";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={"navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")}
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link href="/">
              <a>
                <img className="image" src="/logo.png" alt="Logo" width="110" height="50"/>
              </a>
            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="burger menu"
            aria-expanded="false"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">
            <Link href="/about">
              <a className="navbar-item is-tab">About</a>
            </Link>
            <Link href="https://blog.juanfgonzalez.com">
              <a className="navbar-item is-tab">Blog</a>
            </Link>
            <Link href="https://notes.juanfgonzalez.com">
              <a className="navbar-item is-tab is-hidden">Notes</a>
            </Link>
            <Link href="/projects">
              <a className="navbar-item is-tab is-hidden">Projects</a>
            </Link>
            <Link href="/talks">
              <a className="navbar-item is-tab is-hidden">Talks</a>
            </Link>
            <Link href="/contact">
              <a className="navbar-item is-tab">Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
