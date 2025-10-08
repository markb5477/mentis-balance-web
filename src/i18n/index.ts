import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import da from './locales/da.json';
import en from './locales/en.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const resources = {
  da: { translation: da },
  en: { translation: en },
  es: { translation: es },
  pt: { translation: pt },
};

const getBrowserLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const savedLang = localStorage.getItem('language');
    if (savedLang) return savedLang;
  }
  return 'da';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getBrowserLanguage(),
    fallbackLng: 'da',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;