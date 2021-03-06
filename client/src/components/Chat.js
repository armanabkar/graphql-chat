import React from "react";
import { useChatMessages } from "../utils/hooks";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

const Chat = ({ user }) => {
  const { messages, addMessage } = useChatMessages();
  return (
    <section className="section">
      <div className="container">
        <MessageList user={user} messages={messages} />
        <MessageInput onSend={addMessage} />
      </div>
    </section>
  );
};

export default Chat;
