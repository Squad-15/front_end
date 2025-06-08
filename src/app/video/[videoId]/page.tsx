import VideoSection from "@/app/components/VideoSection";

export default async function VideoPage(props: { params: Promise<{ videoId: string }> }) {
  const { videoId } = await props.params;

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <VideoSection youtubeUrl={youtubeUrl} />
    </div>
  );
}

