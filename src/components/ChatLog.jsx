import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';
const ChatLog = (props) => {
  const chatEntryComponent = props.entries.map(entry => {
    return (
      <ChatEntry
        id={entry.id}
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
    <section>{chatEntryComponent}</section>);
};
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }),
  ),
  onEntryToggleLike: PropTypes.func,
};

export default ChatLog;