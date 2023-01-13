import { AiOutlineLike } from "react-icons/ai";

const ChatItem = (props) => {
  const { eachChat, buttonClicks } = props;
  const { id, name, textInput, bgColor, profileNameColor, count } = eachChat;
  const profile = name[0];
  // console.log(name);
  // console.log(text);
  // console.log(profileNameColor);
  // console.log(bgColor);

  const onLikeButtonClicks = () => {
    buttonClicks(id);
  };

  return (
    <div className="item-container">
      <div>
        <p className={`chat-profile ${bgColor}`}>{profile}</p>
      </div>
      <div className="bg">
        <p className={`profile-name ${profileNameColor}`}>{name}</p>
        <div className="para-like-button">
          <p className="text">{textInput}</p>
          <button
            type="button"
            className="like-button"
            onCLick={onLikeButtonClicks}
          >
            <AiOutlineLike />
          </button>
          <p className="c">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
