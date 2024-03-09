import { Card } from "primereact/card";
import { useContext, useState } from "react";
import { PrimeReactContext } from "primereact/api";

//Use in a component

const ThemeSwitcher = () => {
  const [iconClassName, setIconClassName] = useState("pi-moon");
  const { changeTheme } = useContext(PrimeReactContext);
  const [theme, setTheme] = useState("dark");

  const changeMyTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    changeTheme(
      `lara-${theme}-purple`,
      `lara-${newTheme}-purple`,
      "theme-link",
      () => setTheme(newTheme),
    );
    setIconClassName((prevClasName) =>
      prevClasName === "pi-moon" ? "pi-sun" : "pi-moon",
    );
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        color: "var(--primary-color)",
      }}
      className="flex align-items-center justify-content-end"
    >
      <div className="w-4rem h-4rem font-bold flex align-items-center justify-content-center p-4 border-round mr-3">
        <i
          onClick={changeMyTheme}
          className={`dark:text-white pi ${iconClassName}`}
        />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
