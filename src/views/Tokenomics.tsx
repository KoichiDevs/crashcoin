import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Tokenomics = () => {
  const tokenData = [
    {
      title: "1Million",
      desc: "Total Supply",
    },

    {
      title: "5",
      desc: "Buy Tax",
    },
    {
      title: "5",
      desc: "Sell Tax",
    },
  ];

  return (
    <InView threshold={0.9} triggerOnce={false}>
      {({ ref, inView }) => (
        <section
          className="w-full px-5 py-20 min-h-screen bg-white flex items-center font-secondary relative"
          ref={ref}
          id="tokenomics"
        >
          <img
            src="/background.png"
            alt="background"
            className="w-full h-full object-cover absolute top-0 left-0 invert opacity-20"
          />
          <div className="max-w-screen-xl mx-auto w-full flex items-center gap-10 relative md:flex-row flex-col">
            <div className="w-full text-center lg:text-left">
              <h1 className="font-primary text-primary uppercase text-2xl md:text-7xl font-bold">
                tokenomics
              </h1>
              <p className="mt-4 mx-auto md:mx-0">
              Every penny from taxes will be used directly in buybacks.
              </p>

              <div className="flex gap-10 mt-10 flex-wrap justify-center md:justify-normal">
                {tokenData.map((items, i) => (
                  <motion.div initial={{opacity: 0, y: 100}} animate={inView && {opacity: 1, y: 0}} transition={{duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: i * 0.07 }} className="" key={items.desc}>
                    <h1 className="text-3xl font-bold font-primary text-primary">
                      {items.title}
                    </h1>
                    <p className="font-secondary">{items.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="w-full text-5xl flex items-center justify-center">
              <img
                src="/about.webp"
                alt="Tokenomics"
                className="bg-white"
              />
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default Tokenomics;