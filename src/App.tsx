import { useMemo } from "react";
import "./App.css";
import { AiChat } from "@nlux/react";
import "@nlux/themes/nova.css";
import "./custom-nova-theme.css";
import { streamAdapter } from "./adapter";
import { botStyle } from "./personas";

function App() {
  const adapter = useMemo(() => streamAdapter, []);

  return (
    <>
      <div className="chat-popup" id="myForm">
        <div className="form-container">
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
              height: "90vh",
              width: 500,
            }}
          />
        </div>
      </div>
      {/* {formVisibility ? (
        <div className="chat-popup" id="myForm">
          <div className="form-container">
            <div className="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
                onClick={() => closeForm()}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </div>

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
                height: 600,
                width: 500,
                maxWidth: 600,
              }}
            />
          </div>
        </div>
      ) : (
        <button className="open-button" onClick={() => openForm()}>
          Chat
        </button>
      )} */}
    </>
  );
}

export default App;
