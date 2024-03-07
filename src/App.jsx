import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlaylistProvider } from "./context/playlistContext";
import { AuthcontextProvider } from "./context/authContext";
import Home from "../src/views/Home";
import Playlist from "./views/Playlist";
import Navbar from "./components/Navbar";
import Login from "./views/Login";
import Register from "./views/Register";

export default function App() {
  return (
    <Router>
      <AuthcontextProvider>
        <PlaylistProvider>
          <Navbar />
          <Routes>
            {/* dentro de routes solamente van las rutas */}
            <Route path="/" element={<Home />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/producto/:id" element={<DetailProduct />} /> */}
          </Routes>
        </PlaylistProvider>
      </AuthcontextProvider>
    </Router>
  );
}
