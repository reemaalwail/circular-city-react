import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LanguageHandler = () => {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && ['ar', 'en'].includes(lang)) {
      i18n.changeLanguage(lang);
      localStorage.setItem('i18nextLng', lang);
      document.documentElement.lang = lang;
    }
  }, [lang, i18n]);

  return null;
};

export default LanguageHandler;
