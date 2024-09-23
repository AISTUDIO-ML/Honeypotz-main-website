import { banner_mask } from "assets/images/images";
import { ThemeButton } from "components/components";
import "./bottomBanner.css";

const BottomBanner: React.FC = () => {
  const backgroundImage: React.CSSProperties = {
    backgroundImage: `url(${banner_mask})`,
  };
  return (
    <div className="myContainer !py-20">
      <div
        style={backgroundImage}
        className="flex justify-center flex-col md:px-10 p-5 background shadow-xl lg:shadow-none"
      >
        <p className="font-semibold lexend text-themeBlack md:text-4xl text-2xl">
          Honeypotz Confidential AI
        </p>
        <p className="text-sm leading-7 mt-7 text-themeBlack md:w-[450px] regular">
          Book a free demo with Honeypotz Confidential AI to evaluate and
          enhance your skills. Our secure platform ensures the confidentiality
          of your performance data, providing valuable insights to empower your
          professional growth.
        </p>
        <div className="mt-7">
          <ThemeButton bgOrange content={"Book a Demo"} />
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
