import { authenticate_system, feature_shape } from "assets/images/images";

const AuthenticateAi: React.FC = () => {
  return (
    <div id="features" className="myContainer !pt-28 !pb-12">
      <div className="flex items-center justify-center md:gap-5 gap-3">
        <p className="text-center text-themeBlack md:text-5xl text-3xl font-bold lexend">
          Exclusive
        </p>
        <div
          style={{
            backgroundImage: `url(${feature_shape})`,
          }}
          className="backgroundOrangeShape md:w-[257.38px] w-[185px] md:h-[84.87px] h-[60px]"
        >
          <p className="md:text-5xl text-3xl font-bold lexend text-white">
            ️Features
          </p>
        </div>
      </div>
      <div className="mt-14 grid lg:grid-cols-3 gap-5">
        <div className="flex flex-col gap-10">
          <div className="bg-lightPink px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Encryption Protocols</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              Confidential AI relies on robust encryption protocols to secure
              sensitive data throughout its lifecycle.
            </p>
          </div>
          <div className="bg-lightBlue px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Isolation Mechanisms</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              To fortify against potential threats, confidential AI systems
              leverage isolation mechanisms.
            </p>
          </div>
          <div className="bg-lightPink px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Secure Pipelines</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              Confidential AI ensures safety with secure channels, validated
              APIs, and encrypted connections.
            </p>
          </div>
          <div className="bg-lightBlue px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Zero-Knowledge Proofs</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              Ensuring minimal exposure of information, confidential AI
              incorporates zero-knowledge proofs.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={authenticate_system} alt="authenticate_system" />
        </div>
        <div className="flex flex-col gap-10">
          <div className="bg-lightPink px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Secure Access Controls</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              Implementing stringent access controls is paramount in maintaining
              confidentiality.
            </p>
          </div>
          <div className="bg-lightBlue px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Continuous Monitoring</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              Confidential AI operates under a watchful eye through continuous
              monitoring and auditing.
            </p>
          </div>
          <div className="bg-lightPink px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Dynamic Threat Response</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              In Confidential AI, dynamic threat response features anomaly
              detection and adaptive security measures.
            </p>
          </div>
          <div className="bg-lightBlue px-5 text-center h-28 flex flex-col justify-center rounded-3xl">
            <p className="text-lg semibold">Homomorphic Encryption</p>
            <p className="regular text-xs text-themeDarkGray mt-2">
              Confidential AI uses homomorphic encryption, enabling computations
              on encrypted data without decryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticateAi;
