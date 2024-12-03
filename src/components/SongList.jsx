import React, { useEffect, useState } from "react";
import songsData from "../assets/songs_with_spotify_links";
import SongCard from "./SongCard";

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setSongs(songsData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {songs.map((song) => (
        <SongCard key={song._id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
