import { useContext, useState } from "react";
import { cross_icon, menu_icon } from "assets/icons/icons";
import { logo } from "assets/images/images";
import { ThemeButton } from "components/components";
import "./navbar.css";
import Context from "context/context";

const MobNavBar: React.FC = () => {
  const [showOptions, setShowOptions] = useState("headerClose");
  const active = useContext(Context);
  const handleOptions = (e: any) => {
    if (showOptions === "headerClose") {
      setShowOptions("headerOpen");
    } else {
      setShowOptions("headerClose");
    }
    if (e) {
      if (e.target.href?.split("#")[1]) {
        active?.setActive(e.target.href?.split("#")[1]);
      } else {
        active?.setActive("");
      }
    }
  };
  return (
    <div className="lg:hidden z-20 sticky top-0 bg-white shadow-md">
      <div className="flex items-center justify-between myContainer">
        <a href="/#">
          <img alt="logo" src={logo} width={130} />
        </a>
        <img
          onClick={() => handleOptions("")}
          alt="menu_icon"
          src={showOptions === "headerClose" ? menu_icon : cross_icon}
          width={25}
          className="cursor-pointer"
        />
      </div>
      <div
        className={`${showOptions} absolute w-full !py-0 myContainer bg-white overflow-hidden`}
      >
        <div>
          <div className="gap-5 flex flex-col items-center">
            <a
              href="/#"
              onClick={handleOptions}
              className={`py-1 border-b-2 ${
                !active?.active ? "border-themeOrange" : "border-white"
              }`}
            >
              Home
            </a>
            <a
              href="#features"
              onClick={handleOptions}
              className={`py-1 border-b-2 ${
                active?.active === "features"
                  ? "border-themeOrange"
                  : "border-white"
              }`}
            >
              Features
            </a>
            <a
              href="#usecases"
              onClick={handleOptions}
              className={`py-1 border-b-2 ${
                active?.active === "usecases"
                  ? "border-themeOrange"
                  : "border-white"
              }`}
            >
              Use Cases
            </a>
            <a
              href="#whyus"
              onClick={handleOptions}
              className={`py-1 border-b-2 ${
                active?.active === "whyus"
                  ? "border-themeOrange"
                  : "border-white"
              }`}
            >
              Why use
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <ThemeButton content="Free Demo" className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBar: React.FC = () => {
  const active = useContext(Context);
  return (
    <>
      <MobNavBar />
      <div className="myContainer sticky top-0 z-20 bg-white shadow-md lg:flex items-center justify-between hidden">
        <a href="/#">
          <img alt="logo" src={logo} width={170} />
        </a>
        <div className="gap-10 flex items-center">
          <a
            href="/#"
            className={`py-1 border-b-2 ${
              !active?.active ? "border-themeOrange" : "border-white"
            }`}
            onClick={() => active?.setActive("")}
          >
            Home
          </a>
          <a
            href="#features"
            className={`py-1 border-b-2 ${
              active?.active === "features"
                ? "border-themeOrange"
                : "border-white"
            }`}
            onClick={() => active?.setActive("features")}
          >
            Features
          </a>
          <a
            href="#usecases"
            className={`py-1 border-b-2 ${
              active?.active === "usecases"
                ? "border-themeOrange"
                : "border-white"
            }`}
            onClick={() => active?.setActive("usecases")}
          >
            Use Cases
          </a>
          <a
            href="#whyus"
            className={`py-1 border-b-2 ${
              active?.active === "whyus" ? "border-themeOrange" : "border-white"
            }`}
            onClick={() => active?.setActive("whyus")}
          >
            Why use
          </a>
          <ThemeButton content="Free Demo" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
