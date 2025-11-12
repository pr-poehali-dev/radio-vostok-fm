import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface FixedPlayerProps {
  streamUrl?: string;
  currentTrack?: {
    artist: string;
    title: string;
  };
}

const FixedPlayer = ({ 
  streamUrl = 'https://stream.zeno.fm/f3wvbbqmdg8uv',
  currentTrack = { artist: 'The Weeknd', title: 'Blinding Lights' }
}: FixedPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Ошибка воспроизведения:', error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (newValue: number[]) => {
    setVolume(newValue);
    if (audioRef.current) {
      audioRef.current.volume = newValue[0] / 100;
      if (newValue[0] > 0 && isMuted) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <Button
          size="lg"
          className={`gap-2 gradient-primary hover:opacity-90 transition-all rounded-full shadow-2xl ${isPlaying ? 'animate-pulse-slow' : ''}`}
          onClick={togglePlay}
        >
          <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} />
          <span className="font-semibold">Восток FM</span>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border border-border"
          onClick={() => setIsMinimized(false)}
        >
          <Icon name="Maximize2" size={12} />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/95 border-t border-primary/30 shadow-2xl animate-fade-in">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      <div className="container mx-auto px-4 py-4 relative">
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <div className={`w-14 h-14 rounded-full gradient-primary flex items-center justify-center ${isPlaying ? 'animate-pulse-slow' : ''}`}>
              <Button
                size="icon"
                variant="ghost"
                className="w-12 h-12 rounded-full hover:scale-110 transition-transform"
                onClick={togglePlay}
              >
                <Icon name={isPlaying ? 'Pause' : 'Play'} size={24} className="text-white" />
              </Button>
            </div>
            {isPlaying && (
              <div className="absolute -inset-1 rounded-full border-2 border-primary/30 animate-ping"></div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Live</span>
              <div className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium">
                📻 Восток FM
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-lg font-bold truncate">{currentTrack.title}</p>
              <span className="text-muted-foreground">•</span>
              <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 w-64">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleMute}
              className="flex-shrink-0"
            >
              <Icon 
                name={isMuted || volume[0] === 0 ? 'VolumeX' : volume[0] < 50 ? 'Volume1' : 'Volume2'} 
                size={20} 
              />
            </Button>
            <Slider
              value={isMuted ? [0] : volume}
              onValueChange={handleVolumeChange}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground w-10 text-right font-medium">
              {isMuted ? 0 : volume[0]}%
            </span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Button size="icon" variant="ghost" className="hidden md:flex">
              <Icon name="Heart" size={20} />
            </Button>
            <Button size="icon" variant="ghost" onClick={() => setIsMinimized(true)}>
              <Icon name="Minimize2" size={20} />
            </Button>
          </div>
        </div>

        <audio
          ref={audioRef}
          src={streamUrl}
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={(e) => {
            console.error('Ошибка загрузки потока:', e);
            setIsPlaying(false);
          }}
        />
      </div>
    </div>
  );
};

export default FixedPlayer;
