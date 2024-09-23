interface ThemeInputProps {
  placeholder?: string;
  type?: string;
}

const ThemeInput: React.FC<ThemeInputProps> = ({ placeholder, type }) => {
  return (
    <input
      className="bg-[#F4F4F4] h-14 w-full px-7 rounded-[30px] focus-visible:outline-primary"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default ThemeInput;
