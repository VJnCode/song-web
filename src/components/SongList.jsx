import React, { useEffect, useState } from "react";
import SongCard from "./SongCard";
import Lottie from "lottie-react"; // Correct import for lottie-react
import musicAnimation from "../assets/music.json"; // Path to your music.json animation file

const SongList = ({ filteredSongs }) => {
  const [isLoading, setIsLoading] = useState(true);
  const noSongsFound = filteredSongs.length === 0;

  useEffect(() => {
    // Simulate data fetching (if you are actually fetching songs, replace this with your fetching logic)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the data is fetched
    }, 1000); // Replace with your actual data fetching delay
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        {/* You can also use a loading spinner or animation here */}
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {noSongsFound ? (
        <div className="flex justify-center items-center">
          <Lottie animationData={musicAnimation} loop={true} />
          <p>No songs found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSongs.map((song) => (
            <SongCard key={song._id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SongList;
