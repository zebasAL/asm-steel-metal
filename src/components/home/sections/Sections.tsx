import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Carousel } from "@material-tailwind/react";
import { useRef } from "react";
import { useRouter } from 'next/router';
import { SectionProduct } from "~/mock/products/sections";
import { ImgWithBlurredCaption } from "~/components/ui"


export default function Sections({ sections }: { sections: SectionProduct[] }) {
  const { t, lang } = useTranslation('home')

  const carouselRef = useRef<HTMLSpanElement>(null)

  return (
    <div className="relative backdrop-blur-20 bg-gradient-to-r from-gray-300 via-gray-50 to-white py-0 md:py-[100px]">

      <div className="flex flex-col lg/2:flex-row items-center text-sm font-medium text-gray-500 dark:text-gray-400 pb-[10px] md:pb-[20px] mx-[10px] sm:mx-20">
        <h3 className="mt-10 lg:mt-0 text-2xl md:text-3xl lg:text-4xl mb-[0] text-center md:text-left items-center text-black w-auto whitespace-normal md:whitespace-nowrap">
          {t('featured-products')}
        </h3>
      </div>

      <Carousel
        loop
        // autoplay
        // autoplayDelay={10000}
        color="black"
        key={0}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                itemID="tabs"
                ref={i === 0 ? carouselRef : null}
                tabIndex={i}
                key={i}
                className={`
                    block h-1 cursor-pointer rounded-2xl transition-all content-[''] bg-black
                    ${activeIndex === i ? "w-8" : "w-4"}
                  `}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="mx-[10px] md:mx-[50px] grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10">
          {sections.map((section: SectionProduct) => (
            <Link
              key={section.title}
              href={"/sections/" + section.title}
              hrefLang={lang}
              className="relative group h-[300px] lg:h-96 w-full rounded-xl hover:shadow-lg hover:shadow-gray-500 transition group cursor-pointer"
            >
              <ImgWithBlurredCaption
                image={section.image_primary}
                secondaryImage={section.image_secondary}
                alt={`section-${section}`}
                title={section.title}
              />
            </Link>
          ))}
        </div>
      </Carousel>

      <div className="hidden md:block">
        <div
          className="absolute z-1 bottom-0 left-0 h-[60px] w-1/2 bg-gradient-to-r from-gray-700 via-gray-300 to-white bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <div
          className="absolute z-2 bottom-0 left-0 w-1/2 h-[40px] bg-gradient-to-r from-gray-200 via-gray-300 to-white bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
          }}
        />
        <div
          className="absolute z-3 bottom-[-1px] left-0 w-1/2 h-4 bg-white overflow-clip"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
          }}
        />

        <div
          className="absolute z-1 bottom-0 right-0 h-[60px] w-1/2 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        />
        <div
          className="absolute z-2 bottom-0 right-0 w-1/2 h-[40px] bg-gradient-to-r from-gray-50 via-gray-50 to-gray-100 bg-opacity-100 backdrop-blur-20"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        />
        <div
          className="absolute z-3 bottom-[-1px] right-0 w-1/2 h-4 bg-white overflow-clip"
          style={{
            clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
            transform: 'scaleX(-1)'
          }}
        />
      </div>
    </div>
  )
}