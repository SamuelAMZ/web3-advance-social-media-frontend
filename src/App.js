import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Explore from "./pages/Explore";
import Notification from "./pages/Notification";
import Profil from "./pages/Profil";
import Bookmark from "./pages/Bookmark";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <div className="pages">
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
