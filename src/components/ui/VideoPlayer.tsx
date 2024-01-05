import { useRef, useEffect } from "react"
import useTranslation from "next-translate/useTranslation";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { lang } = useTranslation()

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.playbackRate = 2.0;
    }
  }, []);

  return (
    <video
      // poster="/asm-front.jpg"
      controls={false}
      autoPlay
      loop
      muted
      width="640"
      height="360"
      className="w-full h-full"
      ref={videoRef}
    >
      <source src={src} type="video/mp4" />
      {lang === "en" ? "Your browser does not support the video tag." : "Tu navegador no soporta el tag de video."}
    </video>
  )
}