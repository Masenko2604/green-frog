import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../locales/en.json';
import ru from '../locales/ru.json';
import uk from '../locales/uk.json';

i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uk: { translation: uk },
    },
  });

export default i18next;
