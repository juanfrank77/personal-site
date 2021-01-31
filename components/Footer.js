import React from "react";
import Section from "../components/Section";
import Link from "next/link";
import "../components/Footer.scss";

function Footer(props) {
  return (
    <Section
      color={props.copyright}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className="footer"
    >
      <div className="FooterComponent__container container">
        <div className="links">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="https://blog.juanfgonzalez.com">
            <a>Blog</a>
          </Link>
          <Link href="https://notes.juanfgonzalez.com">
            <a className="is-hidden">Notes</a>
          </Link>
          <Link href="/projects">
            <a className="is-hidden">Projects</a>
          </Link>
          <Link href="/talks">
            <a className="is-hidden">Talks</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className="copyright left">{props.copyright}</div>
        <div className="social right">
          <a href="https://twitter.com/juanfrank77" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-twitter" />
            </span>
          </a>
          <a href="https://linkedin.com/in/juanfrank77" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-linkedin-in" />
            </span>
          </a>
          <a href="https://github.com/juanfrank77" target="_blank" rel="noopener noreferrer">
            <span className="icon">
              <i className="fab fa-github" />
            </span>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default Footer;