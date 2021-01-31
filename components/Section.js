import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import "../components/Section.scss";

function Section(props) {
  const {
    color,
    size,
    backgroundImage,
    backgroundImageOpacity,
    backgroundImageRepeat,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <section
      className={"SectionComponent hero section is-block is-relative" +
        (color ? ` is-${color}` : "") +
        (size ? ` is-${size}` : "") +
        (className ? ` ${className}` : "")
      }
      {...otherProps}
    >
      {backgroundImage && (
        <BackgroundImage
          image={backgroundImage}
          opacity={backgroundImageOpacity}
          repeat={backgroundImageRepeat}
        />
      )}

      {props.children}
    </section>
  );
}

export default Section;