import React from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

function ContactSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="has-text-centered"
        />
        <div className="box">
          <p className="is-size-5 mb-3">
            Whether it's about talking tech stuff, collaborating on projects or just saying hi, <a className="has-text-link" href="mailto:hello@juanfgonzalez.com">email</a> or <a className="has-text-link" href="https://twitter.com/juanfrank77">twitter</a> are the best ways.
        </p>
          <p className="is-size-5 mb-3">
            I'm everywhere online as @juanfrank77. But in case you don't want to try out every site to see whether I have an account (or not).
        </p>
          <p className="is-size-5">I'll list the most relevant ones for your convenience 😛</p>
          <div className="content">
            <ul>
              <li>Twitter: https://twitter.com/juanfrank77</li>
              <li>Linkedin: https://linkedin.com/in/juanfrank77</li>
              <li>Github: https://github.com/juanfrank77</li>
              <li>DEV: https://dev.to/juanfrank77</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;