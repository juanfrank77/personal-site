import React from "react";
import '../styles/globals.scss'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar 
        color="white"
        spaced={true}
        // logo="../public/logo.png"
      />
      <Component {...pageProps} />
      <Footer 
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        copyright="© 2021 Juan F. Gonzalez"
      />
    </>
  );
}

export default MyApp
