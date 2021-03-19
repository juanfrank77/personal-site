import React from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";

function Hero3(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
    >
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-hidden-mobile">
            <figure className="image">
              <img src="/blog-img.png" alt="Blog homepage" width={500} height={500} />
            </figure>
          </div>
          <div className="column is-1" />
          <div className="column has-text-centered-touch is-5-desktop">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
              spaced={true}
            />
            <div className="buttons is-centered">
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
      </div>
    </Section>
  );
}

export default Hero3;
