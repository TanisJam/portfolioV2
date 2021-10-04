import GlobalStyles from "./globalStyles";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Header />
      <Work />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
