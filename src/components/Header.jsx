// src/components/Header.js

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon
import songsData from "../assets/songs_with_spotify_links"; // Import song data

const Header = ({ setFilteredSongs }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle real-time search
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update search query

    // Filter songs dynamically based on the title
    const filtered = songsData.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );

    // Pass filtered songs to the parent
    setFilteredSongs(filtered);
  };

  return (
    <header className="bg-indigo-400 text-white py-4 fixed top-0 left-0 right-0 z-10 mx-4 my-6 rounded-lg">
      <div className="flex justify-between items-center mx-auto px-6 max-w-screen-xl">
        <h1 className="text-2xl font-bold">Song Review App</h1>
        <div className="flex items-center">
          <div className="flex items-center bg-black text-white p-2 rounded-full">
            <FaSearch className="text-white mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange} // Trigger dynamic filtering
              placeholder="Search songs..."
              className="bg-black text-white p-2 rounded-full focus:outline-none w-56"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
