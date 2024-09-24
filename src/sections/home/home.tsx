import { ai_studio, hero_image } from "assets/images/images";
import { ThemeButton } from "components/components";

const Home: React.FC = () => {
  return (
    <div className="myContainer !my-5">
      <p className="text-primary font-bold text-3xl leading-[45px] md:text-5xl text-center md:leading-[75px]">
        Revolutionizing <span className="text-secondary">Data Privacy</span> and{" "}
        <br />
        <span className="text-secondary">Securing AI/ML models</span>
      </p>
      <p className="text-center mt-5 font-medium text-lg md:text-[22px]">
        Maintaining brand reputation and trade secret exposure.
      </p>
      <div className="flex justify-center mt-6">
        <img src={ai_studio} alt="ai_studio" width={300} />
      </div>
      <p className="text-center mt-8 font-medium">
        AIStudio provides advanced AI-driven solutions to detect and neutralize
        cyber <br /> threats, ensuring your systems stay secure and your data
        remains intact.
      </p>
      <div className="flex justify-center gap-5 mt-7">
        <ThemeButton content={"Free Demo"} bgFill />
        <ThemeButton content={"Get Started"} />
      </div>
      <div className="flex justify-center -mt-7">
        <img src={hero_image} alt="hero" width={500} />
      </div>
    </div>
  );
};

export default Home;
