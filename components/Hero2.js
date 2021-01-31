import React from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";

function Hero2(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered is-mobile">
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
              spaced={true}
            />
            <div className="buttons is-centered">
              <Link href={props.buttonPath}>
                <a
                  className={"button is-medium" +
                    (props.buttonColor ? ` is-${props.buttonColor}` : "") +
                    (props.buttonInverted ? " is-inverted" : "")}
                >
                  {props.buttonText}
                </a>
              </Link>
            </div>
          </div>
          <div className="column is-1" />
          <div className="column is-hidden-mobile">
            <figure className="image">
              <img src={props.image} alt="about me" />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero2;