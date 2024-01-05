import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router';
import { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import setLanguage from 'next-translate/setLanguage'
import i18nConfig from '~/../i18n.json';
import usa_flag from "public/usa.png";
import mx_flag from "public/mexico.png";

export default function LocalesDropDown() {
  const { t, lang } = useTranslation('navbar')
  const [openMenu, setOpenMenu] = useState(false);
  const route = useRouter()

  const handleChangeLocale = async (locale: string) => {
    await setLanguage(locale)
    route.push("/")
  }

  return (
    <Menu
      open={openMenu}
      handler={setOpenMenu}
      offset={15}
    >
      <MenuHandler>
        <Button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          className="bg-transparent inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <Image
            alt="flag"
            width={25}
            height={25}
            className="mr-5"
            src={lang === "en" ? usa_flag : mx_flag}
          />
          {t(`locale_${lang}`)}
        </Button>
      </MenuHandler>

      <MenuList>
        {(i18nConfig.locales).filter((locale) => locale !== lang).map((locale) => (
          <MenuItem
            key={locale}
            onClick={async () => handleChangeLocale(locale)}
            className="block text-sm p-0 px-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            role="menuitem"
          >
            <div className="inline-flex items-center">
              <Image
                alt="flag"
                width={25}
                height={25}
                className="mr-5"
                src={locale === "en" ? usa_flag : mx_flag}
              />
              <p className="text-lg">{t(`locale_${locale}`)}</p>
            </div>
          </MenuItem>
        ))}
      </MenuList >
    </Menu >
  );
}
