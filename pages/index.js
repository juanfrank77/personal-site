import React from "react";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import CtaSection from "../components/CtaSection";

function HomePage() {
  return (
    <div className="">
      <Hero
        color="white"
        size="large"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Welcome to my site"
        subtitle="Here you can find about my endeavors."
      />
      <Hero2
        color="danger"
        size="small"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Quick Intro"
        subtitle="Hello there, my name is Juan. I'm a systems engineer working as a Web UI developer at Globant. I'm constantly learning new things and applying them. Now I'm sharing what I've found to help others and understand things better myself."
        buttonText="See more"
        buttonColor="primary"
        buttonInverted={false}
        buttonPath="/about"
      />
      <Hero3
        color="light"
        size="small"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="My blog"
        subtitle=" I write mostly about technology related to web development and insights from applied science to upgrade our mental software."
        buttonText="See it here"
        buttonColor="danger"
        buttonInverted={false}
        buttonPath="https://blog.juanfgonzalez.com"
      />
      <CtaSection
        color="dark"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Wanna talk?"
        buttonText="Get in contact"
        buttonColor="white"
        buttonInverted={false}
        buttonPath="/contact"
      />
    </div>
  )
}

export default HomePage;
