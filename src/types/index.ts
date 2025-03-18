export type BannerSettings = {
    backgroundColor: string;
    textColor: string;
    heading: string;
    description: string;
    imageIndex: number;
    images: string[];
    index?: number
  }

  export type ControlPanelProps = {
    settings: BannerSettings;
    updateSettings: (newSettings: Partial<BannerSettings>) => void;
    onAddImage: (imageUrl: string) => void;
    onRemoveImage: (index: number) => void;
  }