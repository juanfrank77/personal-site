import React from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Link from "next/link";

function ContentCardsSection(props) {
  const items = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Project 1",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate",
      stack: ["php", "react", "mariaDB"],
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Project 2",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach",
      stack: ["php", "react", "mariaDB"],
    },
    {
      image: "https://source.unsplash.com/HXJkqHexaak/800x600",
      title: "Project 3",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/road",
      stack: ["php", "react", "mariaDB"],
    },
    {
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Project 4",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/ballons",
      stack: ["php", "react", "mariaDB"],
    }
  ];

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
        <div className="columns is-centerd is-variable is-4 is-multiline">
          {items.map((item, index) => (
            <div
              className="column is-half-tablet is-one-quarter-desktop"
              key={index}
            >
              <Link href={item.url}>
                <a className="card is-flex is-flex-direction-column">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={item.image} alt={item.title} />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </div>
                    <footer className="card-footer">
                      <div className="content">
                        <h4 className="mt-3">Tools used:</h4>

                        {item.stack.map((tech, idx) => (
                          <div className="content is-marginless pl-1" key={idx}>
                            {tech}
                          </div>
                        ))}
                      </div>
                    </footer>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ContentCardsSection;
