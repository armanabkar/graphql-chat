import React, { useEffect, useRef } from "react";

const MessageList = ({ messages, user }) => {
  const boxRef = useRef();

  useEffect(() => {
    const box = boxRef.current;
    box.scrollTo(0, box.scrollHeight);
  });

  const renderMessage = (message) => {
    let tag = "tag";
    let messageColor = "";
    if (message.from === user) {
      tag += " is-info";
      messageColor += "color";
    }
    return (
      <tr key={message.id}>
        <td>
          <span className={tag}>{message.from}</span>
        </td>
        <td className={messageColor} style={{ paddingLeft: "0.75em" }}>
          {message.text}
        </td>
      </tr>
    );
  };

  return (
    <div
      ref={boxRef}
      className="box"
      style={{ height: "65vh", overflowY: "scroll" }}
    >
      <table>
        <tbody>{messages.map(renderMessage)}</tbody>
      </table>
    </div>
  );
};

export default MessageList;
