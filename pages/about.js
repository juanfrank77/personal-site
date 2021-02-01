import React from "react";
import Hero4 from "../components/Hero4";
import AboutContainer from "../components/AboutContainer";

function AboutPage() {
  return (
    <>
      <Hero4
        color="light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="About me"
        subtitle="Brief summary of everything 'me' related."
        />
      <AboutContainer 
        color="grey-light"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        className="pt-1"
      />
    </>
  );
}

export default AboutPage;
