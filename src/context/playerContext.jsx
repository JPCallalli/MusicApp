import { createContext, useState, useEffect } from "react";

const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [cancion, setCancion] = useState([]);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};