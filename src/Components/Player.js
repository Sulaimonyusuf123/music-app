import { useState, useEffect, useRef } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

const Player = ({ songs, currentSongIndex, setCurrentSongIndex, nextSongIndex }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  const skipSong = (forwards = true) => {
    setCurrentSongIndex((prevIndex) => {
      let temp = forwards ? prevIndex + 1 : prevIndex - 1;
      if (temp < 0) {
        temp = songs.length - 1;
      } else if (temp >= songs.length) {
        temp = 0;
      }
      return temp;
    });
  };

  return (
    <div className='bg-white rounded-lg shadow-lg p-5 max-w-md mx-auto'>
      <audio src={songs[currentSongIndex].src} ref={audioRef}></audio>
      <h4 className='text-lg font-semibold mb-3'>Playing Now</h4>
      <PlayerDetails song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
      <p className='mt-3 text-sm'>
        <strong>NEXT UP:</strong> {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
      </p>
    </div>
  );
};

export default Player;
