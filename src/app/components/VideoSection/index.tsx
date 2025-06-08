// 'use client';
// import React, { useEffect, useRef, useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';

// declare global {
//   interface Window {
//     YT: {
//       Player: unknown;
//       PlayerState: unknown;
//     };
//     onYouTubeIframeAPIReady: () => void;
//   }
// }

// type VideoSectionProps = {
//   youtubeUrl: string;
// };

// const convertToVideoId = (url: string | null): string => {
//   if (!url || typeof url !== 'string') return '';

//   try {
//     const fixedUrl = url.startsWith('http') ? url : `https://${url}`;
//     const urlObj = new URL(fixedUrl);
//     let videoId = '';

//     if (urlObj.hostname === 'youtu.be') {
//       videoId = urlObj.pathname.slice(1);
//     } else if (
//       urlObj.hostname.includes('youtube.com') &&
//       urlObj.searchParams.get('v')
//     ) {
//       videoId = urlObj.searchParams.get('v')!;
//     }

//     return videoId;
//   } catch {
//     return '';
//   }
// };

// const VideoSection: React.FC<VideoSectionProps> = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const urlVideo = searchParams.get('urlVideo');
//   const videoId = convertToVideoId(urlVideo);

//   const [videoEnded, setVideoEnded] = useState(false);
//   type YouTubePlayer = {
//     destroy: () => void;
//   };
//   const playerRef = useRef<YouTubePlayer | null>(null);

//   useEffect(() => {
//     if (!videoId) return;

//     const existingScript = document.getElementById('youtube-api');

//     const createPlayer = () => {
//       if (playerRef.current) {
//         playerRef.current.destroy();
//       }

//       const YT = window.YT as typeof window.YT;
//       playerRef.current = new (YT as any).Player('yt-player', {
//         videoId,
//         events: {
//           onStateChange: (event: any) => {
//             if (event.data === (YT as any).PlayerState.ENDED) {
//               setVideoEnded(true);
//             }
//           },
//         },
//       });
//     };

//     if (existingScript && window.YT && window.YT.Player) {
//       createPlayer();
//     } else {
//       const tag = document.createElement('script');
//       tag.id = 'youtube-api';
//       tag.src = 'https://www.youtube.com/iframe_api';
//       document.body.appendChild(tag);

//       window.onYouTubeIframeAPIReady = () => {
//         createPlayer();
//       };
//     }

//     return () => {
//       if (playerRef.current) {
//         playerRef.current.destroy();
//       }
//     };
//   }, [videoId]);

//   const handleConclusao = () => {
//     router.push('/modulo');
//   };

//   const handleVoltar = () => {
//     router.push('/modulo');
//   };

//   if (!videoId) {
//     return (
//       <p className="text-red-600 font-semibold text-lg mt-8 text-center">
//         URL do vídeo inválida
//       </p>
//     );
//   }

//   return (
//     <section
//       className='max-w-2xl px-4 py-4 bg-white dark:bg-gray-900 flex flex-col items-center min-h-screen'
//     >
//       <button
//         onClick={handleVoltar}
//         className={`
//           self-start mb-6 flex items-center gap-2
//           px-5 py-3 bg-indigo-600 hover:bg-indigo-700
//           rounded-full font-semibold
//           shadow-lg transition-transform transform hover:-translate-y-1 text-white
//         `}
//         aria-label="Voltar para módulos"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//         </svg>
//         Voltar
//       </button>

//       <h2 className="text-3xl font-extrabold mb-6 text-center drop-shadow-lg">
//         Assista ao vídeo e complete a tarefa
//       </h2>

//       <div
//         id="yt-player"
//         className={`
//           w-full aspect-video rounded-2xl shadow-2xl
//           border-4 border-indigo-500
//           overflow-hidden
//           transition-shadow duration-500
//           hover:shadow-[0_0_40px_#8b5cf6]
//         `}
//       ></div>

//       {videoEnded && (
//         <div className="w-full mt-6">
//           <div className="h-4 rounded-full bg-indigo-300 overflow-hidden mb-4 shadow-inner">
//             <div
//               className="h-full bg-green-400 animate-progressBar"
//               style={{ width: '100%' }}
//             ></div>
//           </div>
//           <p className="text-green-300 font-semibold mb-4 text-center drop-shadow-md">
//             Vídeo concluído! Você pode marcar como finalizado.
//           </p>
//         </div>
//       )}

