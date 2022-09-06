import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Notification from "./pages/Notification";
import Message from "./pages/Message";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <>
      <div className="pages">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/message" element={<Message />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </div>
    </>
  );
}

export default App;