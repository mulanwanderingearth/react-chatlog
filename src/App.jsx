import { useState } from 'react';
import './App.css';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';

const App = () => {
  const [newMessages, setMessages] = useState(messages);
  let likeCount = newMessages.filter(message => message.liked).length;

  const toggleLike = (messageId) => {
    setMessages(messages => {
      return messages.map(message => {
        if (message.id === messageId) {
          return { ...message, liked: !message.liked };
        } else {
          return message;
        };
      });
    });

  };
  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladmir and Estragon {likeCount} ❤️s</h1>
      </header>
      <main>
        <ChatLog entries={newMessages} onEntryToggleLike={toggleLike}></ChatLog>
      </main>
    </div>
  );
};
export default App;
