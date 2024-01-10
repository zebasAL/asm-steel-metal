import Image from "next/image"
import useTranslation from "next-translate/useTranslation"
import MainLayout from "~/components/layouts/MainLayout"
import Image404 from "public/404.png"

export default function Custom404() {
  const { t } = useTranslation("common")

  return (
    <MainLayout>
      <section className="bg-white">
        <div className="p-4">
          <div className="pb-8 pt-8 max-w-1280 mx-auto">
            <div className="mx-auto text-center">
              <Image className="mx-auto mb-4" src={Image404} alt="404 Not Found" />
                <h1 className="mb-4 text-primary-600 font-bold text-2xl leading-8">
                  {t("title")}
                </h1>
                <p className="mb-8 text-gray-700 dark:text-gray-500 text-lg leading-6">
                  {t("description")}
                </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}