import Button from "../components/Button";
import falling from "../../videos/falling.mp4";

const About = () => {
  return (
    <section className="w-full h-auto relative px-5 pb-20 bg-white" id="about">
      <video src={falling} playsInline loop muted autoPlay preload="auto" className="w-full h-full scale-x-[1.2] object-cover fixed top-0 left-0" />
 
      <div className="max-w-screen-lg text-center mx-auto w-full flex items-center relative z-10 flex-col">
        <div className="w-full border p-7 bg-white/50 rounded-lg backdrop-blur-md">
          <h1 className="font-primary text-primary text-6xl">
            ABOUT <span className="text-grn stroked">CRAS</span>
            <span className="text-rd stroked">H</span>
          </h1>
          <p className="font-secondary mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className=" flex gap-2 mt-4 mx-auto w-fit">
            <Button>Buy Token</Button>
            <Button variant="outline">More details</Button>
          </div>
        </div>
        <div className="w-full flex items-center rotate-[135deg]">
          <dotlottie-player
            src="https://lottie.host/1694ad77-b056-46ad-a33e-f74570f939b2/2VRXhAc6SB.lottie"
            autoplay
            loop
          />
        </div>
      </div>
    </section>
  );
};

export default About;
