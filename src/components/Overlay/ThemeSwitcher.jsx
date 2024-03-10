import { useContext, useState } from "react";
import { PrimeReactContext } from "primereact/api";
import { useTranslation } from "react-i18next";
import { Dropdown } from "primereact/dropdown";

//Use in a component

const ThemeSwitcher = () => {
  const [iconClassName, setIconClassName] = useState("pi-moon");
  const { changeTheme } = useContext(PrimeReactContext);
  const [theme, setTheme] = useState("dark");

  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  console.log(selectedLang, "start", i18n.languages);
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
      <div className="card flex justify-content-center">
        <Dropdown
          value={selectedLang}
          onChange={(e) => {
            setSelectedLang(e.value);
            console.log(e.value);
            i18n.changeLanguage(e.value);
          }}
          options={i18n.languages}
          placeholder="Select language"
          className="w-full md:w-14rem"
          pt={{
            root: {
              style: { background: " var(--surface-border)" },
            },
            panel: {
              style: { background: " var(--surface-border)" },
            },
          }}
        />
      </div>
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
