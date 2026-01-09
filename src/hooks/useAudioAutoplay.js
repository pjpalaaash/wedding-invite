import { useEffect, useRef, useState } from 'react'

/**
 * Hook to handle audio autoplay with user interaction fallback
 * @param {string} audioUrl - URL to the audio file
 * @param {boolean} shouldPlay - Whether audio should play
 */
export const useAudioAutoplay = (audioUrl, shouldPlay = true) => {
  const audioRef = useRef(null);
  const hasInteracted = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [requiresUserAction, setRequiresUserAction] = useState(false);

  useEffect(() => {
    if (!audioUrl) return;

    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      const audio = new Audio(audioUrl);
      audio.loop = true;
      audio.volume = 0.5; // Set default volume to 50%
      audioRef.current = audio;
    }

    const audio = audioRef.current;
    if (!shouldPlay) return;

    // helpers
    const tryPlay = async () => {
      try {
        await audio.play();
        hasInteracted.current = true;
        setRequiresUserAction(false);
      } catch (err) {
        // autoplay blocked
        console.log('Autoplay blocked:', err?.message || err);
        setRequiresUserAction(true);
      }
    };

    // Try to play immediately if page already loaded otherwise wait for load
    if (document.readyState === 'complete') {
      tryPlay();
    } else {
      const onLoad = () => tryPlay();
      window.addEventListener('load', onLoad, { once: true });
      // ensure removal in cleanup below
    }

    // user gesture handler
    const handleUserGesture = async () => {
      if (hasInteracted.current) return;
      try {
        await audio.play();
        hasInteracted.current = true;
        setRequiresUserAction(false);
      } catch (err) {
        console.log('Error playing audio on user gesture:', err?.message || err);
      }
    };

    // attach listeners for common gestures
    document.addEventListener('click', handleUserGesture, { once: true });
    document.addEventListener('touchstart', handleUserGesture, { once: true });
    document.addEventListener('pointerdown', handleUserGesture, { once: true });
    document.addEventListener('mousedown', handleUserGesture, { once: true });
    document.addEventListener('keydown', handleUserGesture, { once: true });
    window.addEventListener('scroll', handleUserGesture, { once: true });
    window.addEventListener('wheel', handleUserGesture, { once: true });

    // update play/pause state via audio events
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('ended', onEnded);

    return () => {
      try { document.removeEventListener('click', handleUserGesture); } catch (e) {}
      try { document.removeEventListener('touchstart', handleUserGesture); } catch (e) {}
      try { document.removeEventListener('pointerdown', handleUserGesture); } catch (e) {}
      try { document.removeEventListener('mousedown', handleUserGesture); } catch (e) {}
      try { document.removeEventListener('keydown', handleUserGesture); } catch (e) {}
      try { window.removeEventListener('scroll', handleUserGesture); } catch (e) {}
      try { window.removeEventListener('wheel', handleUserGesture); } catch (e) {}
      try { audio.removeEventListener('play', onPlay); } catch (e) {}
      try { audio.removeEventListener('pause', onPause); } catch (e) {}
      try { audio.removeEventListener('ended', onEnded); } catch (e) {}
    };
  }, [audioUrl, shouldPlay]);

  return {
    play: () => audioRef.current?.play(),
    pause: () => audioRef.current?.pause(),
    setVolume: (volume) => {
      if (audioRef.current) {
        audioRef.current.volume = Math.max(0, Math.min(1, volume));
      }
    },
    setLoop: (loop) => {
      if (audioRef.current) {
        audioRef.current.loop = loop;
      }
    },
    getCurrentTime: () => audioRef.current?.currentTime || 0,
    getDuration: () => audioRef.current?.duration || 0,
    isPlaying,
    requiresUserAction,
  };
};

export default useAudioAutoplay;
