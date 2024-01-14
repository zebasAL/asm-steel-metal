import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { Carousel, Typography } from "@material-tailwind/react";
import { useRef, useState, useEffect } from "react";
import { distributeItemsInCarouselColumns } from "~/utils/formatItemsForCarousel";
import { SectionProduct } from "~/mock/products/sections";
import { ImgWithBlurredCaption } from "~/components/ui"

export default function Sections({ sections }: { sections: SectionProduct[] }) {
  const { t, lang } = useTranslation('home')

  return (
    <div className="relative py-0 md:py-[100px]" style={{ background: 'linear-gradient(to right, #e0e0e0, #fafafa, #ffffff)' }}>

      <div className="flex flex-col lg/2:flex-row items-center text-sm font-medium text-gray-500 dark:text-gray-400 pb-[10px] md:pb-[20px] mx-[10px] sm:mx-20">
        <h3 className="mt-10 lg:mt-0 text-2xl md:text-3xl lg:text-4xl mb-[0] text-center md:text-left items-center text-black w-auto whitespace-normal md:whitespace-nowrap">
          {t('featured-products')}
        </h3>
      </div>

      <SectionsCarrousel sections={sections} />

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
    </div >
  )
}

// -----------------------------------------------------------------------------

function SectionsCarrousel({ sections }: { sections: SectionProduct[] }) {
  const sectionsGroup = distributeItemsInCarouselColumns(sections);

  const [elements, setElements] = useState<JSX.Element[]>([])

  const carouselRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const itemsList = (sectionsGroup ?? []).map((group, index) => (
      <div key={index} className="mx-[10px] md:mx-[50px] grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10">
        {group.map((section: SectionProduct) => (
          <Link
            key={section.title}
            href={"/sections/" + section.title}
            className="relative group rounded-xl hover:shadow-lg hover:shadow-gray-500 transition cursor-pointer"
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
    ))

    if (carouselRef.current) {
      carouselRef.current.click()
    }

    setElements(itemsList)
  }, [sections])

  return (
    <div className="home-products-carousel">
      {elements?.length > 0
        ? (
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
            {elements}
          </Carousel>
        )
        : (
          <div className="mx-[10px] md:mx-[50px] grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10">
            <Typography
              as="div"
              variant="h1"
              className="mb-4 w-full h-52	sm:h-64 md:h-80 lg:h-96 bg-transparent hidden lg:block relative group hover:shadow-lg hover:shadow-gray-500 transition cursor-pointer"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="h1"
              className="mb-4 w-full h-52	sm:h-64 md:h-80	 lg:h-96 bg-transparent hidden md:block relative group hover:shadow-lg hover:shadow-gray-500 transition cursor-pointer"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="h1"
              className="mb-4 w-full h-52	sm:h-64 md:h-80	 lg:h-96 bg-transparent relative group hover:shadow-lg hover:shadow-gray-500 transition cursor-pointer"
            >
              &nbsp;
            </Typography>
            <Typography
              as="div"
              variant="h1"
              className="mb-4 w-full h-52	sm:h-64 md:h-80	 lg:h-96 bg-transparent relative group hover:shadow-lg hover:shadow-gray-500 transition cursor-pointer"
            >
              &nbsp;
            </Typography>
          </div>
        )
      }
    </div>
  )
}