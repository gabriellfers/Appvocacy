import React, { useRef, useEffect, StyleSheet } from "react";
import Moment from "react-moment";

const Message = ({ msgs, user1 }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);
  return (
    <div
      className={`message_wrapper ${msgs.from === user1 ? "own" : ""}`}
      ref={scrollRef}
    >
      <p className={msgs.from === user1 ? "me" : "friend"}>
        {msgs.media ? <img src={msgs.media} alt={msgs.text} /> : null}
        {msgs.text}
        <br />
        <small>
          <Moment fromNow>{msgs.createdAt.toDate()}</Moment>
        </small>
      </p>
    </div>
  );
};



export default Message;