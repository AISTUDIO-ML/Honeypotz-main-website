import {
  cases_shape,
  usecase_1,
  usecase_2,
  usecase_3,
} from "assets/images/images";

const UseCases: React.FC = () => {
  return (
    <div id="usecases" className="myContainer !py-28">
      <div className="flex items-center justify-center md:gap-5 gap-3">
        <p className="text-center text-themeBlack md:text-5xl text-3xl font-bold lexend">
          Use
        </p>
        <div
          style={{
            backgroundImage: `url(${cases_shape})`,
          }}
          className="backgroundOrangeShape md:w-[192px] w-[160px] md:h-[75px] h-[55px]"
        >
          <p className="md:text-5xl text-3xl font-bold lexend text-white">
            Cases
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">USED CASE 1</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Secure Healthcare Diagnostics
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            Utilizing confidential AI, sensitive medical data can be analyzed
            securely for diagnostic purposes, ensuring patient privacy while
            enabling advanced healthcare insights and personalized treatment
            recommendations.
          </p>
        </div>
        <img src={usecase_1} alt="technology" />
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <img src={usecase_2} alt="technology" />
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">USED CASE 2</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Secure Financial AI Fraud Detection
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            Confidential AI is employed in financial sectors to detect and
            prevent fraud by analyzing transaction patterns and anomalies
            without compromising the confidentiality of individual financial
            information.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 mt-16">
        <div className="flex flex-col justify-around h-[100%]">
          <div>
            <p className="text-lg semibold">USED CASE 3</p>
            <p className="font-bold lexend md:leading-snug md:text-5xl text-2xl mt-3">
              Confidential National Security AI
            </p>
          </div>
          <p className="md:leading-9 opacity-70 md:text-lg text-themeBlack mt-5 lg:mt-0">
            In the realm of national security, confidential AI is applied to
            analyze and interpret classified data, aiding in identifying
            potential threats while maintaining the confidentiality of sensitive
            information to protect the country's interests.
          </p>
        </div>
        <img src={usecase_3} alt="technology" />
      </div>
    </div>
  );
};

export default UseCases;
