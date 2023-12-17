import { m } from 'framer-motion';
import Image from 'next/legacy/image';
// @mui
// components
import { MotionViewport, varFade } from '~/components/animate';

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Content() {
  const fade = varFade()

  return (
<>
        <div className='relative bg-gradient-to-r from-gray-200 #fffff'>
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[350px] w-full">

          <div
            className="absolute top-0 left-0 z-10"
            style={{
              width: 0,
              height: 0,
              borderRight: '0 solid #fff',
              borderTop: '50px solid #fff',
              borderLeft: '100vw solid transparent',
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
              borderRight: '100vw solid transparent',
              borderTop: '50px solid transparent',
              borderLeft: '0 solid #fff',
              borderBottom: '50px solid #fff',
            }}
          />

          </div>
        </div>

        {/* <m.section style={{ background: `url(https://via.placeholder.com/1903x342)` }} className="bg-bottom bg-no-repeat" x-transition={fade.in}>
          <div className='px-[24px]'>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="md:col-span-6">
                <Description />
              </div>

              <div className="md:col-span-6">
                <img src="/assets/images/home/for_designer.jpg" className="w-full" />
              </div>
            </div>
          </div>
        </m.section>*/}
        </>
  );
}

// ----------------------------------------------------------------------

function Description() {

  return (
    <div className="my-20 px-[50px]">
      {/* // <div className="top-0 left-0 z-8 w-full h-full text-center absolute pt-10 bg-gradient-to-b from-gray-500 via-gray-500 to-transparent"> */}
      <m.div variants={varFade().inUp}>
        <p>
          Professional Kit
        </p>
      </m.div>

      <m.div variants={varFade().inUp}>
        <h2 className="text-3xl mt-3 mb-5">
          For Designer
        </h2>
      </m.div>

      <m.div variants={varFade().inUp}>
        <p>
          Descubre nuestra pasión por la calidad y la excelencia en el mundo del acero. En cada producto que ofrecemos, encontrará la garantía de durabilidad y rendimiento. Desde materiales de construcción hasta soluciones industriales, nos dedicamos a brindar productos de acero confiables para satisfacer sus necesidades. Con años de experiencia, somos su socio confiable en el mundo del acero. ¡Conócenos y descubre la diferencia!
        </p>
      </m.div>
    </div>
  );
}

// ----------------------------------------------------------------------


function TriangleShape({ anchor }: { anchor?: string }) {

  return (
    <div
      className={`absolute top-0 left-0 w-1 h-full ${anchor === "bottom" ? "z-9 bottom-0 top-unset text-gray-900 transform scale-x-[-1]" : "z-[9]"
        }`}
      style={{ color: 'white', boxShadow: '0 20px 80px rgba(0, 0, 0, 0.4)' }}
    >
      <svg width="100%" height="100%" viewBox="0 0 1440 64" preserveAspectRatio="none">
        <path d="M1440 0H0L1440 64V0Z" fill="currentColor" />
      </svg>
    </div>

  );
}


// .before - line::before {
//   content: "";
//   height: 2px;
//   bottom: -1px;
//   z - index: 11;
//   width: 100 %;
//   position: absolute;
//   background - color: #1f2936; /* Reemplaza esto con tu color gris[900] de tu paleta de colores */
// }
