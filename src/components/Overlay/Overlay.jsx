import { Suspense } from "react";
import Footer from "./Footer";
import Terminal from "./Terminal/Terminal";
import ThemeSwitcher from "./ThemeSwitcher";

function Overlay(props) {
  return (
    <>
      <ThemeSwitcher />
      <Terminal />
      <Suspense fallback="loading">
        <Footer />
      </Suspense>
    </>
  );
}

export default Overlay;
