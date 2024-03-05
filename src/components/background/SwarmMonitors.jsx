import Monitor from "./Monitor";

function SwarmMonitors(props) {
  const { words } = props;
  return words.map((item, i) => <Monitor key={i}>{item.text}</Monitor>);
}

export default SwarmMonitors;
