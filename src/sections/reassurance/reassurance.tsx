import {
  aeroplane,
  dollar,
  orange_shape,
  profile,
  security,
} from "assets/images/images";

const Reassurance: React.FC = () => {
  return (
    <div className="myContainer !pt-28 !pb-12">
      <div className="flex items-center justify-center md:gap-5 gap-3">
        <p className="text-center text-themeBlack md:text-5xl text-3xl font-bold lexend">
          Highlights
        </p>
        <div
          style={{
            backgroundImage: `url(${orange_shape})`,
          }}
          className="backgroundOrangeShape md:w-[168px] w-[110px] md:h-[81px] h-[55px]"
        >
          <p className="md:text-5xl text-3xl font-bold lexend text-white">
            Uses
          </p>
        </div>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-28">
        <div>
          <div className="bg-lightPink h-48 px-5 rounded-3xl">
            <div className="flex justify-center relative">
              <div className="absolute -top-16">
                <img src={profile} alt="icon" />
              </div>
            </div>
            <p className="semibold pt-12">Personalized Health Insights</p>
            <p className="text-xs mt-3">
              It uses advanced analytics for personalized diagnosis and
              treatment recommendations, prioritizing privacy to secure
              confidential information while optimizing patient care.
            </p>
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <div className="bg-lightBlue h-48 px-5 rounded-3xl">
            <div className="flex justify-center relative">
              <div className="absolute -top-20">
                <img src={security} alt="icon" />
              </div>
            </div>
            <p className="semibold pt-12">Secure Banking Intelligence</p>
            <p className="text-xs mt-3">
              Secure Banking Intelligence leverages advanced AI to fortify
              financial institutions against fraud, ensuring robust security in
              transactions and customer interactions.
            </p>
          </div>
        </div>
        <div className="mt-16 xl:mt-0">
          <div className="bg-lightPink h-48 px-5 rounded-3xl">
            <div className="flex justify-center relative">
              <div className="absolute -top-16">
                <img src={dollar} alt="icon" />
              </div>
            </div>
            <p className="semibold pt-12">InsureTech Analytics</p>
            <p className="text-xs mt-3">
              InsureTech Analytics integrates confidential AI to revolutionize
              the insurance industry, optimizing risk assessment and claims
              processing.
            </p>
          </div>
        </div>
        <div className="mt-16 xl:mt-0">
          <div className="bg-lightBlue h-48 px-5 rounded-3xl">
            <div className="flex justify-center relative">
              <div className="absolute -top-20">
                <img src={aeroplane} alt="icon" />
              </div>
            </div>
            <p className="semibold pt-12">Smart Retail Insights</p>
            <p className="text-xs mt-3">
              Intelligent Retail Optimization employs confidential AI to analyze
              customer behavior and streamline inventory management, enhancing
              the retail experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reassurance;
