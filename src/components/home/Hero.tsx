import { useState } from 'react';
import { m } from 'framer-motion'
import useResponsive from "~/hooks/useResponsive";
import VideoPlayer from "../ui/VideoPlayer";
import { MotionViewport, varFade } from '../../components/animate'
import slideShowStyles from "~/styles/slideshowText.module.css"

export default function Hero() {
  const isSmall = useResponsive(false, 'down', 'sm')

  if (isSmall) return null

  return (
    <>
      {/* <Carousel
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
    > */}
      {/* <VideoPlayer src={"/videos/ASM_Drone.mp4"} /> */}

      <MotionViewport>
        <m.div initial variants={varFade().inDown} whileInView={{ opacity: 0 }}>
          <h1 className="absolute animate-fade-in-left animate-once text-white text-6xl top-[40%] left-10 font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            LO MEJOR EN
          <SlideShowText />

          </h1>
        </m.div>
      </MotionViewport>

      <VideoPlayer src={"https://i.imgur.com/3nc1jty.mp4"} />

      {/* <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-[40vw] w-full"
      /> */}
      {/* </Carousel> */}
    </>
  );
}


// ----------------------------------------------------------

const SlideShowText = () => {
  const [words, setWords] = useState(["PRECIOS", "CALIDAD", "SERVICIO"]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setWords(prevWords => {
  //       const newWords = [...prevWords];
  //       newWords.push(newWords.shift());
  //       return newWords;
  //     });
  //   }, 1000); // Cambia la duración del intervalo según sea necesario

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div className={`${slideShowStyles.words} text-[#45bde9] h-[60px]`}>
      <span>
        {words[0]}
      </span>
      <span className="hidden">
        {words[1]}
      </span>
      <span className="hidden">
        {words[2]}
      </span>
    </div>
  );
}