import {
  ai_shape,
  deployment,
  security_orange,
  wallet,
} from "assets/images/images";

const WhyChoose: React.FC = () => {
  return (
    <div id="whyus" className="myContainer !pt-28 !pb-12">
      <div className="flex items-center justify-center md:gap-5 gap-3">
        <p className="text-center text-themeBlack md:text-5xl text-3xl font-bold lexend">
          Why Confidential
        </p>
        <div
          style={{
            backgroundImage: `url(${ai_shape})`,
          }}
          className="backgroundOrangeShape md:w-[101px] w-[80px] md:h-[73px] h-[60px]"
        >
          <p className="md:text-5xl text-3xl font-bold lexend text-white">AI</p>
        </div>
      </div>
      <p className="text-center mt-7 regular text-themeGray md:text-lg md:px-5">
        Confidential AI refers to artificial intelligence systems that
        prioritize data privacy and security, ensuring that sensitive
        information remains protected and inaccessible to unauthorized users.
      </p>
      <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20">
        <div>
          <div className="flex h-28 justify-center">
            <img src={wallet} alt="icon" />
          </div>
          <p className="semibold text-themeBlack mt-7 text-xl">
            Empowering Your Data
          </p>
          <p className="mt-5 regular text-xs leading-6 text-themeBlack">
            Unlock the potential of your private data with our innovative
            solutions, turning sensitive information into valuable assets for
            your business growth.
          </p>
        </div>
        <div>
          <div className="flex h-28 justify-center">
            <img src={security_orange} alt="icon" />
          </div>
          <p className="semibold text-themeBlack mt-7 text-xl">
            Cloud AI Defense
          </p>
          <p className="mt-5 regular text-xs leading-6 text-themeBlack">
            Safeguard your cloud-deployed AI models with robust security
            measures, shielding valuable data and insights from unauthorized
            access or manipulation.
          </p>
        </div>
        <div>
          <div className="flex h-28 justify-center">
            <img src={deployment} alt="icon" />
          </div>
          <p className="semibold text-themeBlack mt-7 text-xl">
            Effortless Deployment
          </p>
          <p className="mt-5 regular text-xs leading-6 text-themeBlack">
            Simplify your deployment process and streamline provisioning tasks
            with our managed services, enabling smooth and efficient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
