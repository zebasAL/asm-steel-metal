import useTranslation from 'next-translate/useTranslation'
import { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import setLanguage from 'next-translate/setLanguage'

const locales = {
  en: {
    svg: <svg className="w-5 h-5 rounded-full me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use y="420" /><use y="840" /><use y="1260" /></g><use y="1680" /></g><use x="247" y="210" /></g><use x="494" /></g><use x="988" /><use x="1976" /><use x="2470" /></g></svg>,
    name: 'en'
  },
  es: {
    svg: <svg className="w-5 h-5 rounded-full me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use y="420" /><use y="840" /><use y="1260" /></g><use y="1680" /></g><use x="247" y="210" /></g><use x="494" /></g><use x="988" /><use x="1976" /><use x="2470" /></g></svg>,
    name: 'es'
  }
}

export default function LocalesDropDown() {
  const { t, lang } = useTranslation('navbar')
  const [openMenu, setOpenMenu] = useState(false);

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
          {t(`locale_${locales[lang]?.name}`)}
        </Button>
      </MenuHandler>

      <MenuList>
        {Object.values(locales).map((locale) => (
          <MenuItem key={locale.name} onClick={async () => await setLanguage(locale.name)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
            <div className="inline-flex items-center">
              {locale.svg}
              {t(`locale_${locale.name}`)}
            </div>
          </MenuItem>
        ))}
      </MenuList >
    </Menu >
  );
}
