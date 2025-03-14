import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <div>
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
