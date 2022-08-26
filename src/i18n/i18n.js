import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import XHR from "i18next-xhr-backend";

i18n
   .use(XHR)
   .use(initReactI18next)
   .init({
      lng: "es",
      fallbackLng: "es",
      backend: {
         backends: [
            XHR
         ],
         loadPath: 'http://localhost:8080/public/locales/{{lng}}/{{ns}}.json'
      },
      interpolation: {
         escapeValue: false
      },
      react: {
         useSuspense: false
      }
   });
export default i18n