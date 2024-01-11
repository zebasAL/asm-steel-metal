import { useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";
import useTranslation from "next-translate/useTranslation";
import logoASM from "~/images/full_logo.png";
import Link from "next/link";
import Image from "next/image";
import LocalesDropDown from "../navBar/LocalesDropDown";
import SearchTextField, { SearchResult } from "~/components/navigation/searchbar/SearchTextField";
import SearchResults from "~/components/navigation/searchbar/SearchResults";
import { CategoryProduct } from "~/mock/products/categoryProducts";
import { donwloadFile } from "~/utils/downloadPDF"

type MobileBar = {
  navItems: CategoryProduct[],
}

export default function MobileNavbarItems({ navItems }: MobileBar) {
  const { t } = useTranslation("navbar")

  const [open, setOpen] = useState<number[] | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [searchItems, setSearchItems] = useState<SearchResult | null>(null);

  const handleOpen = (value: number[]) => {
    setOpen((open ?? []).toString() === (value).toString() ? null : value);
  };

  const openDrawer = () => {
    document.body.style.overflow = 'hidden';
    setIsDrawerOpen(true);
  }
  const closeDrawer = () => {
    document.body.style.overflow = 'auto';
    setIsDrawerOpen(false);
  }

  const handleDownloadPresentationLetter = () => {
    donwloadFile('/pdf/carta_presentacionASM.pdf', 'Carta de presentacion')
  }

  return (
    <div className="p-[13px] w-full h-full">
      <div className="flex justify-between items-center w-full h-full">
        <Link href={'/'}>
          <Image src={logoASM} alt="logo" height={150} width={150} className="w-[80px] sm:w-[100px]" />
        </Link>

        <LocalesDropDown />

        <IconButton variant="text" size="lg" onClick={openDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" className="w-[30px] sm:w-[100px]" viewBox="0 0 50 50">
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
        </IconButton>
      </div>

      {isDrawerOpen && (
        <div style={{
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'auto',
          zIndex: 9995,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          top: 0,
          position: 'absolute',
          opacity: 1,
          minHeight: 'calc(100vh + 128px)'
        }} />
      )}

      <Drawer
        open={isDrawerOpen}
        onClose={closeDrawer}
        overlay={false}
      >
        <Card
          color="white"
          shadow={false}
          className="max-h-[100%] min-h-[100vh] overflow-x-hidden overflow-y-scroll w-[90vw] max-w-[300px] min-w-[300px] p-4 pb-[90px] pt-0 top-0"
          style={{ borderRadius: '0' }}
        >
          <div className="mx-auto mt-2 mb-2 flex items-center m-auto gap-4 bg-white">
            <Image src={logoASM} alt="logo" height={150} width={150} />
          </div>
          <div className="p-2 relative">
            <SearchTextField onChangeResults={(values) => setSearchItems(values)} />
            {searchItems !== null && (
              <div className="absolute top-[16px] right-[14px]">
                <Button className="w-8 h-8 p-0 rounded-lg" onClick={() => setSearchItems(null)}>
                  X
                </Button>
              </div>
            )}
          </div>

          {searchItems !== null && (
            <SearchResults results={searchItems} />
          )}

          <div className="flex items-center justify-center gap-10">
            <ListItem className="w-[auto] justify-center">
              <Typography
                as="p"
                variant="small"
                color="blue-gray"
                className={`font-medium text-gray-900 cursor-pointer z-10 flex items-center justify-center`}
              >
                <Link href={'/'} className="w-[unset] z-10 text-[#1baee6] h-auto m-auto">
                  <span>{t("home")}</span>
                </Link>
              </Typography>
            </ListItem>

            <ListItem className="w-[auto] justify-center">
              <Typography
                as="p"
                variant="small"
                color="blue-gray"
                className={`font-medium text-gray-900 cursor-pointer z-10 flex items-center justify-cent`}
              >
                <Link href={'/contact'} className="w-[auto] z-10 text-[#1baee6]">
                  <span>{t("contact-us")}</span>
                </Link>
              </Typography>
            </ListItem>
          </div>

          <hr className="my-0 border-blue-gray-50" />

          <Typography className="w-[auto] z-10 text-[black] m-auto my-2 font-bold">
            {t('categories')}
          </Typography>

          <List>
            {navItems.map((item, index) => (
              <Accordion open={index === (open ?? [])[0]} key={index}>
                <ListItem className="p-0" selected={index === (open ?? [])[0]}>
                  <AccordionHeader
                    onClick={() => handleOpen([index])}
                    className="border-b-0 p-3"
                  >
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      {item.categoryName}
                    </Typography>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`transition-all border-none ml-2 ${index === (open ?? [])[0] ? "transform rotate-180" : ""}`} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 8l7 7 7-7"></path>
                    </svg>
                  </AccordionHeader>
                </ListItem>
                {item.products.map((product) => (
                  <Link href={`/products/${product.name}`} key={product.name}>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        <ListItem className="group">
                          <div className="cursor-pointer rounded-md text-black hover:text-primary-lighter transition-all hover:pl-8">
                            <div className="text-sm flex items-center justify-center transition-all group-hover:text-[#1baee6] group-hover:pl-[20px]">
                              {product.name}
                              <svg className="ml-2 my-auto w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                              </svg>
                            </div>
                          </div>
                        </ListItem>
                      </List>
                    </AccordionBody>
                  </Link>
                ))}
              </Accordion>
            ))}
          </List>

          <Button
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
        </Card>
      </Drawer>
    </div>
  );
}