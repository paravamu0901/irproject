import React, { useState } from "react";
import "./ChatScreen.css";

export default function ChatScreen() {
  const [chatOptions, setChatOptions] = useState("Chat");
  const [chatText, setChatText] = useState("");
  const [textArray, setTextArray] = useState([
    {
      display: "right",
      text: "Hi I am Pruce",
    },
    {
      display: "left",
      text: "Hi I am Smriti",
    },
  ]);
  return (
    <div className="chatBox">
      <div className="Topics">
        Topics
        <div>
          <input
            onClick={() => setChatOptions("Chat")}
            type="radio"
            value="Chat"
            checked={chatOptions === "Chat"}
          />
          Chat
        </div>
        <div>
          <input
            onClick={() => setChatOptions("Politics")}
            type="radio"
            value="Politics"
            checked={chatOptions === "Politics"}
          />
          Politics
        </div>
        <div>
          <input
            onClick={() => setChatOptions("Environment")}
            type="radio"
            value="Environment"
            checked={chatOptions === "Environment"}
          />
          Environment
        </div>
        <div>
          <input
            onClick={() => setChatOptions("Technology")}
            type="radio"
            value="Technology"
            checked={chatOptions === "Technology"}
          />
          Technology
        </div>
        <div>
          <input
            onClick={() => setChatOptions("Healthcare")}
            type="radio"
            value="Healthcare"
            checked={chatOptions === "Healthcare"}
          />
          Healthcare
        </div>
        <div>
          <input
            onClick={() => setChatOptions("Education")}
            type="radio"
            value="Education"
            checked={chatOptions === "Education"}
          />
          Education
        </div>
      </div>
      <div className="ChatScreen">
        {textArray.map((data, key) => (
          <div
            className={
              data.display === "right" ? "displayRight" : "displayLeft"
            }
          >
            <div className="textbubble">{data.text}</div>
          </div>
        ))}

        <div className="textbar">
          <div className="textbartype">
            <input
              value={chatText}
              onChange={(e) => setChatText(e.target.value)}
              className="textbartypeInput"
            />
          </div>
          <div
            onClick={() => {
              setTextArray([
                ...textArray,
                { display: "right", text: chatText },
              ]);
              setChatText("");
            }}
            className="textbarbutton"
          >
            Send
          </div>
        </div>
      </div>
    </div>
  );
}
