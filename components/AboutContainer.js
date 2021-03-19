import React from "react";
import Section from "../components/Section";

function AboutContainer(props) {
  return (
    <Section
      color={props.color}
      size={props.size}
      backgroundImage={props.backgroundImage}
      backgroundImageOpacity={props.backgroundImageOpacity}
      className={props.className}
    >
      <div className="container">
        <div className="box">
          <div className="content">
            <h3>In the beginning...</h3>
            <p className="block">
              Nahhh just kidding I'm not going to go that far. 
            </p>
            <p className="block">
              The most relevant part of the story is the last 8 years. In general, it took me a long while to get a system's engineering degree and I've had jobs in different industries to raise enough money to finish it.
            </p>
            <p className="block">
              Then I went from a backend and sysadmin background to a role as frontend, UI-focused developer. The one I enjoy the most from other roles.
            </p>
            <p className="block">
              My time outside of tech awoke my curiosity to other areas and fields of knowledge. I've spent the majority of my free time reading and learning about those. Effective learning has become a core part of what I am because it has allowed me to do so many things that I would never thought possible.
            </p>
            <p className="block">
              In that journey, I've found that the most effective way of learning something and truly internalize the knowledge is to share it with others. Most of what I've done in the past year has been oriented to that concept.
            </p>
            <p className="block">
              During typical working hours, I work as a Frontend Web Developer.  Outside of those hours, I write stuff mostly for my blog. I also had the opportunity to contribute to other publications.
            </p>
            <p className="block">
              I have also participated in initiatives to help others get into tech so they can improve their situation. I participated in several groups and communities (technical and otherwise). 
            </p>
            <p className="block">
              One fact that's rarely known is that I've been doing strength training over the last 4 years or so but I only geeked out on its science until the last 1.5 years. 
            </p>
            <p className="block">
              Finally, I read books, articles, and pretty much anything I find on the internet that I deemed interesting. Like some others, I also have a bunch of online courses that I'm slowly catching up with.
            </p>
            <h3>What I'm doing <a href="https://nownownow.com/about">now</a></h3>
            <p className="block">
              Finished working as a fronted developer for Disney media and entertainment brands. Now I'm undertaking one of my most ambitious projects to date.
            </p>
            <p className="block">
              In the middle of my sixth book of the year.
            </p>
            <p className="block">
               Figuring a better way to build that "learning notes" site.
            </p>
            <p className="block">
               Changing up the workout schedule and trying to stay consistent with it.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutContainer;
