import React from "react";
import Hero4 from "../components/Hero4";
import NowContainer from "../components/NowContainer";

function AboutPage() {
  return (
    <>
      <Hero4
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="About me"
        subtitle="Brief summary of who I am  and what I do."
      />
      <NowContainer />
    </>
  );
}

export default AboutPage;
