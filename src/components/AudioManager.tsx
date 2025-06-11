
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
        audioRef.current.play().catch(() => {
          // Auto-play blocked, that's okay
        });
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
      {/* Fallback for browsers that don't support MP3 */}
      <source src="/song.wav" type="audio/wav" />
    </audio>
  );
};
