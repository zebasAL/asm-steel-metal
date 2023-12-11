import ContactHeader from "../headers/ContactHeader"

type Props = {
  children?: JSX.Element,
}

export default function Contact({ children }: Props) {
  // const [] = useState<>()

  return (
    <>
      <ContactHeader />

      <section className="flex p-10">
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
              <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..." />
            </div>
          </div>

          <aside className="bg-transparent dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700">
            <div className="px-4 mx-auto max-w-8xl">
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 lg:leading-none dark:text-white md:text-center">Mantente al día con nuestras novedades</h2>
              <p className="mb-4 text-base text-gray-500 dark:text-gray-400 md:text-center lg:px-20 xl:px-56">Se el primero en enterarte de nuestras promociones y nuevos productos.</p>
              <div className="mb-4">
                <form className="seva-form formkit-form flex max-w-xl md:mx-auto" data-sv-form="4692392" data-uid="344e3b5c48" data-format="inline" data-version="5" min-width="400 500 600 700 800">
                  <div className="w-full" data-style="clean">
                    <label htmlFor="member_email" className="hidden">Correo electronico</label>
                    <div className="relative h-full">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                        </svg>
                      </div>
                      <input type="email" id="member_email" name="email_address" className="block w-full px-3 py-4 pl-11 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl formkit-input focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Escriba su correo" required />
                    </div>
                  </div>
                  <div>
                    <input type="submit" data-element="submit" id="member_submit" className="formkit-submit formkit-submit w-full px-4 py-4 text-base font-medium text-center text-white bg-blue-700 dark:bg-blue-600 dark:border-blue-600 border border-blue-700 cursor-pointer rounded-r-xl formkit-submit hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 dark:hover:border-blue-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value="Suscribirse" />
                  </div>
                </form>
              </div>
              <p className="text-sm text-gray-500 md:text-center dark:text-gray-400 font-normal">Al suscribirte, aceptas los <a rel="nofollow noopener noreferrer" className="text-blue-600 dark-text-blue-400 hover:underline" href="https://convertkit.com/terms">Términos de Servicio</a> y nuestra <a className="text-blue-600 dark-text-blue-400 hover:underline" rel="nofollow noopener noreferrer" href="https://convertkit.com/privacy">Política de Privacidad</a>.</p>
            </div>
          </aside>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14936.481176138028!2d-100.4378255!3d20.623953!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b87c3a249ed%3A0x66ed6e17ed3bad27!2sASM%20Steel%20Metal%20Quer%C3%A9taro!5e0!3m2!1sen!2smx!4v1702293514402!5m2!1sen!2smx" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </section>
    </>
  );
}
