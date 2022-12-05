import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ChatScreen from "./Components/ChatScreen/ChatScreen";
import { useState } from "react";
import Analytics from "./Components/Analytics/Analytics";

function App() {
  const [navState, setNavState] = useState(true);
  return (
    <div className="App">
      <header className="App-header">
        <Navbar setNavState={setNavState} />
        {navState ? <ChatScreen /> : <Analytics />}
      </header>
    </div>
  );
}

export default App;
