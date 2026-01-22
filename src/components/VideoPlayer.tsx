import { useRef, useState } from 'react';

interface VideoPlayerProps {
  src: string;       // New prop for the video file
  thumbnail: string; // Used as the "poster" before play is clicked
  alt: string;
  large?: boolean;
}

const VideoPlayer = ({ src, thumbnail, alt, large = false }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className={`relative overflow-hidden bg-card-dark group cursor-pointer ${
        large ? 'aspect-[16/9] rounded-none' : 'aspect-video rounded-lg'
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={thumbnail}
        className="w-full h-full object-cover"
        playsInline
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Play Button Overlay - Only visible when PAUSED */}
      {!isPlaying && (
        <div 
          onClick={togglePlay}
          className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 hover:bg-black/40"
        >
          <div className={`rounded-full bg-foreground/90 flex items-center justify-center backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${
            large ? 'w-20 h-20' : 'w-16 h-16'
          }`}>
            <svg
              className={`text-background ml-1 ${large ? 'w-8 h-8' : 'w-6 h-6'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;