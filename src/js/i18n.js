import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';

i18next
  .use(HttpBackend)
  .init({
    lng: 'cs',
    fallbackLng: 'cs',
    supportedLngs: ['cs', 'en', 'uk', 'ru'],
    debug: false,

    keySeparator: false,

    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}.json`
    }
  })
  .then(() => {
    document.dispatchEvent(new Event('i18nReady'));
  });

export default i18next;




