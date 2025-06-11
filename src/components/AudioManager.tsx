
import { useEffect, useRef } from 'react';

interface AudioManagerProps {
  isPlaying: boolean;
  volume?: number;
}

export const AudioManager = ({ isPlaying, volume = 0.2 }: AudioManagerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Auto-play blocked, that's okay
            console.log('Audio autoplay was prevented');
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      style={{ display: 'none' }}
    >
      <source src="/song.mp3" type="audio/mpeg" />
      <source src="/song.wav" type="audio/wav" />
      <source src="/song.ogg" type="audio/ogg" />
      Your browser does not support the audio element.
    </audio>
  );
};
