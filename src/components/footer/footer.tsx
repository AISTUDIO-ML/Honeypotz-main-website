import {
  facebook,
  github,
  instagram,
  linkedin,
  mail,
} from "assets/icons/icons";
import {
  american,
  discover,
  honeypotz,
  jcb,
  logo,
  maestro,
  mastercard,
  unionpay,
  visa,
} from "assets/images/images";

const Footer: React.FC = () => {
  return (
    <>
      <div className="myContainer border-t border-gray-300 !py-10">
        <div className=" flex flex-col md:flex-row gap-10 md:items-center">
          <div>
            <a href="/#">
              <img alt="logo" src={logo} width={170} />
            </a>
            <p className="regular mt-5 text-gray-500 md:w-[60%] w-full text-sm leading-6  ">
              Enhancing privacy, our confidential AI subtitle ensures secure
              communication and data protection. Advanced encryption algorithms
              safeguard sensitive information, fostering trust in AI
              applications.
            </p>
            <div className="flex items-center gap-7 mt-8">
              <img src={visa} alt="vise" />
              <img src={mastercard} alt="mastercard" />
              <img src={discover} alt="discover" />
              <img src={american} alt="american" />
              <img src={maestro} alt="maestro" />
              <img src={unionpay} alt="unionpay" />
              <img src={jcb} alt="jcb" />
            </div>
          </div>
          <div className="md:w-[40%]">
            <p className="semibold pb-3">Information</p>
            <div className="regular text-sm flex flex-col leading-9 text-gray-500">
              <a
                href="https://www.aistudio.ml"
                target="_blank"
                rel="noreferrer"
              >
                Enterprise
              </a>
              <a
                href="https://app.termly.io/document/privacy-policy/fec0b2f8-630e-4a48-889b-fa3e8174ced8"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              <a
                href="https://app.termly.io/document/terms-of-use-for-saas/27e6cc45-1962-43c3-a37f-6f15d02ba5a9"
                target="_blank"
                rel="noreferrer"
              >
                Terms of services
              </a>
              <a
                href="https://www.aistudio.ml/blog"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
              <a
                href={require("../../assets/Honeypotz_Seed.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                Investors
              </a>
            </div>
          </div>
          <div>
            <p className="semibold pb-3 w-20">Company</p>
            <div className="regular text-sm flex flex-col leading-9 text-gray-500">
              <a
                href="https://www.aistudio.ml"
                target="_blank"
                rel="noreferrer"
              >
                Resources
              </a>
              <a
                href="https://www.aistudio.ml/forum"
                target="_blank"
                rel="noreferrer"
              >
                Community
              </a>
              <a
                href="https://www.honeypotz.net/"
                target="_blank"
                rel="noreferrer"
              >
                Company
              </a>
              <a
                href="https://honeypotz.partnerportal.io/"
                target="_blank"
                rel="noreferrer"
              >
                Partners
              </a>
              <a href="/#" target="_blank" rel="noreferrer">
                Affiliates
              </a>
            </div>
          </div>
        </div>
        <div className="md:flex items-center justify-between">
          <div className="mt-8 flex items-center">
            <p className="caveat text-primary text-4xl">Made By</p>
            <img alt="honeypotz" src={honeypotz} className="ml-4" width={180} />
          </div>
          <div className="flex items-center gap-7 mt-8">
            <img src={facebook} alt="vise" />
            <img src={mail} alt="mastercard" />
            <img src={instagram} alt="discover" />
            <img src={linkedin} alt="american" />
            <img src={github} alt="maestro" />
          </div>
        </div>
      </div>
      <div className="bg-primary text-xs md:text-sm myContainer h-16 md:h-14 flex justify-center text-center items-center text-white">
        <p>(@) 2024 ConfidencialAi Limited. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
