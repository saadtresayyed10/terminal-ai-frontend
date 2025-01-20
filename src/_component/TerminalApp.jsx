import { useEffect } from "react";
import { useRef } from "react";
import { Terminal } from "xterm";

const TerminalApp = () => {
  const termRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme: {
        background: "#1e1e1e",
        foreground: "#dcdcdc",
        cursor: "#ffffff",
      },
    });
    term.open(termRef.current);

    fetch("http://localhost:5000/run-script")
      .then((response) => response.text())
      .then((data) => {
        term.write(data);
      })
      .catch((err) => {
        term.write(`Failed to fetch: ${err}`);
      });
  }, []);

  return <div></div>;
};

export default TerminalApp;
