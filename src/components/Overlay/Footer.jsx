import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");
  return (
    <div
      style={{
        position: "absolute",
        top: "91%",
        left: "0%",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        color: "var(--primary-color)",
        fontFamily: "var(--font-family)",
      }}
      className="flex flex-column md:flex-row justify-content-between p-6"
    >
      <a
        href="https://github.com/RevenBot/resumEsite"
        style={{
          fontSize: "13px",
          textDecoration: "none",
          color: "var(--primary-color)",
        }}
      >
        Repo
        <br />
        RevenBot
      </a>
      <div
        style={{
          fontSize: "13px",
        }}
      >
        {t("work")}
      </div>
      <div
        style={{
          fontSize: "13px",
        }}
      >
        06/03/2024
      </div>
    </div>
  );
}

export default Footer;
