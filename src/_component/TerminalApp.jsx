import React, { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

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

    return () => {
      term.dispose();
    };
  }, []);

  return (
    <div
      className="w-full h-96 bg-gray-800 text-white p-4 rounded-lg shadow-lg"
      ref={termRef}
      style={{ height: "500px", width: "100%" }}
    ></div>
  );
};

export default TerminalApp;
