import React, { useCallback, useEffect } from "react";
import {
  ReactTerminal,
  TerminalContext,
  TerminalContextProvider,
} from "react-terminal";
import useStore from "../../../context/mode/store";

function Terminal() {
  const { setBufferedContent, setTemporaryContent } =
    React.useContext(TerminalContext);

  const { updateMode, switchMode } = useStore((state) => state);

  const commands = {
    help: (
      <span>
        <strong>clear</strong> - clears the console. <br />
        <strong>mode</strong> - set site to caos or resume. <br />
      </span>
    ),
    mode: (mode) => {
      console.log(mode);
      if (mode === "help") {
        return (
          <>
            <div className="flex w-full justify-content-between">
              <div className="w-full">mode</div>
              <div className="w-full">to switch mode</div>
            </div>
            <div className="flex w-full justify-content-between">
              <div className="w-full">mode caos</div>
              <div className="w-full">set mode to caos </div>
            </div>
            <div className="flex w-full justify-content-between">
              <div className="w-full">mode resume</div>
              <div className="w-full">set mode to resume </div>
            </div>
          </>
        );
      }
      if (mode === "caos") {
        updateMode(true);
        return <>Set mode to caos</>;
      } else if (mode === "resume") {
        updateMode(false);
        return <>Set mode to resumE</>;
      } else {
        switchMode();
        return <>Switch mode</>;
      }
    },

    wait: async (timeout) => {
      setTemporaryContent("Waiting...");
      await new Promise((resolve) =>
        setTimeout(
          () => {
            resolve(void 0);
          },
          parseInt(timeout) * 10000,
        ),
      );
      return "Over!";
    },

    count_to: async (nb) => {
      setTemporaryContent("Counting...");
      nb = parseInt(nb);
      await Promise.all(
        new Array(nb).fill({}).map(
          (_, index) =>
            new Promise((resolve) => {
              const timer = setTimeout(() => {
                setBufferedContent((previous) => (
                  <>
                    {previous}
                    <span>{index + 1}</span>
                    {index + 1 < nb ? <br /> : ""}
                  </>
                ));
                clearTimeout(timer);
                resolve(void 0);
              }, index * 1000);
            }),
        ),
      );
      return (
        <>
          <br />
          Finished
        </>
      );
    },
  };

  const init = useCallback(async () => {
    setBufferedContent(
      <>
        <span
          style={{
            color: "var(--green-700)",
          }}
        >
          ➜{" "}
        </span>
        npm run build resumEsite --caos
        <br />
        <span
          style={{
            color: "var(--green-700)",
          }}
        >
          ➜{" "}
        </span>
        vite v4.5.2 building for production...
        <br />
        <span
          style={{
            color: "var(--green-700)",
          }}
        >
          ✓{"    "}
        </span>
        640 modules transformed.
        <br />
        <div className="flex w-full justify-content-between">
          <div>
            dist/
            <span
              style={{
                color: "var(--green-700)",
              }}
            >
              index.html
            </span>
          </div>
          <div>0.46 kB │ gzip: 00.30 kB</div>
        </div>
        <div className="flex w-full justify-content-between">
          <div>
            dist/
            <span
              style={{
                color: "var(--pink-700)",
              }}
            >
              index.css
            </span>
          </div>
          <div>0.62 kB │ gzip: 00.38 kB</div>
        </div>
        <div className="flex w-full justify-content-between">
          <div>
            dist/
            <span
              style={{
                color: "var(--blue-700)",
              }}
            >
              index.js
            </span>
          </div>
          <div>104.63 kB │ gzip: 42.08 kB</div>
        </div>
        <br />
        <span
          style={{
            color: "var(--green-700)",
          }}
        >
          ✓{"    "}
        </span>
        built in 3.41
        <br />
      </>,
    );
  }, [setBufferedContent]);

  useEffect(() => {
    init();
  }, [init]);

  const welcomeMessage = (
    <span>
      {`Type "help" for all available commands.`} <br />
    </span>
  );

  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        width: "20%",
        height: "inherit",
        maxHeight: "300px",
      }}
    >
      <ReactTerminal
        showControlBar={false}
        showControlButtons={false}
        themes={{
          "my-custom-theme": {
            themeBGColor: "var(--surface-border)",
            themePromptColor: "var(--green-700)",
            themeColor: "var(--highlight-text-color)",
          },
        }}
        theme="my-custom-theme"
        welcomeMessage={welcomeMessage}
        commands={commands}
        prompt={"➜"}
        defaultHandler={(command, commandArguments) => {
          return `${command} passed on to default handler with arguments ${commandArguments}`;
        }}
      />
    </div>
  );
}
export default function TerminalDemo() {
  return (
    <TerminalContextProvider>
      <Terminal />
    </TerminalContextProvider>
  );
}
