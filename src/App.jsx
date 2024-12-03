import React from 'react';
import Header from './components/Header';
import SongList from './components/SongList';

const App = () => (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <SongList />
  </div>
);

export default App;
