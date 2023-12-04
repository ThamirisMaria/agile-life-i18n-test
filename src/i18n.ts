import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationPt from './locales/pt/pt_br.json';
import translationEn from './locales/en/en.json';
import translationEs from './locales/es/es.json';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'pt',
    debug: true,
    detection: {
        order: ['queryString', 'cookie'],
        caches: ['cookie']
    },
    interpolation: {
        escapeValue: false
    },
    resources: {
        pt: {
            translation: translationPt
        },
        en: {
            translation: translationEn
        },
        es: {
            translation: translationEs
        }
    }
});

export default i18n;