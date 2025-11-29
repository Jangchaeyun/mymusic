import { createContext, useContext, useEffect, useRef, useState } from "react";
import { API_BASE_URL, AuthContext, useAuth } from "./AuthContext";
import axios from "axios";

export const PlayerContext = createContext();

export const PlayerContextProvider = ({ children }) => {
  const [songsData, setSongsData] = useState([]);
  const [albumsData, setAlbumsData] = useState([]);
  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });
  const { user, token, getAuthHeaders } = useAuth();
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const play = () => {};

  const pause = () => {};

  const playWithId = async (id) => {};

  const previous = async () => {};

  const next = async () => {};

  const seekSong = (e) => {};

  const getSongsData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/songs`, {
        headers: getAuthHeaders(),
      });
      const songs = response.data.songs || [];
      setSongsData(songs);
      if (songs.length > 0) {
        setTrack(songs[0]);
      }
    } catch (error) {
      console.error(error);
      setSongsData([]);
    }
  };

  const getAlbumsData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/albums`, {
        headers: getAuthHeaders(),
      });
      const albums = response.data.albums || [];
      setAlbumsData(albums);
    } catch (error) {
      console.error(error);
      setAlbumsData([]);
    }
  };

  const contextValue = {
    getSongsData,
    getAlbumsData,
    songsData,
    albumsData,
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  useEffect(() => {
    if (user && token) {
      getAlbumsData();
      getSongsData();
    }
  }, [user, token]);

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};
