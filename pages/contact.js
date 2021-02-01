import React from "react";
import ContactSection from "../components/ContactSection";

function ContactPage() {
  return (
    <>
      <ContactSection
        color="secondary"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Contact"
        subtitle="Here's where you can find me"
        buttonText="Send message"
        buttonColor="primary"
        buttonInverted={false}
        showNameField={true}
      />
    </>
  );
}

export default ContactPage;
