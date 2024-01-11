import useTranslation from 'next-translate/useTranslation'
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@material-tailwind/react"
import { toast } from 'react-hot-toast';
import { contactFormSchema, ContactFormData } from "~/validationSchemas/forms/contactFormSchema"
import { Address } from "~/mock/locations/companyAddress"
import { apiRoutes } from "~/utils/api";

export default function ContactBody({ location }: { location: Address | null }) {
  const { t: commonT, lang } = useTranslation('common');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  const onSubmit: SubmitHandler<ContactFormData> = async (data: ContactFormData) => {
    await apiRoutes.email.mailersend.send<ContactFormData>(data)
      .then(() => {
        toast.success("")
        reset()
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  return (
    <section className="flex flex-col md:flex-row p-2 sm:p-3 md:p-5 lg:p-10 w-full ">

      <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full md:w-1/2">
        <div className="flex flex-col items-center">
          <div className="p-10 pt-0 m-auto max-w-xl w-full">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{commonT("name")}</label>
              <input {...register("name")} type="text" id="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{commonT("email")}</label>
              <input {...register("email")} type="text" id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{commonT("phone")}</label>
              <input {...register("phone")} type="text" id="phone" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{commonT("message")}</label>
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={lang === "es" ? "Escriba un mensaje..." : "Write a message..."}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            
            <Button type="submit" className="w-full cursor-pointer mt-5" loading={isSubmitting}>
              {commonT("send")}
            </Button>
          </div>
        </div>
      </form>

      {location?.iframeSrc && (
        <iframe
          src={location.iframeSrc}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-auto md:w-1/2 h-1/2 md:h-auto"
        />
      )}
    </section>
  )
}