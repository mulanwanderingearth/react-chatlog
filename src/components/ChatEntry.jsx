import './ChatEntry.css';
import TimeStamp from './TimeStamp.jsx';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  let heart = props.liked ? '❤️' : '🤍';
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className={`chat-entry ${props.className}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp time={props.timeStamp} /></p>
        <button className="like" onClick={()=>{props.toggleLike(props.id);}}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id:PropTypes.number.isRequired,
  className:PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked:PropTypes.bool.isRequired,
  toggleLike:PropTypes.func.isRequired,
};

export default ChatEntry;
