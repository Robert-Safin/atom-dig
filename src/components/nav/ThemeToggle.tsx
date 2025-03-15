import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-20 text-center w-full justify-center z-50">
      <p onClick={() => setTheme("dark")} className="">
        light
      </p>
      <p onClick={() => setTheme("light")} className="">
        dark
      </p>
    </div>
  );
};

export default ThemeToggle;
