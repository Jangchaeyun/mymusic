import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import AddSong from "./pages/AddSong";
import ListSong from "./pages/ListSong";
import AddAlbum from "./pages/AddAlbum";
import ListAlbum from "./pages/ListAlbum";

export const API_BASE_URL = "http://localhost:8080";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        {/* Define your routes here */}
        <Route path="/login" element={<Login />} />
        <Route path="/add-song" element={<AddSong />} />
        <Route path="/list-songs" element={<ListSong />} />
        <Route path="/add-album" element={<AddAlbum />} />
        <Route path="/list-albums" element={<ListAlbum />} />
        <Route path="*" element={<AddSong />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
