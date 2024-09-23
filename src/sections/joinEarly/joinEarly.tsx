import { calender, honeypotz, join_person } from "assets/images/images";
import { ThemeButton, ThemeInput } from "components/components";

const JoinEarly: React.FC = () => {
  return (
    <div className="myContainer !py-14 grid lg:grid-cols-2 gap-16">
      <img src={join_person} alt="join_early" />
      <div>
        <div className="flex items-start justify-between">
          <div>
            <p className="md:text-5xl text-3xl font-bold lexend">Join Early</p>
            <p className="md:text-5xl text-3xl font-bold text-themeOrange lexend md:mt-4 mt-1">
              Access Now
            </p>
          </div>
          <img src={honeypotz} alt="honeypotz" width={162} />
        </div>
        <div className="flex items-center justify-between gap-5 mt-5">
          <div>
            <p className="md:text-lg text-[#696969]">
              Signup now to lock in the discount. Limited to first 500 signups!{" "}
            </p>
            <p className="text-sm md:text-base mt-5 text-[#47358D] regular">
              Launching to the public in Feb
            </p>
          </div>
          <img src={calender} alt="calender" />
        </div>
        <div className="flex flex-col gap-7 mt-5">
          <ThemeInput type="text" placeholder="Full Name" />
          <ThemeInput type="email" placeholder="Email Address" />
          <ThemeInput type="number" placeholder="Phone Number" />
        </div>
        <ThemeButton
          content={"Lock your discount Now"}
          bgOrange
          className="w-full mt-7"
        />
      </div>
    </div>
  );
};

export default JoinEarly;
