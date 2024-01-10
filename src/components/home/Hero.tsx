import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import VideoPlayer from "../ui/VideoPlayer";
import slideShowStyles from "~/styles/slideshowText.module.css"
import Image from 'next/image';

export default function Hero() {
  const { lang } = useTranslation()

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

      <div>
        <h1
          className="absolute animate-fade-in-left animate-once text-white text-6xl top-[20%] sm:top-[30%] lg:top-[40%] left-[10px] sm:left-[20px] md:left-[30px] lg:left-[40px] text-[20px] sm:text-[20px] md:text-[40px] lg:text-[60px] font-bold"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
        >
          {lang === "es" ? "LO MEJOR EN" : "THE BEST IN"}
          <SlideShowText />
        </h1>
      </div>

      <div className="absolute flex flex-col sm:flex-row right-0 sm:right-[20px] top=[30px] sm:top-[80px]">
        <Image width={300} height={300} src="/images/certificacion.png" alt="Bureau Veritas Certification"className='w-[75px] h-[50px] sm:w-[180px] sm:h-[130px] lg:w-[300px] lg:h-[200px]' />
        <Image width={100} height={100} src="/images/hardox_logo.png" alt="Hardox logo" className='m-auto w-[25px] h-[25px] sm:w-[60px] sm:h-[60px] lg:w-[100px] lg:h-[100px]' />
      </div>

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
  const { lang } = useTranslation()

  const [words, setWords] = useState(lang === "es" ? ["PRECIOS", "CALIDAD", "SERVICIO"] : ["PRICES", "QUALITY", "SERVICE"]);

  useEffect(() => {
    setWords(lang === "es" ? ["PRECIOS", "CALIDAD", "SERVICIO"] : ["PRICES", "QUALITY", "SERVICE"])
  }, [lang]);

  return (
    <div className={slideShowStyles.words} style={{ color: "#45bde9", fontSize: "60px", height: "80px" }}>
      <span className="sm:left-[20px] md:left-[30px] lg:left-[40px] text-[20px] sm:text-[20px] md:text-[40px] lg:text-[60px]">
        {words[0]}
      </span>
      <span className="hidden sm:left-[20px] md:left-[30px] lg:left-[40px] text-[20px] sm:text-[20px] md:text-[40px] lg:text-[60px]">
        {words[1]}
      </span>
      <span className="hidden sm:left-[20px] md:left-[30px] lg:left-[40px] text-[20px] sm:text-[20px] md:text-[40px] lg:text-[60px]">
        {words[2]}
      </span>
    </div>
  );
}