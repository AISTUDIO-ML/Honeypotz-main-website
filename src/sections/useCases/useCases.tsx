import {
  cases_shape,
  usecase_1,
  usecase_2,
  usecase_3,
  logo,
} from "assets/images/images";

const UseCases: React.FC = () => {
  return (
    <div id="usecases" className="myContainer">
      <div className="flex flex-col items-center">
        <div className="text-secondary bg-secondaryLight w-44 h-11 rounded-full flex items-center justify-center">
          <p>Use Cases</p>
        </div>
        <div className="flex items-center gap-3 mt-5">
          <p className="text-primary  text-3xl semibold">
            Use Case In Real World With
          </p>
          <img alt="logo" src={logo} width={170} />
        </div>
      </div>
    </div>
  );
};

export default UseCases;
