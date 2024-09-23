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
          ? "bg-secondary text-white"
          : "text-secondary bg-white border-secondary border-2"
      } rounded-full px-8 h-12 semibold`}
    >
      {content}
    </button>
  );
};

export default ThemeButton;
