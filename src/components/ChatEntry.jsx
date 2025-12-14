import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className={`chat-entry ${props.className}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
