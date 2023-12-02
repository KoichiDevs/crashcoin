import "@dotlottie/player-component";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "../utils";

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn("w-full h-full fixed z-20 opacity-100 transition-all ease-in-out duration-300", {
        "opacity-0 pointer-events-none": scrollPosition > 400,
      })}
    >
      <img
        src="/hero.webp"
        alt="Hero"
        className="absolute top-0 left-0 object-cover object-bottom h-full w-full"
      />

      <motion.div
        animate={{ rotate: [2, -3, 3, -2, 0] }}
        className="w-full min-h-screen relative px-5 py-10"
      >

        <img
          src="/hero.webp"
          alt="Hero"
          className="absolute top-0 left-0 object-cover object-bottom h-full w-full"
        />
        <div className="mx-auto absolute bottom-5 left-0 right-0 w-[20rem] sm:w-[35rem]">
          <dotlottie-player
            src="https://lottie.host/9b767c27-2544-45d8-ab34-a2e58c13bf9b/pnLJJaQ0mY.lottie"
            autoplay
            loop
          />

          <motion.div initial={{ y: -500 }} animate={{ y: 0 }} className="">
            <img
              src="/logo.webp"
              alt="Crash No Rocket"
              className="w-full absolute bottom-0"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
