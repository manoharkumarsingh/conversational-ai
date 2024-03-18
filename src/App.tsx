import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { AiChat } from "@nlux/react";
import "@nlux/themes/nova.css";
import "./custom-nova-theme.css";
import { streamAdapter } from "./adapter";
import { botStyle } from "./personas";

function App() {
  const [count, setCount] = useState(0);
  const adapter = useMemo(() => streamAdapter, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div
        style={{
          background: "white",
          padding: "20px",
          right: 0,
          position: "relative",
        }}
      >
        <AiChat
          className="custom-ai-chat-comp"
          adapter={adapter}
          personaOptions={{
            bot: {
              name: "iBot",
              picture: <span style={botStyle}>🤖</span>,
              tagline: "Your Genius AI Assistant",
            },
          }}
          layoutOptions={{
            height: 320,
            width: 500,
            maxWidth: 600,
          }}
        />
      </div>
    </>
  );
}

export default App;
