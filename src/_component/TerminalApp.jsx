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
  }, []);

  return <div></div>;
};

export default TerminalApp;
