import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';
const ChatLog = (props) => {
  const ChatEntryComponent = props.entries.map(entry => {
    let messageClass;
    if (entry.sender === 'Vladimir') {
      messageClass ='remote';
    } else {
      messageClass ='local';
    };
    return (
      <ChatEntry
        className={messageClass}
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />

    );
  });
  return (
    <section>{ChatEntryComponent}</section>);
};
ChatLog.propTypes = {
  entries: PropTypes.array.isRequired,
};

export default ChatLog;