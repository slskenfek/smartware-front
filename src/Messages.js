import React, { useState } from 'react';
import { conversations } from './data';
import './Messages.css';

function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);

  return (
    <div className="messages-container">
      <div className="conversation-list">
        {conversations.map(conv => (
          <div 
            key={conv.id} 
            className={`conversation-item ${selectedConversation.id === conv.id ? 'active' : ''}`}
            onClick={() => setSelectedConversation(conv)}
          >
            <div className="partner-name">{conv.partner}</div>
            <div className="last-message">{conv.lastMessage}</div>
            <div className="timestamp">{conv.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="chat-window">
        {selectedConversation && (
          <>
            <div className="chat-header">{selectedConversation.partner}</div>
            <div className="message-list">
              {selectedConversation.messages.map((msg, index) => (
                <div key={index} className={`message-bubble ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="message-input">
              <input type="text" placeholder="메시지를 입력하세요..." />
              <button>전송</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Messages;