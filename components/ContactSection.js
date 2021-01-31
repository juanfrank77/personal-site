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
          size={3}
          spaced={true}
          className="has-text-centered"
        />
        <div className="content">
          <p>Whether is for talking about projects, getting help or just saying hi</p>
          <p>This is how you can reach out to me</p>
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;