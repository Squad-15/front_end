'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const convertToVideoId = (url: string | null): string => {
  if (!url || typeof url !== 'string') return '';

  try {
    const fixedUrl = url.startsWith('http') ? url : `https://${url}`;
    const urlObj = new URL(fixedUrl);
    let videoId = '';

    if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.slice(1);
    } else if (
      urlObj.hostname.includes('youtube.com') &&
      urlObj.searchParams.get('v')
    ) {
      videoId = urlObj.searchParams.get('v')!;
    }

    return videoId;
  } catch {
    return '';
  }
};

const VideoSection: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlVideo = searchParams.get('urlVideo');
  const videoId = convertToVideoId(urlVideo);

  const [videoEnded, setVideoEnded] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoId) return;

    const existingScript = document.getElementById('youtube-api');

    const createPlayer = () => {
      if (playerRef.current) {
        // Se já existe player, destrói ele antes de criar novo
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player('yt-player', {
        videoId,
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setVideoEnded(true);
            }
          },
        },
      });
    };

    if (existingScript && window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement('script');
      tag.id = 'youtube-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => {
        createPlayer();
      };
    }

    // Cleanup: destrói o player quando o componente desmontar
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const handleConclusao = () => {
    router.push('/modulo');
  };

  if (!videoId) {
    return <p className="text-red-600">URL do vídeo inválida</p>;
  }

  return (
    <section className="max-w-2xl px-4 py-4 mx-auto bg-white dark:bg-gray-900 flex flex-col items-center">
      <div className="w-full my-10">
        <div id="yt-player" className="w-full h-64 md:h-96 rounded-lg"></div>
      </div>

      <button
        disabled={!videoEnded}
        onClick={handleConclusao}
        className={`px-6 py-2 rounded text-white transition ${
          videoEnded ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Marcar como concluído
      </button>
    </section>
  );
};

export default VideoSection;
