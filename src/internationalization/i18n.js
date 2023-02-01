import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import * as languages from './languages/languages';

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: Object.fromEntries(Object.entries({...languages}).map((v, i) => { return [ v[0], { translation : v[1] } ] })),
    //lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: 'en',
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

  // change language document property to selected language in i18n
  i18n.on('languageChanged', (language) => {
    document.documentElement.lang = language;
  });
  i18n.changeLanguage(i18n.language);

export default i18n;