import { github, slack, box } from "assets/images/images";
import { ThemeButton } from "components/components";

const community = [
  {
    title: "Attend an online meetup",
    description:
      "Join industry experts and peers in a live, interactive session to discuss the latest trends and solutions.",
  },
  {
    title: "Download the ebook",
    description:
      "Get valuable insights and strategies with our comprehensive guide on enhancing security and performance.",
  },
  {
    title: "Read the docs",
    description:
      "Explore in-depth documentation to understand the full capabilities and features of our platform.",
  },
];

const Community: React.FC = () => {
  return (
    <div id="confidential_computing" className="myContainer">
      <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
        <p>Community</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-6 gap-3 md:gap-0">
        <p className="text-primary text-3xl semibold">
          Join the <span className="text-secondary">Community</span>
        </p>
        <div className="flex items-center gap-3">
          <p className="semibold mr-4">Connect with us on github and slack</p>
          <img src={github} alt="github" width={38} />
          <img src={slack} alt="slack" width={38} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-7 gap-3 md:gap-0">
        <p className="text-black/70">
          Become a part of an interactive community that helps companies <br />
          transistion to MLOps and provides continous growth.
        </p>
        <ThemeButton content={"Connect on Forum"} />
      </div>
      <div className="flex flex-col gap-5 mt-7">
        {community.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-7"
            >
              <div className="bg-secondary text-white h-11 w-12 rounded-full flex justify-center items-center text-xl">
                <p className="lexend font-semibold">{index + 1}</p>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-5 border border-themeGray-300 w-full px-5 py-3 rounded-lg md:rounded-full">
                <img src={box} alt="box" width={50} />
                <div>
                  <p className="bold text-2xl">{item.title}</p>
                  <p className="text-themeGray-500 regular">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
