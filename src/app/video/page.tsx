import VideoSection from '../components/VideoSection'

export default function VideoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-3xl aspect-video mb-6">
        <VideoSection youtubeUrl="https://www.youtube.com/watch?v=B7_O-9oOc1o" />
      </div>

      <div className="flex flex-col items-center gap-4 mt-6">
      </div>
    </div>
  )
}