import React, { useState } from "react";
import GlobalStyles from "./globalStyles";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const [contact, setContact] = useState({ show: false });
  const showContact = () => {
    setContact((state) => {
      return {
        ...state,
        show: !state.show,
      };
    });
  };

  return (
    <>
      <GlobalStyles />
      {contact.show && <Contact show={showContact}/>}
      <Nav showContact={showContact} />
      <Header />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
