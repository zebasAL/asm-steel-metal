import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import Modal from "~/components/ui/Modal";
import { useEventListener } from "~/hooks/useEventListener"

export default function SearchBar() {
  const { t } = useTranslation("common")

  const [isOpen, setIsopen] = useState<boolean>(false)
  useEventListener('keydown', (event) => {
    if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      setIsopen(!isOpen)
    }
  })

  const handleOpen = () => {
    setIsopen(true)
  }

  const handleClose = () => {
    setIsopen(false)
  }

  return (
    <div>
      <button className="flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full ps-2 p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onClick={handleOpen}>
        <div className="inset-y-0 start-0 flex items-center pointer-events-none mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 30 30">
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </div>
        <p id="voice-search" className="">
          {t("search")}...
        </p>
        <div className="text-white font-bold text-xs leading-5 ml-4 border border-solid border-gray-500 bg-black px-1 py-0.5 rounded-md">
          Ctrl+K
        </div>
      </button>

      <Modal isOpen={isOpen} onClose={handleClose} className="absolute top-[0]">
        <div className="relative w-full min-h-[500px] bg-red p-10">
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 h-[50px] text-xl border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar Productos, Categorias, Servicios..."
            required
          />

          <div className="flex flex-col items-center justify-center h-auto mt-10">
            <h1 className="text-4xl font-bold mb-4">Busqueda - no encontrada</h1>
            <p className="text-gray-600">Lo lamentamos, no se pudo encontrar la busqueda.</p>

            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-3">Pruebe otra vez</p>
              <a href="/" className="text-blue-500 hover:underline">Home</a>
              <a href="/contact" className="text-blue-500 hover:underline ml-2">Contactanos</a>
            </div>
          </div>

        </div>
      </Modal>
    </div>
  )
}