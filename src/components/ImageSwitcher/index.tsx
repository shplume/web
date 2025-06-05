interface ImageSwitcherProps {
  currentIndex: number;
  onIndexChange: (index: number) => void;
  themeMode: string;
  images: Array<{ url: string; alt: string; label: string }>;
}

export const ImageSwitcher = ({
  currentIndex,
  onIndexChange,
  themeMode,
  images,
}: ImageSwitcherProps) => {
  return (
    <div className="relative">
      <div className="flex justify-center mb-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onIndexChange(index)}
            className={`px-4 py-2 mr-2 rounded transition-colors ${
              currentIndex === index
                ? themeMode === "dark"
                  ? "bg-blue-500 text-white"
                  : "bg-blue-600 text-white"
                : themeMode === "dark"
                ? "bg-gray-700"
                : "bg-gray-200"
            }`}
          >
            {image.label}
          </button>
        ))}
      </div>
      <div className="relative h-80">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
          {/* 添加暗色模式下的遮罩层 */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              themeMode === "dark"
                ? "bg-gray-800 bg-opacity-30"
                : "bg-transparent"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};