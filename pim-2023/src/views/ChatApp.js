import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from "../config/firebaseConfig";

import '../css/ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'messages'), orderBy('timestamp')),
      (snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    await addDoc(collection(db, 'messages'), {
      text: inputMessage,
      timestamp: new Date(),
    });

    setInputMessage('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="chat-app">
      <div className="messages">
        {messages.map(({ id, data }) => (
          <p key={id}>{data.text}</p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;

// possibilité de suppr ses données hehe rgpd