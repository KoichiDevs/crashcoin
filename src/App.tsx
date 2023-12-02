import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./views/About";
import Hero from "./views/Hero";
import Roadmap from "./views/Roadmap";
import Tokenomics from "./views/Tokenomics";

const App = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <Nav />
      <Hero />
      <div className="w-full min-h-screen"></div>
      <div className="relative w-full h-fit">
        <About />
        <img
          src="/rocks.webp"
          alt="Rocks"
          className="absolute bottom-0 left-0 right-0 w-full translate-y-1/2 z-10"
        />
      </div>
      <div className="relative w-full h-fit">
        <Tokenomics />
        <img
          src="/rocks.webp"
          alt="Rocks"
          className="absolute bottom-0 left-0 right-0 w-full translate-y-[40%] z-10"
        />
      </div>
      <Roadmap />
      <Footer />
    </div>
  );
};

export default App;
