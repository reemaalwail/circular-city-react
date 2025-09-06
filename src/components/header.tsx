import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import Slide from "./slide"
export default function PartnersSection() {
    const { i18n, t } = useTranslation();
          
  return (
 <div>
    <section className="relative container">
      <div className="relative mx-auto max-w-7xl ltr">

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-2">

          <div className="mt-[15%]">
            <div className=" text-[18.19px] font-bold  text-[#268B43] uppercase">
              {t('header.text1')}
            </div>
            <div className="text-[#2A5BCA] text-[42px] font-bold">
                    {t('header.text2')}
            </div>
             <div className="text-[40px] font-medium text-black mt-[-15px]">
                 {t('header.text3')}
              </div>

            <div className="text-[19px] max-w-2xl  text-[#9C9C9C]">
              {t('header.text4')}
            </div>
            <div className="flex flex-row">
                 <RouterLink to={`/${i18n.language}/aboutUs`} className="font-medium text-[14px] flex items-center justify-center rounded-[8px] w-[80px] h-[40px] bg-[#268B43] text-white m-[10px]">{t('header.text6')}</RouterLink>
                 <RouterLink to="" className="font-medium text-[14px] flex items-center justify-center rounded-[8px] w-[80px] h-[40px] border-[#268B43] border-[2px] text-[#268B43] m-[10px]">
                     <div className="font-medium text-[14px] text-[#268B43]">{t('header.text5')}</div>
                  </RouterLink>
            </div>
          </div>

          <div>
              <img src="../assets/img1.png" alt="image" className="w-[90%] h-[100%] bg-cover" />
          </div>

        </div>

      </div>
    </section>
    <Slide/>
</div>
  );
}
