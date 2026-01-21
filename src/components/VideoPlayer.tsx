interface VideoPlayerProps {
  thumbnail: string;
  alt: string;
  large?: boolean;
}

const VideoPlayer = ({ thumbnail, alt, large = false }: VideoPlayerProps) => {
  return (
    <div 
      className={`relative overflow-hidden bg-card-dark group cursor-pointer ${
        large ? 'aspect-[16/9] rounded-none' : 'aspect-video rounded-lg'
      }`}
    >
      <img
        src={thumbnail}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`rounded-full bg-foreground/90 flex items-center justify-center ${
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
    </div>
  );
};

export default VideoPlayer;
