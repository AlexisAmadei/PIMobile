import React, { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig';
import { collection, addDoc, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const currentUser = localStorage.getItem('currentUser');
  const destinationUser = localStorage.getItem('destinationUser');

  useEffect(() => {
    const messagesRef = collection(db, 'messages');
    const messagesQuery = query(messagesRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      setMessages(
        snapshot.docs
          .map((doc) => doc.data())
          .filter(
            (message) =>
              (message.from === currentUser && message.to === destinationUser) ||
              (message.from === destinationUser && message.to === currentUser)
          )
      );
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser, destinationUser, db]);

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'messages'), {
        from: currentUser,
        to: destinationUser,
        message: input,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setInput('');
  };

  return (
    <div className="chatApp">
      <div className="chatApp__messages">
        {messages.map((message) => (
          <p key={message.timestamp} className={message.from === currentUser ? 'sent' : 'received'}>
            {message.message}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage} className="chatApp__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
