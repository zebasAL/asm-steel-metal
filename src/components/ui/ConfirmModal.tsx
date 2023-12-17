import LoadingButton from "./LoadingButton";

type ModalProps = {
  isOpen: boolean,
  title: string,
  onClose: () => void,
  onConfirm: () => void,
  children: JSX.Element,
}

export default function ConfirmModal({
  isOpen,
  title,
  onClose,
  onConfirm,
  children,
}: ModalProps): JSX.Element | null {

  if (!isOpen) {
    return null;
  }

  return (
    <div id="default-modal" aria-hidden="true" className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">

        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
               {title}
            </h3>
            <button onClick={onClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Cerrar</span>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4">
            {children}
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <LoadingButton onClick={onConfirm}>
              Confirmar
            </LoadingButton>
            <button onClick={onClose} data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
