"use client";

import { useState } from 'react';

const ModalVideo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Função para converter o link de watch para embed
  const convertToEmbedUrl = (url: string) => {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|(?:v|e(?:mbed)?)\/)([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return '';
  };

  // Exemplo de link do YouTube (pode ser modificado conforme a entrada do usuário)
  const youtubeLink = "https://www.youtube.com/watch?v=B7_O-9oOc1o";  // Link no formato "watch"
  const embedUrl = convertToEmbedUrl(youtubeLink);  // Converte o link para o formato embed

  return (
    <div className="relative font-inter antialiased">
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            {/* Modal video component */}
            <div>
              {/* Video thumbnail */}
              <button
                className="relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 rounded-3xl group"
                onClick={() => setModalOpen(true)}
                aria-controls="modal"
                aria-label="Watch the video"
              >
                <img
                  className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out"
                  src="https://cruip-tutorials.vercel.app/modal-video/modal-video-thumb.jpg"
                  width="768"
                  height="432"
                  alt="Modal video thumbnail"
                />
                {/* Play icon */}
                <svg
                  className="absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                >
                  <circle className="fill-white" cx="36" cy="36" r="36" fillOpacity=".8" />
                  <path
                    className="fill-indigo-500 drop-shadow-2xl"
                    d="M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z"
                  />
                </svg>
              </button>
              {/* End: Video thumbnail */}

              {/* Modal backdrop */}
              {modalOpen && (
                <div
                  className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
                  onClick={() => setModalOpen(false)}
                />
              )}
              {/* End: Modal backdrop */}

              {/* Modal dialog */}
              {modalOpen && (
                <div
                  id="modal"
                  className="fixed inset-0 z-[99999] flex px-4 md:px-6 py-6"
                  role="dialog"
                  aria-modal="true"
                >
                  <div className="max-w-5xl mx-auto h-full flex items-center">
                    <div
                      className="w-full max-h-full rounded-3xl shadow-2xl bg-black overflow-hidden"
                      onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
                    >
                      {/* YouTube video */}
                      {embedUrl && (
                        <div className="relative" style={{ paddingBottom: '56.25%' /* Aspect Ratio 16:9 */ }}>
                          <iframe
                            className="absolute inset-0 w-full h-full"
                            src={embedUrl}
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {/* End: Modal dialog */}
            </div>
            {/* End: Modal video component */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModalVideo;
