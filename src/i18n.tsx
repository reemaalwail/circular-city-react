import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {

  en: {
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
      footer:{
        text1:"About",
        text2:"Our Services",
        text3:"Our Story",
        text4:"Our Projects",
        text5:"Our Partners",
        text6:"Contact Us",
        text7:"Learn More",
        text8:"phone",
        text9:"Customer service"
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
      },
      about:{
        text1:"Reputation enhancement",
        text2:"200+ projects",
        text3:"Exclusive partnerships",
        text4:"Service expansion",
        text5:"Company founding",
        text6:"About Us",
        text7:"Who We Are ",
        text8:"What Do We Do",
        text9:"How Do We Help",
        text10:"Create success story"
      },
      partners:{
        text1:"Collaborations",
        text2:"Our",
        text3:"Partners",
        text4:"See More"
      },
      service:{
        text1:"HVAC Solutions",
        text2:"We supply ceiling diffusers, dampers, and integrated fire‑and‑smoke systems to guarantee optimal air distribution and precise control over temperature and indoor air quality.",
        text3:"FM200 & CO₂ Gas Suppression Systems",
        text4:"We deliver advanced suppression solutions using FM200 and CO₂ gases, engineered for fast, safe discharge while preserving the integrity of your equipment and infrastructure.",
        text5:"Integrated Fire Protection Solutions",
        text6:"We provide all types of fire sprinklers, control valves, fittings, and accessories to ensure complete and effective fire protection in residential, commercial, and industrial buildings",
        text7:"Custom MEP Design & Installation",
        text8:"Our team of certified engineers carries out bespoke electrical and mechanical works to the highest international standards, with meticulous attention to detail for uninterrupted"
      }
    }
  },
  ar: {
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
