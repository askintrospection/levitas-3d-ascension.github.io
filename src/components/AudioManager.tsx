
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
      {/* Ambient synthwave track - using a data URL for demo */}
      <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmMeCjuVz/LNfiwGJnbD7N+TQwoXXrPn5KlXGQZBnNvz0XkpBCQ=" type="audio/wav" />
    </audio>
  );
};
