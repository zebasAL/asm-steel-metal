import { useRef, useEffect } from "react"

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.playbackRate = 2.0;
    }
  }, []);

  return (
    <video controls={false} autoPlay loop muted width="640" height="360" className="w-full h-full" ref={videoRef}>
      <source src={src} type="videos/mp4" />
      Tu navegador no soporta el tag de video.
    </video>
  )
}