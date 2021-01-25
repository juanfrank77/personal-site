import React from "react";
import "../components/SectionHeader.module.scss";

function SectionHeader(props) {
  if (!props.title && !props.subtitle) {
    return null;
  }

  return (
    <header
      className={"SectionHeader pb-3" +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1
          className={"title has-text-weight-bold" +
            (props.size ? ` is-${props.size}` : "") +
            (props.size === 1 ? " is-size-2-mobile" : "") +
            (props.spaced ? " is-spaced" : "")
          }
        >
          {props.title}
        </h1>
      )}

      {props.subtitle && (
        <p
          className={"subtitle is-size-5" +
            (props.size > 4 ? " is-6" : "")
          }
        >
          {props.subtitle}
        </p>
      )}
    </header>
  );
}

export default SectionHeader;