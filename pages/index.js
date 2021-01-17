import React from "react";
import Head from 'next/head'
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Hero3 from "../components/Hero3";
import CtaSection from "../components/CtaSection";

function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>Juan F Gonzalez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Juan F Gonzalez"
        subtitle="Developer. Learner. Writer."
      />
      <Hero2
        color="danger"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Quick Intro"
        subtitle="Hi, my name is Juan. I'm a systems engineer working as a Web UI developer at Globant. I'm constantly learning new things and applying them. Now I'm sharing what I've found to help others and understand things better."
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="See more"
        buttonColor="primary"
        buttonInverted={false}
        buttonPath="/about"
      />
      <Hero3
        color="light"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="My blog"
        subtitle=" I write mainly about tech related to frontend web development and science insights to upgrade our mental software."
        image="https://uploads.divjoy.com/undraw-beer_celebration_cefj.svg"
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
