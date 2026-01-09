import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Audio Player Control Component
 * Allows users to control background music playback and volume
 */
const AudioPlayer = ({ play, pause, setVolume, isPlaying }) => {
  const [volume, setVolumeLocal] = useState(50);
  const [showControls, setShowControls] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value, 10);
    setVolumeLocal(newVolume);
    if (setVolume) setVolume(newVolume / 100);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Controls */}
      {showControls && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4 min-w-[250px] animate-in fade-in duration-200">
          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={togglePlayPause}
              className="flex-1 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors font-semibold"
            >
              {isPlaying ? '⏸ Pause Music' : '▶ Play Music'}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <VolumeX size={18} className="text-gray-600 dark:text-gray-300" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${volume}%, #d1d5db ${volume}%, #d1d5db 100%)`
              }}
            />
            <Volume2 size={18} className="text-gray-600 dark:text-gray-300" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-8 text-right">
              {volume}%
            </span>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 transform hover:scale-110"
        title="Toggle Music Controls"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
        </svg>
      </button>
    </div>
  );
};

export default AudioPlayer;
