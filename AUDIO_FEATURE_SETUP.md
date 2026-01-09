# Background Music Autoplay Feature - Setup Guide

## Overview
Music will now automatically start playing when users visit the wedding web app, with controls to pause/resume and adjust volume.

## What's Been Implemented

### 1. **useAudioAutoplay Hook** (`src/hooks/useAudioAutoplay.js`)
   - Custom React hook that manages audio playback
   - Handles browser autoplay restrictions intelligently
   - Falls back to play audio on first user interaction if autoplay is blocked
   - Provides methods to control playback and volume
   - Default volume is set to 50%

### 2. **AudioPlayer Component** (`src/components/AudioPlayer.jsx`)
   - Floating control button in bottom-right corner
   - Expandable controls to show:
     - Play/Pause button
     - Volume slider with percentage display
   - Styled with Tailwind CSS for consistent design
   - Responsive and works on mobile devices

### 3. **Integration in App.js**
   - Audio hook initialized in the Home component
   - AudioPlayer component added to the main App
   - Points to `/music/background-music.mp3`

## Next Steps: Add Your Music File

You need to add a background music file to enable this feature:

### Option 1: Add Music File to Public Folder
1. Create a `music` folder in `public/`:
   ```
   public/
   ├── music/
   │   └── background-music.mp3
   ```

2. Place your audio file as `background-music.mp3`
   - Supported formats: MP3, WAV, OGG, M4A
   - Recommended: MP3 format for best browser compatibility
   - File size: Keep under 5MB for quick loading

### Option 2: Use External Audio URL
If you have music hosted externally, modify the audio URL in:
- `src/App.js` line 58: `<AudioPlayer audioUrl="YOUR_URL_HERE" />`
- `src/App.js` line 23: `useAudioAutoplay('YOUR_URL_HERE', true)`

## Features

✅ **Auto-play on Load**: Music starts automatically when page loads (respects browser policies)
✅ **Fallback**: If autoplay is blocked, audio plays on first user interaction (click/touch/key)
✅ **User Controls**: Floating button to toggle play/pause and adjust volume
✅ **Loop Audio**: Music loops continuously for background ambiance
✅ **Volume Control**: Slider to adjust volume from 0-100%
✅ **Responsive**: Works on desktop, tablet, and mobile devices
✅ **Non-intrusive**: Fixed position control doesn't interfere with page content

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Requires user interaction first (browser policy)
- Mobile browsers: Requires user interaction first (browser policy)

## Customization Options

### Change Audio URL
Edit `src/App.js`:
```javascript
<AudioPlayer audioUrl="/path/to/your/audio.mp3" />
```

### Change Default Volume
Edit `src/hooks/useAudioAutoplay.js` line 16:
```javascript
audio.volume = 0.5; // Change to desired volume (0-1)
```

### Change Button Position
Edit `src/components/AudioPlayer.jsx` and modify the className on the button div:
- Change `bottom-6 right-6` to desired position
- Example: `bottom-6 left-6` for bottom-left

### Styling
The AudioPlayer uses Tailwind CSS classes. Customize colors and styling in `src/components/AudioPlayer.jsx`.

## Troubleshooting

**Audio doesn't play on load?**
- Check browser console for errors
- Verify audio file exists at the correct path
- Some browsers block autoplay - user interaction will trigger playback

**Audio player button not visible?**
- Check z-index (currently set to 50)
- Verify Tailwind CSS is loaded
- Check browser console for any errors

**Audio quality issues?**
- Use a high-quality MP3 file
- Test with different audio formats if needed
- Check file compression settings
