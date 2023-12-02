import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const icons = [
    {
      icon: <FaTelegramPlane />,
      link: "",
    },
    {
      icon: <RiTwitterXFill />,
      link: "",
    },
    {
      icon: <MdEmail />,
      link: "mailto:contact@capo.com",
    },
  ];

  const navList = [
    {
      title: "about",
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
    <footer
      className="relative h-auto w-full overflow-hidden text-white py-5 bg-black"
      id="socials"
    >
      {/* <img src="/honeybg.webp" alt="bg" className="w-full h-full object-cover absolute top-0 left-0 object-top brightness-50" /> */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 text-center font-primary">
        <div className="relative z-10 mx-auto  w-full max-w-[1400px]">
          <div className="text-center">
            {/* <p className="">contact@theraid.dev</p> */}
            <ul className="hidden gap-x-8 font-primary text-base capitalize md:flex w-fit mx-auto">
              {navList.map((nav, index) => (
                <a key={index} href={`#${nav.link}`}>
                  <li className="py-2">{nav.title}</li>
                </a>
              ))}
            </ul>
            <h3 className="mx-auto mt-2 w-full text-center font-primary text-sm uppercase opacity-50">
              © CRASHCOIN 2023 | All rights reserved.
            </h3>
          </div>
        </div>

        <ul className="mx-auto mt-5 flex w-fit gap-x-5 text-2xl sm:gap-x-7 sm:text-4xl">
          <ul className="flex gap-x-5">
            {icons.map((social, index) => (
              <a href={social.link} className="" key={index}>
                <li className="rounded-full border p-3 text-base opacity-60 md:text-xl  hover:scale-[1.1] transition-all ease-in-out duration-300">
                  {social.icon}
                </li>
              </a>
            ))}
          </ul>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;