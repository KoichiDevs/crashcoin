import { FaCheck } from "react-icons/fa";
import { RiRocket2Fill } from "react-icons/ri";
const Roadmap = () => {
  const roadmapData = [
    {
      values: [
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
      ],
    },
    {
      values: [
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
      ],
    },
    {
      values: [
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
        "Lorem Ipsum is a dummy text.",
      ],
    },
  ];

  return (
    <section
      className="w-full min-h-screen px-5 py-20 relative font-primary flex items-center pt-20 text-white"
      id="roadmap"
    >
      <img
        src="/roadmap.webp"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="max-w-screen-xl w-full mx-auto relative z-10">
        <div className="text-center">
          <h1 className="font-primary text-primary uppercase text-2xl md:text-7xl font-bold stroked">
            roadmap
          </h1>
        </div>

        <div className="flex gap-10 mt-16 flex-wrap items-center justify-center">
          {roadmapData.map((item, i) => (
            <div
              className="bg-black/50 rounded-2xl backdrop-blur-md p-8 pb-20 w-96 min-h-[25rem] border-2 shadow-lg border-primary"
              key={i}
            >
              <RiRocket2Fill className="mx-auto text-3xl rotate-180" />
 
              <h1 className="text-3xl font-bold text-white stroked text-center py-5">
                Phase {i + 1}
              </h1>

              <ul className="text-sm space-y-4 text-center">
                {item.values.map((items, i) => (
                  <li className="font-secondary" key={i}>
                    <FaCheck className="inline text-primary mr-2" /> {items}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
