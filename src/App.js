import { useState, useEffect } from 'react';
import Player from './Components/Player';

function App() {
  const [songs, setSongs] = useState([
    {
      title: 'bad energy',
      artist: 'wizkid',
      img_src: 'num1.jpg',
      src: 'wizkid.mp3'
    },
    {
      title: 'fool for you',
      artist: 'wizkid',
      img_src: 'num2.jpg',
      src: 'wizkid2.mp3'
    },
    {
      title: 'oya now',
      artist: 'Akon',
      img_src: 'num3.jpg',
      src: 'wizkid.mp3'
    },
    {
      title: 'i dy for you',
      artist: 'wizkid',
      img_src: 'num1.jpg',
      src: 'wizkid.mp3'
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
