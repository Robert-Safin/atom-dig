import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      {isMounted && (
        <button
          className={`flex h-fit w-20 items-center rounded-full p-[3px] ${resolvedTheme === "dark" ? "justify-end bg-white" : "justify-start bg-black"} `}
          onClick={() => {
            if (resolvedTheme === "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
        >
          <motion.div
            layout
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${resolvedTheme === "dark" ? "bg-black" : "bg-white"}`}
          >
            {resolvedTheme === "light" && <Sun />}
            {resolvedTheme === "dark" && <Moon />}
          </motion.div>
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
