/* eslint-disable */
import { Carousel, IconButton } from "@material-tailwind/react";
import useResponsive from "~/hooks/useResponsive";
import VideoPlayer from "../ui/VideoPlayer";

export default function Hero() {
  const isSmall = useResponsive(false, 'down', 'sm')

  if (isSmall) return null

  return (
    <>
    <Carousel
      className="rounded-t-none w-full min-h-[40vw] max-h-[650px] overflow-hidden"
      autoplay
      loop
      autoplayDelay={5000}
      transition={{ type: "tween", duration: .7 }}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-0 -translate-y-2/4 min-h-[650px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-0 -translate-y-2/4 h-full min-h-[650px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/899682027?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          title="ASM_Drone"
        >
        </iframe>
      </div>


      {/* <VideoPlayer src={"https://117vod-adaptive.akamaized.net/exp=1704337414~acl=%2F4541ad0c-1298-4cdd-b4ab-d10cc6b409c4%2F%2A~hmac=2c24c65fb0fbd3ad4b0666a3b34ac640438eb7cbea60ff06c6088f82ddfe8b0b/4541ad0c-1298-4cdd-b4ab-d10cc6b409c4/sep/video/12029392,1f0f1af5,2d1f18bc,c6188043,e8c6307d/audio/41c40b42,4922aa6b,fddb0214/master.json?base64_init=1&query_string_ranges=1"} /> */}

      {/* <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-[40vw] w-full"
      /> */}
    </Carousel>
      <script src="https://player.vimeo.com/api/player.js"></script>
</>
  );
}