import { useTranslation } from "react-i18next";
import ContactForm from '../components/ContactForm'
export default function ContactUs() {
  const { t } = useTranslation();
  
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-12 sm:py-16 ltr">
      <div className="text-[40px] font-medium text-[#2A5BCA]">
        {t('contactUs.text1')}
      </div>
      <div className="mt-2 max-w-4xl text-[16.67px] leading-6 text-[#64717C] mb-[4%] mt-[10px">
         {t('contactUs.text2')}
      </div>
      <ContactForm/>

    </section>
  );
}
