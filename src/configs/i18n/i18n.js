import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18Resources } from 'configs/i18n/langNameSpaces';

i18n.use(initReactI18next).init({
    resources: i18Resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
