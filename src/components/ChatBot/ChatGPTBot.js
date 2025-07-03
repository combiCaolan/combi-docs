import React, { useState, useRef, useEffect } from "react";

import config from "@generated/docusaurus.config";
import MessageParser from "../../chatbot/MessageParser";
import ActionProvider from "../../chatbot/ActionProvider";

// import config from "./configs/chatbotConfig";
// import MessageParser from "./chatbot/MessageParser";
// import ActionProvider from "./chatbot/ActionProvider";

// Simple fake responses to make the bot interact a little
const fakeBotResponses = [
  "Hello! How can I help you today?",
  "That's interesting—tell me more.",
  "I'm just a demo bot, but you can connect me to an API!",
  "Try asking me about documentation or Docusaurus.",
  "I'm here to help, even if I'm just pretending!"
];

function getFakeBotResponse(userMessage) {
  // Pick a response based on message count
  return fakeBotResponses[userMessage.length % fakeBotResponses.length];
}

export default function ChatGPTBot() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm your documentation assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    // Scroll chat to bottom on new message
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { role: "bot", content: getFakeBotResponse(newMessages) }
      ]);
    }, 700); // Simulate a short delay
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 10,
      maxWidth: 400,
      minWidth: 280,
      margin: "16px auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      background: "#fafbfc",
      fontFamily: "system-ui, sans-serif"
    }}>
      <div style={{
        background: "#2e8555",
        color: "#fff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: "12px 16px",
        fontWeight: 600,
        fontSize: "1.1em"
      }}>
        💬 Docusaurus ChatBot (Demo)
      </div>
      <div style={{
        maxHeight: 260,
        overflowY: "auto",
        padding: 12,
        background: "#fff"
      }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.role === "user" ? "right" : "left",
              margin: "8px 0"
            }}
          >
            <span
              style={{
                display: "inline-block",
                background: msg.role === "user" ? "#e3f4ff" : "#f4f6fa",
                color: "#222",
                borderRadius: 16,
                padding: "8px 14px",
                maxWidth: "75%",
                fontSize: 15,
                boxShadow: "0 1px 3px rgba(0,0,0,0.03)"
              }}
            >
              {msg.content}
            </span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div style={{
        display: "flex",
        borderTop: "1px solid #eee",
        background: "#f6f8fa",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10
      }}>
        <input
          type="text"
          value={input}
          placeholder="Type your message…"
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
          style={{
            flex: 1,
            border: "1px solid #ccc",
            borderRadius: 6,
            padding: "8px 10px",
            fontSize: 15,
            outline: "none",
            marginRight: 8,
            background: "#fff"
          }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          style={{
            background: "#2e8555",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            padding: "8px 16px",
            fontWeight: 500,
            fontSize: 15,
            cursor: input.trim() ? "pointer" : "not-allowed",
            opacity: input.trim() ? 1 : 0.7
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}