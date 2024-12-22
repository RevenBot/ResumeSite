import { EcctrlJoystick } from "ecctrl";
import { useEffect, useState } from "react";

const Mobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 1024,
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1024);
    }

    if (typeof window !== "undefined") {
      handleResize();
    }
  });
  if (isMobile) return <EcctrlJoystick />;
  else null;
};

export default Mobile;
