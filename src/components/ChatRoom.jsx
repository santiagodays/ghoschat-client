import React, { useState } from 'react';

const ChatRoom = () => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  const handleUserConnect = (userName) => {
    setUsers([...users, userName]);
  };

  return (
    <div>
      <h2>Chat Room</h2>

      <div>
        <h3>Connected Users:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Messages:</h3>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>

      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
