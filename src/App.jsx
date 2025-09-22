import "./App.css";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <About />
        <Experience />
      </div>
    </>
  );
}

export default App;
