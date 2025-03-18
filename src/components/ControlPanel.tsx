import React, { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, TrashIcon, UploadIcon } from 'lucide-react';
import { ControlPanelProps } from '../types';

export function ControlPanel({
  settings,
  updateSettings,
  onAddImage,
  onRemoveImage
}: ControlPanelProps) {
  const [newImageUrl, setNewImageUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleHeadingChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateSettings({ heading: e.target.value });

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    updateSettings({ description: e.target.value });

  const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateSettings({ backgroundColor: e.target.value });

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    updateSettings({ textColor: e.target.value });

  const changeImage = (direction: 'next' | 'prev') => {
    const newIndex =
      direction === 'next'
        ? (settings.imageIndex + 1) % settings.images.length
        : (settings.imageIndex - 1 + settings.images.length) % settings.images.length;
    updateSettings({ imageIndex: newIndex });
  };

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl) return;

    try {
      new URL(newImageUrl);
      onAddImage(newImageUrl);
      setNewImageUrl('');
    } catch {
      alert('Please enter a valid image URL');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (typeof dataUrl === 'string') {
        onAddImage(dataUrl);
      }
    };
    reader.onerror = () => alert('Error reading file');
    reader.readAsDataURL(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Banner Controls</h2>
      <div className="space-y-6">
        {/* Heading Input */}
        <div>
          <label htmlFor="heading" className="block text-sm font-medium text-gray-700 mb-1">
            Banner Heading
          </label>
          <input
            type="text"
            id="heading"
            value={settings.heading}
            onChange={handleHeadingChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description Input */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description Text
          </label>
          <textarea
            id="description"
            value={settings.description}
            onChange={handleDescriptionChange}
            rows={4}
            className="resize-none w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Background Color */}
        <div>
          <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 mb-1">
            Background Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              id="bgColor"
              value={settings.backgroundColor}
              onChange={handleBgColorChange}
              className="h-10 w-20"
            />
            <span className="text-sm text-gray-500">{settings.backgroundColor}</span>
          </div>
        </div>

        {/* Text Color */}
        <div>
          <label htmlFor="textColor" className="block text-sm font-medium text-gray-700 mb-1">
            Text Color
          </label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              id="textColor"
              value={settings.textColor}
              onChange={handleTextColorChange}
              className="h-10 w-20"
            />
            <span className="text-sm text-gray-500">{settings.textColor}</span>
          </div>
        </div>

        {/* Manage Images */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Manage Images
          </label>
          <div className="mb-4 space-y-2">
            {settings.images.map((url, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="flex-1 truncate text-gray-600">{url}</div>
                <button
                  onClick={() => onRemoveImage(index)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded"
                  aria-label="Remove image"
                >
                  <TrashIcon size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {/* File Upload */}
            <div className="flex gap-2">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                ref={fileInputRef}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="flex-1 flex items-center justify-center px-4 py-2 border-2 border-dashed border-gray-300 rounded-md hover:border-gray-400 cursor-pointer"
              >
                <UploadIcon size={20} className="mr-2 text-gray-500" />
                <span className="text-sm text-gray-600">Upload from device</span>
              </label>
            </div>

            {/* Image URL Input */}
            <form onSubmit={handleAddImage} className="flex gap-2">
              <input
                type="url"
                value={newImageUrl}
                onChange={(e) => setNewImageUrl(e.target.value)}
                placeholder="Enter image URL"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <PlusIcon size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Image Navigation */}
        {settings.images.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Image
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => changeImage('prev')}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                aria-label="Previous image"
              >
                <ChevronLeftIcon size={20} />
              </button>
              <div className="text-sm text-gray-600">
                Image {settings.imageIndex + 1} of {settings.images.length}
              </div>
              <button
                onClick={() => changeImage('next')}
                className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                aria-label="Next image"
              >
                <ChevronRightIcon size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
