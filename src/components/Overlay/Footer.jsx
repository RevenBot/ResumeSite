import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");
  return (
    <div className="absolute bottom-0 z-2 w-full flex flex-row md:flex-row justify-content-between p-3 xl:text-lg lg:text-lg text-sm text-primary">
      <a
        href="https://github.com/RevenBot/resumEsite"
        style={{
          textDecoration: "none",
          color: "var(--primary-color)",
        }}
      >
        Repo
        <br />
        RevenBot
      </a>
      <div>{t("work")}</div>
      <div>06/03/2024</div>
    </div>
  );
}

export default Footer;