//       <button
//         disabled={!videoEnded}
//         onClick={handleConclusao}
//         className={`
//           mt-2 px-8 py-3 rounded-full
//           font-bold text-lg
//           transition
//           shadow-lg
//           focus:outline-none
//           ${videoEnded
//             ? 'bg-green-500 hover:bg-green-600 active:scale-95 cursor-pointer'
//             : 'bg-gray-400 cursor-not-allowed'}
//         `}
//         aria-disabled={!videoEnded}
//       >
//         {videoEnded ? (
//           <>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="inline-block h-6 w-6 mr-2 -mt-0.5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={3}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//             </svg>
//             Marcar como concluído
//           </>
//         ) : (
//           'Assista até o fim para concluir'
//         )}
//       </button>

//       <style jsx>{`
//         @keyframes progressBar {
//           0% {
//             width: 0%;
//           }
//           100% {
//             width: 100%;
//           }
//         }
//         .animate-progressBar {
//           animation: progressBar 2s ease-out forwards;
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease forwards;
//         }
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(15px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

declare global {
  interface Window {
    YT: {
      Player: new (elementId: string, options: {
        videoId: string;
        events: {
          onStateChange: (event: YTOnStateChangeEvent) => void;
        };
      }) => YouTubePlayer;
      PlayerState: {
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

interface VideoSectionProps {
  youtubeUrl: string;
}

type YTOnStateChangeEvent = {
  data: number;
};

type YouTubePlayer = {
  destroy: () => void;
};

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

const VideoSection: React.FC<VideoSectionProps> = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlVideo = searchParams.get('urlVideo');
  const videoId = convertToVideoId(urlVideo);

  const [videoEnded, setVideoEnded] = useState(false);
  const playerRef = useRef<YouTubePlayer | null>(null);

  useEffect(() => {
    if (!videoId) return;

    const existingScript = document.getElementById('youtube-api');

    const createPlayer = () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }

      const YT = window.YT;
      playerRef.current = new YT.Player('yt-player', {
        videoId,
        events: {
          onStateChange: (event: YTOnStateChangeEvent) => {
            if (event.data === YT.PlayerState.ENDED) {
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

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const handleConclusao = () => {
    router.push('/modulo');
  };

  const handleVoltar = () => {
    router.push('/modulo');
  };

  if (!videoId) {
    return (
      <p className="text-red-600 font-semibold text-lg mt-8 text-center">
        URL do vídeo inválida
      </p>
    );
  }

  return (
    <section className='max-w-2xl px-4 py-4 bg-white dark:bg-gray-900 flex flex-col items-center min-h-screen'>
      <button
        onClick={handleVoltar}
        className="self-start mb-6 flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold shadow-lg transition-transform transform hover:-translate-y-1 text-white"
        aria-label="Voltar para módulos"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar
      </button>

      <h2 className="text-3xl font-extrabold mb-6 text-center drop-shadow-lg">
        Assista ao vídeo e complete a tarefa
      </h2>

      <div
        id="yt-player"
        className="w-full aspect-video rounded-2xl shadow-2xl border-4 border-indigo-500 overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_40px_#8b5cf6]"
      ></div>

      {videoEnded && (
        <div className="w-full mt-6">
          <div className="h-4 rounded-full bg-indigo-300 overflow-hidden mb-4 shadow-inner">
            <div
              className="h-full bg-green-400 animate-progressBar"
              style={{ width: '100%' }}
            ></div>
          </div>
          <p className="text-green-300 font-semibold mb-4 text-center drop-shadow-md">
            Vídeo concluído! Você pode marcar como finalizado.
          </p>
        </div>
      )}

      <button
        disabled={!videoEnded}
        onClick={handleConclusao}
        className={`mt-2 px-8 py-3 rounded-full font-bold text-lg transition shadow-lg focus:outline-none ${
          videoEnded
            ? 'bg-green-500 hover:bg-green-600 active:scale-95 cursor-pointer'
            : 'bg-gray-400 cursor-not-allowed'
        }`}
        aria-disabled={!videoEnded}
      >
        {videoEnded ? (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-6 w-6 mr-2 -mt-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Marcar como concluído
          </>
        ) : (
          'Assista até o fim para concluir'
        )}
      </button>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progressBar {
          animation: progressBar 2s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;