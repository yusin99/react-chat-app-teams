import logo from "./logo.svg";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import Modal from "./components/LoginFrom";
function App() {
  if (!window.localStorage.getItem("username")) return <Modal />;
  return (
    <ChatEngine
      height="100vh"
      projectID="f247b33c-71be-41e9-b02e-c7392280d145"
      userName={window.localStorage.getItem("username")}
      userSecret={window.localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
