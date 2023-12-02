import { useState } from "react";
import Button from "./Button";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { cn } from "../utils";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const data = [
    {
      title: "Home",
      link: "home",
    },

    {
      title: "About",
      link: "about",
    },
    {
      title: "tokenomics",
      link: "tokenomics",
    },
    {
      title: "roadmap",
      link: "roadmap",
    },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="MobileNav"
            className={cn(
              "w-full h-screen fixed top-0 left-0 bg-white z-50 lg:hidden text-black p-5"
            )}
          >
            <IoMdClose
              className="absolute top-5 right-5 text-3xl"
              onClick={() => {
                setOpen(false);
              }}
            />

            <div className="">
              <img src="/logo.webp" alt="Logo" className="w-20" />

              <ul className=" font-secondary items-start capitalize mt-10 gap-y-5 flex flex-col gap-x-10">
                {data.map((item, i) => (
                  <a
                    href={`#${item.link}`}
                    className=""
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <li key={i}>{item.title}</li>
                  </a>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="w-full font-primary py-4 px-5">
        <div
          className="max-w-screen-xl mx-auto w-full flex justify-between items-center
      "
        >
          <div className="flex items-center gap-1 font-bold">
            <img src="/logo.webp" alt="Logo" className="w-20" />
          </div>
          <ul className=" font-secondary items-center capitalize gap-x-10 lg:flex hidden">
            {data.map((item, i) => (
              <a href={`#${item.link}`} className="">
                <li key={i}>{item.title}</li>
              </a>
            ))}
          </ul>
          <Button className="lg:block hidden">Buy Token</Button>

          <CgMenuRight
            className="lg:hidden block text-2xl"
            onClick={() => {
              setOpen(true);
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;