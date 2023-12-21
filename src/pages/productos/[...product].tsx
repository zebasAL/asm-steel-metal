import Head from "next/head";
import { GetServerSidePropsContext } from 'next';
// import { useRouter } from 'next/router';
import Image from "next/image";
// import Link from "next/link";
import { categories } from "~/routes/hooks/useNavItems"

export default function Product({ product }: { product: string }) {
  // const router = useRouter();
  // const { productId } = router.query;

  return (
    <>
      <Head>
        <title>CONTACTO: ASM STEEL-METAL</title>
        <meta name="description" content={`Conoce nuestras ubicaciones y contacta con nosotros para recibir mas informacion`} />
        <meta name="keywords" content={`asm, steel, metal, acero, asm-steel-metal, asm steel-metal, contacto, ubicacion`} />
      </Head>
      <main className="mx-10 my-[100px]">
        <section>
          <div className="mb-5">
            <div
              className={'shadow-small hover:shadow-medium transition-shadow duration-200 flex'}
            >
              <Image
                className="w-[60vw] h-auto"
                width={2000}
                height={1000}
                alt={`Cover Image for`}
                src={product.img}
                sizes="100vw"
                priority
              />
              <div aria-hidden="true" className="w-full overflow-y-auto overflow-x-hidden justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-full max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-3xl leading-snug hover:underline">
                        AISI P20
                      </h3>
                    </div>
                    <div className="p-4 md:p-5">
                      <p className="text-gray-500 dark:text-gray-400 mb-4">El acero GGD D2 es un acero de herramientas para trabajo en frío más frecuentemente utilizados en la industria del metal y mecánica, en particular en el frio.Pode industria de conformación y corte se trata térmicamente a alta dureza manteniendo una buena resistencia a la fractura. </p>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">Seleccione uno:</p>
                      <ul className="space-y-4 mb-4">
                        <li>
                          <input type="radio" id="job-2" name="job" value="job-2" className="hidden peer" />
                          <label htmlFor="job-2" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                            <div className="block">
                              <div className="w-full text-lg font-semibold">AISI/SAE P20 + Ni</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                          </label>
                        </li>
                        <li>
                          <input type="radio" id="job-3" name="job" value="job-3" className="hidden peer" />
                          <label htmlFor="job-3" className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                            <div className="block">
                              <div className="w-full text-lg font-semibold">AISI/SAE P20</div>
                            </div>
                            <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                          </label>
                        </li>
                      </ul>
                      <button className="text-white inline-flex w-full justify-center bg-[#25d366] hover:bg-[#1e9f4d] focus:ring-4 focus:outline-none focus:ring-[#3fd97f] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#3fd97f] dark:hover:bg-[#25d366] dark:focus:ring-[#1e9f4d]">
                        Solicitar Cotizacion
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ml-5 bi bi-whatsapp" viewBox="0 0 16 16">
                          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                      </button>

                      <div className="flex flex-col w-full max-w-[400px] mx-auto mt-5 leading-1.5 p-0.5 border-gray-200 bg-gray-100 rounded-xl dark:bg-gray-700">
                        <div className="flex items-start bg-gray-50 dark:bg-gray-600 rounded-xl p-4">
                          <div className="me-2">
                            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                              <svg fill="none" aria-hidden="true" className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 21">
                                <g clipPath="url(#clip0_3173_1381)">
                                  <path fill="#E2E5E7" d="M5.024.5c-.688 0-1.25.563-1.25 1.25v17.5c0 .688.562 1.25 1.25 1.25h12.5c.687 0 1.25-.563 1.25-1.25V5.5l-5-5h-8.75z" />
                                  <path fill="#B0B7BD" d="M15.024 5.5h3.75l-5-5v3.75c0 .688.562 1.25 1.25 1.25z" />
                                  <path fill="#CAD1D8" d="M18.774 9.25l-3.75-3.75h3.75v3.75z" />
                                  <path fill="#F15642" d="M16.274 16.75a.627.627 0 01-.625.625H1.899a.627.627 0 01-.625-.625V10.5c0-.344.281-.625.625-.625h13.75c.344 0 .625.281.625.625v6.25z" />
                                  <path fill="#fff" d="M3.998 12.342c0-.165.13-.345.34-.345h1.154c.65 0 1.235.435 1.235 1.269 0 .79-.585 1.23-1.235 1.23h-.834v.66c0 .22-.14.344-.32.344a.337.337 0 01-.34-.344v-2.814zm.66.284v1.245h.834c.335 0 .6-.295.6-.605 0-.35-.265-.64-.6-.64h-.834zM7.706 15.5c-.165 0-.345-.09-.345-.31v-2.838c0-.18.18-.31.345-.31H8.85c2.284 0 2.234 3.458.045 3.458h-1.19zm.315-2.848v2.239h.83c1.349 0 1.409-2.24 0-2.24h-.83zM11.894 13.486h1.274c.18 0 .36.18.36.355 0 .165-.18.3-.36.3h-1.274v1.049c0 .175-.124.31-.3.31-.22 0-.354-.135-.354-.31v-2.839c0-.18.135-.31.355-.31h1.754c.22 0 .35.13.35.31 0 .16-.13.34-.35.34h-1.455v.795z" />
                                  <path fill="#CAD1D8" d="M15.649 17.375H3.774V18h11.875a.627.627 0 00.625-.625v-.625a.627.627 0 01-.625.625z" />
                                </g>
                                <defs>
                                  <clipPath id="clip0_3173_1381">
                                    <path fill="#fff" d="M0 0h20v20H0z" transform="translate(0 .5)" />
                                  </clipPath>
                                </defs>
                              </svg>
                              Ficha Tecnica
                              <svg className="w-4 h-4 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                              </svg>
                            </span>

                            <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                              12 Pages
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                              </svg>
                              18 MB
                              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="3" height="4" viewBox="0 0 3 4" fill="none">
                                <circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
                              </svg>
                              PDF
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="flex gap-2 justify-between">
          <div className="w-full max-w-sm p-4 border-gray-200 border-r sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-semibold dark:text-gray-400">Aplicaciones</h5>
            <ul role="list" className="space-y-5 my-7">
              <li className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight dark:text-gray-400 ms-3">Tanques y recipientes de productos químicos.</span>
              </li>
              <li className="flex">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight dark:text-gray-400 ms-3">Fabricación de válvulas y bombas.</span>
              </li>
              <li className="flex">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight dark:text-gray-400 ms-3">Equipos de pulpa y papel.</span>
              </li>
              <li className="flex">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight dark:text-gray-400 ms-3">Industria química y petroquímica.</span>
              </li>
              <li className="flex">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight dark:text-gray-400 ms-3">Industria alimenticia.</span>
              </li>
              <li className="flex">
                <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                <span className="text-base font-normal leading-tight dark:text-gray-400 ms-3">Arquitectónico.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 p-4 w-full">
            <h5 className="my-4 text-xl font-semibold dark:text-gray-400">Caracteristicas:</h5>

            <div className="mt-1 bg-white border-gray-200 border-y dark:bg-gray-800 dark:border-gray-600">
              <div className="p-4 py-5 mx-auto text-gray-900 dark:text-white md:px-6">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li>
                    <div className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <span className="font-semibold text-sm  dark:text-gray-400">El acero inoxidable Tipo 316 es un acero inoxidable de cromo níquel austenítico que contiene molibdeno.</span>
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <span className="font-semibold text-sm  dark:text-gray-400">Esta adición aumenta la resistencia general a la corrosión sobre todos a los ácidos sulfúricos.</span>
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <span className="font-semibold text-sm  dark:text-gray-400">Muy resistente a altas temperaturas.</span>
                    </div>
                  </li>
                  <li>
                    <div className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                      <span className="font-semibold text-sm  dark:text-gray-400">El acero tipo 316 L es una modificación de bajo carbono para minimizar la formación de carburos durante
                        el proceso de soldadura.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Composición Química
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Variante
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %C
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %Mn
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %P
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %S
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %Cr
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %Mo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %Si
                  </th>
                  <th scope="col" className="px-6 py-3">
                    %Ni
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      P20 - NI
                    </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    0.28 - 0.40
                    </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    0.60 - 1.00
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    0.030 MAX
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   0.030 MAX
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   1.40 - 2.00
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   0.30 - 0.55
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   0.20 - 0.80
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   0.68 - 1.00
                  </td>

                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      P20
                    </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    0.28 - 0.40
                    </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    0.60 - 1.00
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    0.030 MAX
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   0.030 MAX
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   1.40 - 2.00
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   0.30 - 0.55
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   0.20 - 0.80
                  </td>
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   
                  </td>

                </tr>
              </tbody>
            </table>
          </div>

        </section>

      </main>
    </>
  )
}


export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { product } = ctx.params as { product: string };

  const selectedProduct = ((categories ?? [])[0]?.products ?? []).find((productCategory) => productCategory.title == product)
  return {
    props: {
      product: selectedProduct,
    },
  };
}