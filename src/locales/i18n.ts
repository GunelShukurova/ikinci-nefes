import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import az from './az/translation.json';
import en from './en/translation.json';
import ru from './ru/translation.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({

    resources: {
      az: { translation: az },
      en: { translation: en },
      ru: { translation: ru },
    },

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    fallbackLng: 'az',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
