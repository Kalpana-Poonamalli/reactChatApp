import { Component } from "react";
import { BiPaperPlane } from "react-icons/bi";
import { TiKeyOutline } from "react-icons/ti";
import { MdLock } from "react-icons/md";
import { MdOutlineChat } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import ChatItem from "./components/chatBox/index";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

const profileNameColors = ["f1", "f2", "f3", "f4", "f5", "f6", "f7"];

const backgroundColorsList = [
  "black",
  "red",
  "blue",
  "orange",
  "gray",
  "yellow",
  "green",
  "pink",
];

const List = [
  {
    id: 1,
    name: "Elin",
    textInput: "Hi team!!",
    isLiked: false,
    bgColor: "green",
    profileNameColor: "f5",
    count: 0,
  },
  {
    id: 2,
    name: "Alan",
    textInput: "Hello all! What about the project ??",
    isLiked: true,
    bgColor: "green",
    profileNameColor: "f3",
    count: 2,
  },
  {
    id: 3,
    name: "Carol",
    textInput: "Yeah!! It's almost done...",
    isLiked: true,
    bgColor: "blue",
    profileNameColor: "f2",
    count: 5,
  },
];

class App extends Component {
  state = {
    chatList: List,
    textInput: "",
    count: 0,
  };

  onTextChange = (event) => {
    this.setState({ textInput: event.target.value });
  };

  buttonClicks = (id) => {
    const { chatList } = this.state;
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({
      chatList: chatList.map((eachItem) => {
        if (eachItem.id === id) {
          return { ...eachItem, isLiked: true };
        }
        return eachItem;
      }),
    }));
  };

  onButtonClick = (event) => {
    event.preventDefault();
    const { textInput, count } = this.state;

    const name = user_list[Math.ceil(Math.random() * user_list.length - 1)];

    const backgroundColor =
      backgroundColorsList[
        Math.ceil(Math.random() * backgroundColorsList.length - 1)
      ];

    const profileBackground =
      profileNameColors[
        Math.ceil(Math.random() * profileNameColors.length - 1)
      ];

    const newChat = {
      id: uuidv4(),
      name,
      textInput,
      isLiked: false,
      bgColor: { backgroundColor },
      profileNameColor: { profileBackground },
      likeCount: { count },
    };
    this.setState((prevState) => ({
      chatList: [...prevState.chatList, newChat],
    }));
  };

  render() {
    const { textInput, chatList } = this.state;
    return (
      <div className="app-container">
        <div className="app-inner-container">
          <div className="left-container">
            <div>
              <div className="profile-flexing">
                <div>
                  <p className="profile">ES</p>
                </div>

                <h1 className="heading">
                  Exact<span className="space">Space</span>
                </h1>
              </div>
              <div className="list-container">
                <ul className="u-list">
                  <li className="flex">
                    <TiKeyOutline className="icon" />
                    <p className="para para1">Account</p>
                  </li>
                  <li className="flex">
                    <MdLock className="icon" />
                    <p className="para">Chat</p>
                  </li>
                  <li className="flex">
                    <MdOutlineChat className="icon" />
                    <p className="para">Notifications</p>
                  </li>
                  <li className="flex">
                    <IoMdNotifications className="icon" />
                    <p className="para">App Language</p>
                  </li>
                  <li className="flex">
                    <BiHelpCircle className="icon" />
                    <p className="para">Help</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="chat-container">
            <div className="chat-ff">
              <div className="chat-profile-container">
                <p className="main-profile">EG</p>
                <h1 className="grp-profile-name">
                  Exact<span className="space1">Space</span> Group Chat
                </h1>
              </div>
              <div>
                <ul className="chat-list">
                  {chatList.map((eachChat) => (
                    <ChatItem
                      eachChat={eachChat}
                      key={eachChat.id}
                      buttonClicks={this.buttonClicks}
                    />
                  ))}
                </ul>
              </div>

              <div className="input-text">
                <button type="button" className="at">
                  @
                </button>
                <div className="send-msg">
                  <input
                    type="text"
                    placeholder="Text message"
                    className="input"
                    onChange={this.onTextChange}
                    value={textInput}
                  />
                  <button
                    type="button"
                    className="icon1"
                    onClick={this.onButtonClick}
                  >
                    <BiPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
