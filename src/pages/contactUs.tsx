import { useTranslation } from "react-i18next";
import ContactForm from '../components/ContactForm'
export default function ContactUs() {
  const { t } = useTranslation();
  
  return (
    <div className="home">
    <section className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 ltr">
      <div className="fontPoppinsBold text-[33.35px] text-[#2A5BCA]">
        {t('contactUs.text1')}
      </div>
      <div className="fontPoppinsMedium mt-2 max-w-4xl text-[15.01px] leading-6 text-[#717171] mb-[4%] mt-[10px">
         {t('contactUs.text2')}
      </div>
      <ContactForm/>
    </section>
    </div>
  );
}
