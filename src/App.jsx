import React, { useState } from "react";
import Header from "./components/Header"; // Import Header component
import SongList from "./components/SongList"; // Import SongList component

const App = () => {
  const [filteredSongs, setFilteredSongs] = useState([]); // Store filtered songs

  return (
    <div>
      <Header setFilteredSongs={setFilteredSongs} />
      <SongList filteredSongs={filteredSongs} />
    </div>
  );
};

export default App;
