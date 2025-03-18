import { useState } from 'react';
import { Banner } from './components/Banner';
import { ControlPanel } from './components/ControlPanel';
import { defaultBannerSettings } from './config/bannerDefaults';
import { BannerSettings } from './types';

export default function App() {
  const [bannerSettings, setBannerSettings] = useState<BannerSettings>(defaultBannerSettings);

  const handlers = {
    updateSettings: (newSettings: Partial<BannerSettings>) =>
      setBannerSettings((prev) => ({
        ...prev,
        ...newSettings,
      })),

    addImage: (newImageUrl: string) =>
      setBannerSettings((prev) => ({
        ...prev,
        images: [...prev.images, newImageUrl],
      })),

    removeImage: (index: number) =>
      setBannerSettings((prev) => {
        const newImages = prev.images.filter((_, i) => i !== index);
        return {
          ...prev,
          images: newImages,
          imageIndex: Math.min(prev.imageIndex, newImages.length - 1),
        };
      }),
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <Banner settings={bannerSettings} />
      <main className="container mx-auto px-4 py-8">
        <ControlPanel
          settings={bannerSettings}
          updateSettings={handlers.updateSettings}
          onAddImage={handlers.addImage}
          onRemoveImage={handlers.removeImage}
        />
      </main>
    </div>
  );
}
