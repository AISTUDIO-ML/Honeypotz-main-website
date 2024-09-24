import { cyber_security, gold, security_awards } from "assets/images/images";

const awards = [
  {
    image: cyber_security,
    title: "Best Cloud Security",
  },
  {
    image: security_awards,
    title: "Best Cybersecurity Solution",
  },
  {
    image: gold,
    title: "Best Cloud Infrastructure",
  },
];

const Awards: React.FC = () => {
  return (
    <div id="usecases" className="myContainer !py-16">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Awards</p>
        </div>
        <p className="text-primary text-3xl md:text-5xl semibold mt-5 text-center">
          Our Accomplishments
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-10">
        {awards.map((award, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between border border-themeOrange/20 rounded-3xl h-56 py-4"
            >
              <img src={award.image} alt="img" />
              <p className="text-lg semibold">{award.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Awards;
