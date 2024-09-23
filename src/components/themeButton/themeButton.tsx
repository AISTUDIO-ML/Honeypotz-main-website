import { handleClick } from "helpers/helpers";

interface ThemeButtonProps {
  content: any;
  bgFill?: boolean;
  className?: string;
  bgOrange?: boolean;
  simple?: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = (props) => {
  const { content, bgFill, className, bgOrange, simple } = props;
  return (
    <button
      onClick={handleClick}
      className={`${className} ${
        bgFill
          ? "bg-primary text-white"
          : bgOrange
          ? "bg-themeOrange text-white"
          : simple
          ? "bg-white border-white text-black"
          : "bg-white text-primary"
      } border-2 ${
        bgOrange ? "border-themeOrange" : "border-primary"
      } rounded-full px-8 h-12 semibold`}
    >
      {content}
    </button>
  );
};

export default ThemeButton;
