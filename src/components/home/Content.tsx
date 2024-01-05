import { m } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/legacy/image';
import { MotionViewport, varFade } from '~/components/animate';


export default function Content() {
  const fade = varFade()

  return (
    <>
      <div className='relative bg-gradient-to-r from-gray-200 #fffff max-w-[98.9vw]'>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] w-full">

          <div
            className="absolute top-0 left-0 z-10"
            style={{
              width: 0,
              height: 0,
              borderRight: '0 solid #fff',
              borderTop: '50px solid #fff',
              borderLeft: '99vw solid transparent',
              borderBottom: '50px solid transparent',
            }}
          />

          <Description />

          <div className="relative z-[-1]">
            <Image
              layout='fill'
              src="https://www.magnacero.com/wp-content/uploads/elementor/thumbs/Industria-acerera-pqnf112rpu160hrfg4j1gg9bqegdrj9u8oeyworwks.jpg"
              className="w-full object-cover"
            />
          </div>

          <div
            className="absolute bottom-0 left-0"
            style={{
              width: 0,
              height: 0,
              borderRight: '99vw solid transparent',
              borderTop: '50px solid transparent',
              borderLeft: '0 solid #fff',
              borderBottom: '50px solid #fff',
            }}
          />

        </div>
      </div>
    </>
  );
}

// ----------------------------------------------------------------------

function Description() {
  const { t } = useTranslation('home')

  return (
    <div className="my-20 px-[50px]">
      {/* <m.div variants={varFade().inUp}>
        <p>
          Professional Kit
        </p>
      </m.div> */}

      <m.div variants={varFade().inUp}>
        <h2 className="text-3xl mt-3 mb-5">
          {t('about-us-title')}
        </h2>
      </m.div>

      <m.div variants={varFade().inUp}>
        <p>
          {t('about-us-description')}
        </p>
      </m.div>
    </div>
  );
}