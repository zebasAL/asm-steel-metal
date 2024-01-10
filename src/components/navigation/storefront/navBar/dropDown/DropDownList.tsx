import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";
import { Button, Typography, ListItem } from "@material-tailwind/react";
import { CategoryProduct } from "~/mock/products/categoryProducts";
import { donwloadFile } from "~/utils/downloadPDF"
import DropDownModal from "./DropDownModal"

type Props = {
  options: CategoryProduct[],
};

export default function DropDownList({ options }: Props) {
  const { t } = useTranslation("navbar")

  const [openModal, setOpenModal] = useState<boolean>(false)

  const categories = (t("categories"));

  const handleCloseModel = () => {
    setOpenModal(false)
  }

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleDownloadPresentationLetter = () => {
    donwloadFile('/pdf/carta_presentacionASM.pdf', 'Carta de presentacion')
  }

  return (
    <div className="flex items-center justify-center gap-10">
      <ListItem className="w-[unset]" style={{ width: "unset" }}>
        <Typography
          as="p"
          variant="small"
          color="blue-gray"
          className={`w-[unset] flex items-center font-medium text-gray-900 ${openModal && "text-gray-500"} cursor-pointer z-10 flex items-center justify-cent`}
        >
          <Link href={'/'} onMouseEnter={handleCloseModel} className="w-[auto] z-10 text-[#1baee6]">
            <span className="w-[auto] text-center">{t("home")}</span>
          </Link>
        </Typography>
      </ListItem>

      <ListItem className="w-[unset]" style={{ width: "unset" }}>
        <Typography
          as="p"
          variant="small"
          color="blue-gray"
          className={`flex items-center font-medium text-gray-900 ${openModal && "text-gray-500"} cursor-pointer z-10 flex items-center justify-cent`}
        >
          <Link href={'/contact'} onMouseEnter={handleCloseModel} className="w-[auto] z-10 text-[#1baee6]">
            {t("contact-us")}
          </Link>
        </Typography>
      </ListItem>

      <div className="flex gap-5">
        <ListItem onClick={handleOpenModal}>
          <Typography
            as="p"
            href="#"
            variant="small"
            color="blue-gray"
            className={`w-full felx items-center font-medium text-gray-900 ${openModal && "text-gray-500"} cursor-pointer z-10 flex items-center justify-cent`}
          >
            <span className="text-[#1baee6] flex items-center gap-2 select-none">
              {categories}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`transition-all border-none ml-2 ${openModal ? "transform rotate-180" : ""}`} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8l7 7 7-7"></path>
            </svg>
          </Typography>
        </ListItem>

        <DropDownModal
          title={categories}
          options={options}
          isOpen={openModal}
          onClose={() => handleCloseModel()}
        />
      </div>

      <Button
        onMouseEnter={handleCloseModel}
        onClick={handleDownloadPresentationLetter}
        variant="gradient"
        className="flex items-center gap-3 z-10 bg-[#282843]"
        style={{ background: "#282843" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        {t("presentation-letter")}
      </Button>
    </div>
  );
}