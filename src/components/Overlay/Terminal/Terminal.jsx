import { useEffect, useState } from "react";
import { Terminal } from "primereact/terminal";
import { TerminalService } from "primereact/terminalservice";

export default function TerminalDemo() {
  const [show, setShow] = useState(true);

  const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(" ");
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case "date":
        response = "Today is " + new Date().toDateString();
        response = "✓ " + response;
        break;

      case "greet":
        response = "Hola " + text.substring(argsIndex + 1) + "!";
        response = "✓ " + response;
        break;

      case "random":
        response = Math.floor(Math.random() * 100);
        response = "✓ " + response;
        break;

      case "clear":
        response = null;
        break;

      default:
        response = "x Unknown command: " + command;
        break;
    }

    if (response) {
      TerminalService.emit("response", response);
    } else {
      setShow(false);
      TerminalService.emit("clear");
    }
  };

  useEffect(() => {
    TerminalService.on("command", commandHandler);

    return () => {
      TerminalService.off("command", commandHandler);
    };
  }, []);

  const headerTerminal = () => {
    if (show) {
      return (
        <p>
          &gt; npm run build resumEsite --caos
          <br />
          &gt; resumEsite@0.0.0 build
          <br />
          {`vite v4.5.2 building for production...`}
          <br />
          {`✓ 640 modules transformed.`}
          <br />
          {`dist/index.html         0.46 kB │ gzip:     0.30 kB`}
          <br />
          {`✓ built in 3.41`}
        </p>
      );
    }
    return null;
  };

  return (
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 40,
      }}
      className="card terminal-demo"
    >
      {headerTerminal()}
      <Terminal
        prompt=">"
        pt={{
          root: "bg-gray-900 text-white border-round",
          prompt: "text-gray-400 mr-2",
          command: "text-primary-300",
          response: "text-primary-300",
        }}
      />
    </div>
  );
}
