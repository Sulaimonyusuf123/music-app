import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

const PlayerControls = ({ isPlaying, setIsPlaying, skipSong }) => {
  return (
    <div className='flex justify-between mt-4'>
      <button className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600' onClick={() => skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600' onClick={() => setIsPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600' onClick={() => skipSong(true)}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControls;
