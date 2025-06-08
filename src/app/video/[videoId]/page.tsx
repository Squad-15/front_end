import VideoSection from "@/app/components/VideoSection";

interface VideoPageProps {
  params: {
    videoId: string;
  };
}

export default function VideoPage({ params }: VideoPageProps) {
  const { videoId } = params;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <VideoSection youtubeUrl={youtubeUrl} />
    </div>
  );
}

