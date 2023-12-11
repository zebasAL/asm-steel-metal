type Props = {
  children?: JSX.Element,
}

export default function ContactHeader({ children }: Props) {
  // const [] = useState<>()

  return (
    <section className="bg-blend-multiply bg-no-repeat bg-center bg-cover relative" style={{ padding: "2rem", color: "#fff" }}>
      <div className="absolute inset-0 bg-cover bg-center bg-blend-multiply" style={{ backgroundImage: "url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg)", filter: "grayscale(90%)" }} />
      
      <div className="relative z-10">
        <div className="relative grid gap-2 md:grid-cols-2 md:gap-8 max-w-7xl mx-auto p-8 lg:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <div className="mb-6">
              <h1 className="mb-1 text-3xl font-extrabold tracking-tight text-white">We invest in the world’s potential</h1>
              <p className="text-base font-light text-gray-400 mb-4">The need for energy is universal. That's why Flowbite scientists and engineers are pioneering new research and pursuing new technologies to reduce emissions while creating more efficient fuels. We're committed to responsibly meeting the world's energy needs.</p>
              <a href="#" className="inline-flex items-center px-4 py-2 font-medium text-white bg-primary-700 hover:bg-primary-800 focus:outline-none focus:ring focus:border-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Learn more about the plan
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 md:gap-8 max-w-7xl mx-auto p-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-primary-500 mb-2">Fourth quarter 2021</h2>
            <p className="text-base text-gray-400 mb-4">We announced fourth quarter 2021 results</p>
            <a href="#" className="inline-flex items-center text-primary-500 font-medium">
              Seleccionado
              {/* <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg> */}
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary-500 mb-2">Zero emissions</h2>
            <p className="text-base text-gray-400 mb-4">Flowbite aims to achieve net-zero emissions</p>
            <a href="#" className="inline-flex items-center text-primary-500 font-medium">
              Seleccionar
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
