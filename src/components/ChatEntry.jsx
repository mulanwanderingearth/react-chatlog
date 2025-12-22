import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  let heart = props.liked ? '❤️' : '🤍';
  let messageClass;
  messageClass = props.sender === 'Vladimir' ?'remote':'local';

  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className={`chat-entry ${messageClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button
          onClick={() => props.toggleLike(props.id)}
          className="like"
          aria-label={heart}
          role="img"
        >
          {heart}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func,
};

export default ChatEntry;
