import React, { useState } from "react";

interface ImageInfo {
  src: string;
  buttonText: string;
}

interface ImageSwitcherProps {
  images: ImageInfo[];
  themeMode: "light" | "dark";
}

export const ImageSwitcher: React.FC<ImageSwitcherProps> = ({
  images,
  themeMode,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex space-x-4 mb-8">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`py-2 px-6 rounded-full text-lg font-semibold transition-all duration-300\n              ${
              currentImageIndex === index
                ? themeMode === "dark"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-700 text-white"
                : themeMode === "dark"
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {image.buttonText}
          </button>
        ))}
      </div>
      <div
        className={`rounded-lg overflow-hidden shadow-lg p-4 h-80 flex items-center justify-center w-full\n          ${
          themeMode === "dark" ? "bg-gray-700" : "bg-gray-100"
        }
        `}
      >
        <img
          src={images[currentImageIndex].src}
          alt={`Diagram ${currentImageIndex + 1}`}
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
};
