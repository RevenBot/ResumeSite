import { useTranslation } from "react-i18next";
import { useLocation, useRoute } from "wouter";
import useStore from "../../context/mode/store.js";

function Footer() {
  const { t } = useTranslation("footer");
  const [match] = useRoute("/frame/:id");
  const [, setLocation] = useLocation();
  const mode = useStore((state) => state.caosMode);
  return (
    <div
      className="absolute bottom-0 z-2 w-full flex flex-column"
      style={{
        background: "var(--highlight-bg)",
        color: "var(--highlight-text-color)",
      }}
    >
      {!mode && (
        <div className=" w-full flex flex-row md:flex-row justify-content-between p-2 xl:text-lg lg:text-lg text-sm">
          <a
            style={{
              fontSize: "13px",
              textDecoration: "none",
              color: "var(--highlight-text-color)",
            }}
            href="#"
            onClick={() => setLocation("/")}
          >
            {match ? `<  ${t("back")}` : t("dbclick")}
          </a>
        </div>
      )}
      <div className=" w-full flex flex-row md:flex-row justify-content-between p-3 xl:text-lg lg:text-lg text-sm">
        <a
          href="https://github.com/RevenBot/resumEsite"
          style={{
            textDecoration: "none",
            color: "var(--highlight-text-color)",
          }}
        >
          Repo RevenBot
        </a>
        <div>{t("work")}</div>
        <div>06/03/2024</div>
      </div>
    </div>
  );
}

export default Footer;
