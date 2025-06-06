'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation'; // importar useRouter

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
  const router = useRouter(); // chama useRouter
  const urlVideo = searchParams.get('urlVideo');
  const videoId = convertToVideoId(urlVideo);

  const [videoEnded, setVideoEnded] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!videoId) return;

    // Carrega a API do YouTube (apenas uma vez)
    const existingScript = document.getElementById('youtube-api');
    if (!existingScript) {
      const tag = document.createElement('script');
      tag.id = 'youtube-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    // Callback quando a API estiver pronta
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('yt-player', {
        videoId,
        events: {
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              setVideoEnded(true); // libera botão
            }
          },
        },
      });
    };
  }, [videoId]);

  const handleConclusao = () => {
    // Aqui você redireciona para a página desejada
    router.push('/modulo'); // troque "/modulo" pela rota que quiser
  };

  if (!videoId) {
    return <p className="text-red-600">URL do vídeo inválida</p>;
  }

  return (
    <section className="max-w-2xl px-4 py-4 mx-auto bg-white dark:bg-gray-900 flex flex-col items-center">
      <div ref={playerRef} className="w-full my-10">
        <div id="yt-player" className="w-full h-64 md:h-96 rounded-lg"></div>
      </div>

      <button
        disabled={!videoEnded}
        onClick={handleConclusao} // chama a função aqui
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
