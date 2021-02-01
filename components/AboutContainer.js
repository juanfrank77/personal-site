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
              The most relevant part of the story is the last 8 years. In general, it took me a long while to get a system's engineering degree but I didn't got a job in tech after it so I spent a couple of years working in other industries.
            </p>
            <p className="block">
              Then I went from a backend and sysadmin background to a role as frontend, UI-focused developer. The one I enjoy the most from other roles.
            </p>
            <p className="block">
              My time outside of tech awoke my curiosity to other areas and fields of knowledge and I've spent the majority of my free time reading and learning about them. Learning has become a core part of what I am because it has allowed me to do so many things that I would never thought to be possible.
            </p>
            <p className="block">
              In that journey, I've found that the most effective way of learing something and truly internallize the knowledge, is to share with others in a clear and practical way. Most of what I've done in the last year has been oriented to that idea.   
            </p>
            <p className="block">
              During typical working hours, I'm at Globant working as Web UI Developer. Outside of those hours, I write stuff mostly for my blog and have contributed to other publications as well. 
            </p>
            <p className="block">
              I also participate in initiatives to help others get into tech and improve their situation. I participate in several groups and communities (technical and otherwise). I regularly do strength training and cycling. 
            </p>
            <p className="block">
              I read books, articles and pretty much anything I find on the internet that I deemed interesting plus, I also have several online courses that I'm slowly catching up with.
            </p>
            <h3>What I'm doing <a href="https://nownownow.com/about">now</a></h3>
            <p className="block">
               Currently working as a fronted developer for Disney media and entertainment brands. 
            </p>
            <p className="block">
              Contributing to the OpportunIT and Stackademic initiatives.
            </p>
            <p className="block">
               Starting to read my fourth book of the year.
            </p>
            <p className="block">
               Building a site to post my learning notes.
            </p>
            <p className="block">
               Doing very good with my High Intensity Continous Training (HICT) workouts.
            </p>
            <p className="block">
               Building a backlog of things to write about.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default AboutContainer;