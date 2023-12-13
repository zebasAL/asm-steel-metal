import { useState } from "react"

export default function HeroSlider() {
  const [slide, setSlide] = useState<number>(0)

  const maxSlides = 4

  const handleNext = () => {
    setSlide((prev) => prev === maxSlides ? 0 : prev + 1)
  }

  const handlePrev = () => {
    setSlide((prev) => prev === 0 ? maxSlides: prev - 1)
  }

  return (
    <div id="indicators-carousel" className="relative w-full" data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* <!-- Item 1 --> */}
        <div className={`${slide === 0 ? "hidden" : ""} duration-700 ease-in-out`} data-carousel-item={slide === 0 ? "active" : ""}>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 2 --> */}
        <div className={`${slide === 1 ? "hidden" : ""} duration-700 ease-in-out`} data-carousel-item={slide === 1 ? "active" : ""}>
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 3 --> */}
        <div className={`${slide === 2 ? "hidden" : ""} duration-700 ease-in-out`} data-carousel-item>={slide === 2 ? "active" : ""}
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 4 --> */}
        <div className={`${slide === 3 ? "hidden" : ""} duration-700 ease-in-out`} data-carousel-item={slide === 3 ? "active" : ""}>
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        {/* <!-- Item 5 --> */}
        <div className={`${slide === 4 ? "hidden" : ""} duration-700 ease-in-out`} data-carousel-item>={slide === 4 ? "active" : ""}
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button type="button" onClick={() => setSlide(0)} className={`${slide === 0 ? "bg-white" : "bg-white/30"} w-3 h-3 rounded-full dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" onClick={() => setSlide(1)} className={`${slide === 1 ? "bg-white" : "bg-white/30"} w-3 h-3 rounded-full dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" onClick={() => setSlide(2)} className={`${slide === 2 ? "bg-white" : "bg-white/30"} w-3 h-3 rounded-full dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" onClick={() => setSlide(3)} className={`${slide === 3 ? "bg-white" : "bg-white/30"} w-3 h-3 rounded-full dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`} aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" onClick={() => setSlide(4)} className={`${slide === 4 ? "bg-white" : "bg-white/30"} w-3 h-3 rounded-full dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none`} aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button onClick={handlePrev} type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </span>
      </button>
      <button onClick={handleNext} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </span>
      </button>
    </div>
  )
}