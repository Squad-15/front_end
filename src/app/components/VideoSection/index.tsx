'use client';
import React from "react";

interface VideoSectionProps {
  youtubeUrl: string;
}

const convertToEmbedUrl = (url: string): string => {
  if (!url || typeof url !== "string") return "";

  try {
    const fixedUrl = url.startsWith("http") ? url : `https://${url}`;
    const urlObj = new URL(fixedUrl);
    let videoId = "";

    if (urlObj.hostname === "youtu.be") {
      videoId = urlObj.pathname.slice(1);
    } else if (
      urlObj.hostname.includes("youtube.com") &&
      urlObj.searchParams.get("v")
    ) {
      videoId = urlObj.searchParams.get("v")!;
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  } catch {
    return "";
  }
};

const VideoSection: React.FC<VideoSectionProps> = ({ youtubeUrl }) => {
  const embedUrl = convertToEmbedUrl(youtubeUrl);

  if (!embedUrl) {
    return <p className="text-red-600">Invalid YouTube URL</p>;
  }

  return (
    <section className="max-w-2xl px-0 py-0 mx-auto bg-white dark:bg-gray-900">
      <iframe
        className="w-full h-64 my-10 rounded-lg md:h-96"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoSection;
