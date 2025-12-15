import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';
const ChatLog = (props) => {
  const ChatEntryComponent = props.entries.map(entry => {
    let messageClass;
    if (entry.sender === 'Vladimir') {
      messageClass = 'remote';
    } else {
      messageClass = 'local';
    };
    return (
      <ChatEntry
        id={entry.id}
        className={messageClass}
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        toggleLike={props.onEntryToggleLike}
      />

    );
  });
  return (
    <section>{ChatEntryComponent}</section>);
};
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked:PropTypes.bool.isRequired,
    }),
  ),
  onEntryToggleLike:PropTypes.func.isRequired,
};

export default ChatLog;