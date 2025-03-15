import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div className="z-50 flex w-full items-center justify-center space-x-20 text-center">
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
