interface VideoPlayerProps {
  thumbnail: string;
  alt: string;
}

const VideoPlayer = ({ thumbnail, alt }: VideoPlayerProps) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg bg-card-dark group cursor-pointer">
      <img
        src={thumbnail}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 rounded-full bg-foreground/90 flex items-center justify-center">
          <svg
            className="w-6 h-6 text-background ml-1"
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
