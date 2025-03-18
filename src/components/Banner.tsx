import { BannerSettings } from '../types';
interface BannerProps {
    settings: BannerSettings;
  }

export function Banner({ settings}: BannerProps ) {
  const {
    backgroundColor,
    textColor,
    heading,
    description,
    imageIndex,
    images
  } = settings;

  return (
    <div className="w-full relative overflow-hidden" style={{ backgroundColor }}>
      {images && images.length > 0 && (
        <div className="absolute inset-0 z-0">
          <img
            src={images[imageIndex]}
            alt="Nature landscape"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: textColor }}>
          {heading}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl" style={{ color: textColor }}>
          {description}
        </p>
      </div>
    </div>
  );
}
