import React from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";

function CtaSection(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container has-text-centered">
        <div className="columns is-vcentered is-variable is-8 is-multiline">
          <div className="column mb-3">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
              spaced={false}
            />
          </div>
          <div className="column">
            <Link href={props.buttonPath}>
              <a
                className={"button is-medium is-rounded" +
                  (props.buttonColor ? ` is-${props.buttonColor}` : "") +
                  (props.buttonInverted ? " is-inverted" : "")
                }
              >
                {props.buttonText}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;