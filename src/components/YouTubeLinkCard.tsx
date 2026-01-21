interface YouTubeLinkCardProps {
  thumbnail: string;
  title: string;
  url: string;
}

const YouTubeLinkCard = ({ thumbnail, title, url }: YouTubeLinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden bg-card-dark transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-youtube-red flex items-center justify-center shadow-lg">
            <svg
              className="w-7 h-7 text-foreground ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-sans font-semibold text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <svg className="w-5 h-5 text-youtube-red" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span>youtube.com</span>
        </div>
      </div>
    </a>
  );
};

export default YouTubeLinkCard;
