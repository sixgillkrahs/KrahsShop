import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import Home from './locales/vi/home.json';
import Login_EN from './en/login.json';
import Login_VI from './vi/login.json';

export const locales = {
    en: 'English',
    vi: 'Tiếng Việt',
} as const;

const resources = {
    en: {
        // translation: Home,
        // home: Home,
        login: Login_EN,
    },
    vi: {
        // translation: Home,
        // home: Home,
        login: Login_VI,
    },
} as const;

const defaultLocale = 'vi';


i18n.use(initReactI18next).init({
    resources,
    lng: defaultLocale,
    ns: ['login'],
    fallbackLng: defaultLocale,
    interpolation: {
        escapeValue: false,
    },
});




