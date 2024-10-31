import React from 'react';

const PlayerDetails = ({ song }) => {
  return (
    <div className='flex flex-col items-center mb-4'>
      <div className='mb-3'>
        <img src={song.img_src} alt={`${song.title} cover`} className='rounded-lg w-full h-auto' />
      </div>
      <div className='text-center'>
        <h3 className='text-xl font-bold'>{song.title}</h3>
        <h4 className='text-sm text-gray-500'>{song.artist}</h4>
      </div>
    </div>
  );
};

export default PlayerDetails;
