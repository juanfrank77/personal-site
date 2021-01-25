import React, { useState } from "react";
import Link from "next/link";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={"navbar" +
        (props.color ? ` is-${props.color}` : "") +
        (props.spaced ? " is-spaced" : "")}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item" >
              <img className="image" src="/logo.png" alt="Site Logo"/>
            </a>
          </Link>
          <div
            className={"navbar-burger burger" +
              (menuOpen ? " is-active" : "")}
              onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
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
