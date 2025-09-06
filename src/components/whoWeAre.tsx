import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function PartnersSection() {
const { i18n,t } = useTranslation();

return (
<div className="sectionAbout">
<section className="relative container">
  <div className="mx-auto max-w-7xl py-16 ltr">
    <div className="fontJokkerBold font-light text-[#268B43] text-[16.68px] capitalize mb-[2%]">~ &nbsp; {t('whoweare.text1')}</div>
    <div className="pt-[15px] pb-[15px] rounded-[8px]">
      <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-between">
        <div className="ltr mb-[10px] lg:mb-[0px] md:mb-[10px] flex flex-col lg:flex-row md:flex-row items-center justify-between">
          <div className="flex flex-col w-[100%] lg-[40%] md:w-[50%] p-[12px]">
          <div className="text-[#000000] text-[24.7px] fontJokkerBold w-[100%] lg:w-[80%] md:w-[80%]">{t('whoweare.text2')}</div>
          <br/><br/>
          <div className="text-[#000000] text-[14.82px] fontJokkerLight">{t('whoweare.text3')}</div>
          <div className="flex flex-col lg:flex-row md:flex-row">
          <div className="flex flex-row items-center">
           <div>
             <img src="../assets/icon1.png" alt="image" className="w-[53px] p-[5px]" />
          </div>
          <div className="flex flex-col p-[10px] w-[250px]">
            <div className="text-[#000000] text-[14.42px] fontJokkerBold">{t('whoweare.text4')}</div>
            <div className="text-[#000000] text-[7.99px] fontJokkerLight">{t('whoweare.text5')}</div>
          </div>
          
          </div>
          <div className="flex flex-row items-center">
           <div>
             <img src="../assets/icon2.png" alt="image" className="w-[53px] p-[5px]" />
          </div>
          <div className="flex flex-col p-[10px] w-[250px]">
            <div className="text-[#000000] text-[14.42px] fontJokkerBold">{t('whoweare.text4')}</div>
            <div className="text-[#000000] text-[7.99px] fontJokkerLight">{t('whoweare.text5')}</div>  
          </div>
          </div>
          </div>
          <br/>
           <RouterLink to={`/${i18n.language}/aboutUs`} className="fontJokkerBold text-[10px] flex items-center justify-center uppercase w-[80px] h-[30px] rounded-[4px] bg-[#1A4FC6] text-[#fff]">
                    <span className=" text-[#fff]">{t('more')}</span>
          </RouterLink>
          </div>
          <div className="w-[100%] lg-[50%] md:w-[50%] relative desktop-device  ">
             <div className="grid overflow-hidden">
                  <div className="grid-area absolute bottom-0 right-[-20%]"><img src="../assets/test.png" alt="image" className="w-[300px] h-[300px]" /></div>
                  <div className="grid-area absolute left-[40%] bottom-[-100px]"><img src="../assets/test2.png" alt="image" className="w-[300px] h-[300px]" /></div>
                  <div className="grid-area absolute left-[10%] bottom-[-250px]"><img src="../assets/test.png" alt="image" className="w-[300px] h-[300px]" /></div>
             </div>
          </div>
          <div className="w-[100%] lg-[50%] md:w-[50%] relative mobile-device ">
             <div className="flex flex-col overflow-hidden">
                  <div className=""><img src="../assets/test.png" alt="image" className="w-[100%] h-[300px] p-[10px]" /></div>
                  <div className="mt-[-15%]"><img src="../assets/test2.png" alt="image" className="w-[100%] h-[300px] p-[10px]" /></div>
                  <div className="mt-[-15%]"><img src="../assets/test.png" alt="image" className="w-[100%] h-[300px] p-[10px]" /></div>
             </div>
          </div>
     </div>
      </div>
    </div>
  </div>
</section>
</div>
);
}
