import { star } from "assets/icons/icons";
import { brain } from "assets/images/images";
import { ThemeButton } from "components/components";

const Home: React.FC = () => {
  return (
    <div className="myContainer grid lg:grid-cols-2 gap-10 !my-10">
      <div>
        <div className="flex">
          <div className="flex items-center bg-gray-100 text-primary px-3 py-1 rounded-full text-sm">
            <p className="ml-2">Solution for you</p>
          </div>
        </div>
        <p className="md:text-3xl text-xl mt-7">
          Decoding Ai With <span className="text-primary">Honeypotz</span>
        </p>
        <p className="lg:text-5xl text-3xl font-semibold lexend mt-6">
          <span className="text-themeOrange">Confidential AI</span> At
        </p>
        <p className="lg:text-5xl text-3xl font-semibold lexend mt-3">
          The Cutting Edge
        </p>
        <p className="regular leading-7 mt-7 pb-2 text-sm">
          In the world of artificial intelligence, a veil of confidentiality
          surrounds cutting-edge technologies. Behind algorithms and machine
          learning, a guarded labyrinth of secrets shapes AI's destiny.
          Deciphering the silent symphony of circuitry unveils layers of
          confidentiality, ensuring tomorrow's secrets are safeguarded within
          closed algorithms.
        </p>
        <div className="mt-5 flex flex-col lg:flex-row lg:items-center gap-5">
          <ThemeButton content="Request a demo" bgOrange />
          <ThemeButton
            simple
            content={
              <div className="flex items-center justify-center">
                <img src={star} alt="star" />
                <p className="ml-3">Check out the Possibilities</p>
              </div>
            }
          />
        </div>
      </div>
      <div>
        <img src={brain} alt="home_cover" />
      </div>
    </div>
  );
};

export default Home;
