import "./App.css";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Highlight from "./components/Highlights.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Highlight />
        <Footer />
      </div>
    </>
  );
}

export default App;
