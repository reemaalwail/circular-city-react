import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const resources = {

  en: {
    translation: {
      changeLanguage: "english",
      validText:"This field is required",
       more:"More",
       seeAll:"see all",
       seeMore:"see more",
      navbar:{
        text1:"Home",
        text2:"About",
        text3:"Projects",
        text4:"Our services",
        text5:"Contact us"
      },
      header:{
        text1:"circular city",
        text2:"Fire fighting systems ",
        text3:"and equipment",
        text4:"Delivering Turnkey MEP & Fire Protection Since 2006",
        text5:"Contact us",
        text6:"Learn more"
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
        text1:" Say something to start a live chat!",
        text2:"Select Subject?",
        text3:"Iraq - Baghdad - Mansour - 14 Ramadan Street",
        text4:"Contact Information",
        text5:"First Name",
        text6:"Last Name",
        text7:"Email",
        text8:"Phone Number",
        text9:"Message",
        text10:"Send Message",
        text11:"Sent",
        text12:'Select Subject?',
        text13:"Send",
        text14:"Social Media",
        text15:"Family and Friend",
        text16:"Other"
      },
      contactUs:{
        text1:"Contact Us",
        text2:"Any question or remarks? Just write us a message!"
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
        text0:"Our services",
        text1:"HVAC Solutions",
        text2:"We supply ceiling diffusers, dampers, and integrated fire‑and‑smoke systems to guarantee optimal air distribution and precise control over temperature and indoor air quality.",
        text3:"FM200 & CO₂ Gas Suppression Systems",
        text4:"We deliver advanced suppression solutions using FM200 and CO₂ gases, engineered for fast, safe discharge while preserving the integrity of your equipment and infrastructure.",
        text5:"Integrated Fire Protection Solutions",
        text6:"We provide all types of fire sprinklers, control valves, fittings, and accessories to ensure complete and effective fire protection in residential, commercial, and industrial buildings",
        text7:"Custom MEP Design & Installation",
        text8:"Our team of certified engineers carries out bespoke electrical and mechanical works to the highest international standards, with meticulous attention to detail for uninterrupted"
      },
      milestonesGrowth:{
        text1:"Milestones & Growth",
        text2:"Company established in Baghdad, Iraq ",
        text3:"Expanded service portfolio to include FM200 and CO₂ gas systems",
        text4:"Secured exclusive regional agencies with Rapidrop (UK) and Castle Engineering (EG)",
        text5:"Surpassed 200 completed projects across residential, commercial, and industrial sectors ",
        text6:"Reinforced our motto “Our reputation is the pride of our descendants” by continuously aligning with global standards and elevating client satisfaction  ",
        text7:"Company founding",
        text8:"Service expansion",
        text9:"Exclusive partnerships",
        text10:"200+ projects",
        text11:"Reputation enhancement"
      },
      discoverDifference:{
        text1:"Discover the difference"
      },
      whoweare: {
        text1: "WHO WE ARE",
        text2: "Delivering Turnkey MEP & Fire Protection Since 2006",
        text3: "We specialize in end-to-end mechanical, electrical & plumbing (MEP) and fire safety systems across Iraq. Our certified engineers combine deep expertise with international best practices to deliver solutions you can trust.",
        text4: "Comprehensive Fire Protection",
        text5: "Automated sprinklers, FM200 & CO₂ gas systems, foam suppression — fully compliant and rigorously tested.",
        text6: "Bespoke MEP Design & Installation.",
        text7: "Precision electrical and mechanical works, engineered for peak performance and uninterrupted operation."
      },
      news:{
        text1:"Latest News"
      },
     ourProjects:{
      text1:"Our projects"
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

