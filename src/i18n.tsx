import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {

  ar: {
    translation: {
      changeLanguage: "english",
      validText:"This field is required",
      navbar:{
        text1:"Home",
        text2:"About",
        text3:"Projects",
        text4:"Our services",
        text5:"Contact us"
      },
      form:{
        text1:"To make things easier for both of us, please fill out the Google Form below with the required materials or quantities, so we can get back to you with the right offer  ",
        text2:"How did you find us ?",
        text3:"Iraq - Baghdad - Mansour - 14 Ramadan Street",
        text4:"KYC Form",
        text5:"Project Name and location",
        text6:"Company Name",
        text7:"Address",
        text8:"Email or phone number",
        text9:"Beneficial Entity ",
        text10:"Email or phone number",
        text11:"Kindly provide us with the bill of quantities or the list of required materials",
        text12:'If you have few items to request please list it here and if you upload the BOQ, please type "uploaded"',
        text13:"Send",
        text14:"Social Media",
        text15:"Family and Friend",
        text16:"Other"
      }
    }
  },
  en: {
    translation: {
      changeLanguage: "english",
    }
  },

};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "ar",
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
