import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SongList from "./components/SongList";
import songsData from "./assets/songs_with_spotify_links"; // Import song data

const App = () => {
  const [filteredSongs, setFilteredSongs] = useState(songsData); // Initialize with all songs

  // Pass the filtered songs to the SongList component
  return (
    <div>
      <Header setFilteredSongs={setFilteredSongs} />
      <SongList filteredSongs={filteredSongs} />
    </div>
  );
};

export default App;
