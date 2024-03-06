import Terminal from "./Terminal/Terminal";

function Overlay(props) {
  return (
    <>
      <Terminal />
      <div
        style={{
          position: "absolute",
          top: "91%",
          left: "0%",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        className="flex flex-column md:flex-row justify-content-between p-6"
      >
        <a
          href="https://github.com/RevenBot/resumEsite"
          style={{
            fontSize: "13px",
            color: "whitesmoke",
            textDecoration: "none",
          }}
        >
          Repo
          <br />
          RevenBot
        </a>
        <div>Work in progress ...</div>
        <div
          style={{
            fontSize: "13px",
            color: "white",
          }}
        >
          06/03/2024
        </div>
      </div>
    </>
  );
}

export default Overlay;
