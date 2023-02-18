import React from "react";

const ChatList = (props) =>{
  // Component logic:
  // If there´s no topic choosen we have to show all available chats.
  // If there's a topic choosen we have to show all available chats regarding that topic.
  // ChatList receives in theire props: all topics and choosen topics.
  // Note that is not good to pass topics that we are not going to use. We have to improve this in the future in order to have unused data.
  // Also we are receiving all chats available with that topic.
  return(
    <div>
      <h1>Chats about: {props.topicName} 👻</h1>
      <div>
        <ul>
          {props.chats.map((chats, index) => (
              // Include link to the chat room here.
              <li key={index}>{chatName}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default ChatList;