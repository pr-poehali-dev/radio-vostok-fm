import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface AudioPlayerProps {
  streamUrl?: string;
  currentTrack?: {
    artist: string;
    title: string;
  };
}

const AudioPlayer = ({ 
  streamUrl = 'https://stream.vostok.fm/live',
  currentTrack = { artist: 'The Weeknd', title: 'Blinding Lights' }
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [isMuted, setIsMuted] = useState(false);
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

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/30 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className={`w-16 h-16 rounded-full gradient-primary flex items-center justify-center ${isPlaying ? 'animate-pulse-slow' : ''}`}>
              <Button
                size="icon"
                variant="ghost"
                className="w-14 h-14 rounded-full hover:scale-110 transition-transform"
                onClick={togglePlay}
              >
                <Icon name={isPlaying ? 'Pause' : 'Play'} size={28} className="text-white" />
              </Button>
            </div>
            {isPlaying && (
              <div className="absolute -inset-2 rounded-full border-2 border-primary/30 animate-ping"></div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-xs font-medium text-primary">LIVE</span>
            </div>
            <p className="text-lg font-bold truncate">{currentTrack.title}</p>
            <p className="text-sm text-muted-foreground truncate">{currentTrack.artist}</p>
          </div>

          <div className="hidden md:flex items-center gap-3 min-w-[200px]">
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
            <span className="text-xs text-muted-foreground w-8 text-right">
              {isMuted ? 0 : volume[0]}
            </span>
          </div>

          <Button size="icon" variant="ghost" className="flex-shrink-0">
            <Icon name="Heart" size={20} />
          </Button>
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
      </CardContent>
    </Card>
  );
};

export default AudioPlayer;
