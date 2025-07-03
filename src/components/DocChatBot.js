import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "src/configs/chatbotConfig";
import MessageParser from "src/chatbot/MessageParser";
import ActionProvider from "src/chatbot/ActionProvider";

export default function DocChatBot() {
  return (
    <div style={{ maxWidth: 400 }}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}