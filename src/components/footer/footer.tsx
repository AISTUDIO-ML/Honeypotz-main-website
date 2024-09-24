import {
  discover,
  honeypotz,
  logo,
  mastercard,
  unionpay,
  visa,
} from "assets/images/images";

const links = [
  {
    title: "Quick Links",
    link: [
      {
        title: "Solutions",
        href: "/",
      },
      {
        title: "Company",
        href: "https://www.honeypotz.net/",
      },
      {
        title: "Enterprice",
        href: "/",
      },
      {
        title: "Blog",
        href: "https://www.aistudio.ml/blog",
      },
    ],
  },
  {
    title: "Services",
    link: [
      {
        title: "AIOPS",
        href: "/",
      },
      {
        title: "Deep Beat",
        href: "/",
      },
      {
        title: "Confidential Computing",
        href: "/",
      },
      {
        title: "Much more...",
        href: "/",
      },
    ],
  },
  {
    title: "Policies",
    link: [
      {
        title: "Terms & conditions",
        href: "https://app.termly.io/document/terms-of-use-for-saas/27e6cc45-1962-43c3-a37f-6f15d02ba5a9",
      },
      {
        title: "Privacy Policies",
        href: "https://app.termly.io/document/privacy-policy/fec0b2f8-630e-4a48-889b-fa3e8174ced8",
      },
      {
        title: "Investors",
        href: require("../../assets/Honeypotz_Seed.pdf"),
      },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <>
      <div className="myContainer border-t border-gray-300 !py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 lg:gap-y-0 lg:grid-cols-6 gap-3">
          <div className="md:col-span-2">
            <a href="/#">
              <img alt="logo" src={logo} width={170} />
            </a>
            <p className="medium mt-5 w-full text-sm leading-7  ">
              Founded in 2024. Unlock a new era of <br /> digital security with
              AIStudio – where <br /> cutting-edge AI meets effortless <br />
              protection.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img src={visa} alt="vise" width={30} className="mr-1" />
              </div>
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img src={mastercard} alt="mastercard" width={25} />
              </div>
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img src={discover} alt="discover" width={30} />
              </div>
              <div className="bg-themeGray-200 w-12 h-7 rounded-full flex justify-center items-center">
                <img src={unionpay} alt="unionpay" width={25} />
              </div>
            </div>
          </div>
          {links.map((link, index) => (
            <div key={index}>
              <p className="semibold pb-3">{link.title}</p>
              <div className="medium text-sm flex flex-col leading-9">
                {link.link.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <p className="semibold pb-3">Contact Us</p>
            <p className="medium text-sm">
              8 THE Green STE R Dover, DE 19901 USA
            </p>
            <p className="medium text-sm py-4">+41 44 585 2436</p>
            <p className="medium text-sm">Team@honeypotz.net</p>
          </div>
        </div>
        <div className="mt-12 flex items-center">
          <p className="caveat text-primary text-4xl">Made By</p>
          <img alt="honeypotz" src={honeypotz} className="ml-4" width={180} />
        </div>
      </div>
      <div className="bg-primary text-xs md:text-sm myContainer h-16 md:h-14 flex justify-center text-center items-center text-white">
        <p>(@) 2024 aistudio Limited. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
