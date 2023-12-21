import { useState, useEffect, useRef } from "react";
import { Dialog } from "@material-tailwind/react";
import { Address } from "~/mock/locations/companyAddress"

export default function ContactBody({ location }: { location: Address | null }) {
  // const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

  // const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null)

  // useEffect(() => {
  //   // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
  //   if (lastViewedPhoto && !photoId) {
  //     lastViewedPhotoRef.current.scrollIntoView({ block: 'center' })
  //     setLastViewedPhoto(null)
  //   }
  // }, [lastViewedPhoto, setLastViewedPhoto])

  return (
    <section className="flex p-10 w-full">
      {/* {
        photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId)
            }}
          />
        )
      } */}

      <div className="w-1/2">
        <div className="flex flex-col items-center">
          <div className="p-10 pt-0 m-auto max-w-xl w-full">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="text" id="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
              <input type="text" id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
              <input type="text" id="phone" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mensaje</label>
              <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba un mensaje..." />
            </div>
          </div>

        </div>
      </div>

      {location?.iframeSrc && (
        <iframe
          src={location.iframeSrc}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
    </section>
  )
}