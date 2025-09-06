import { useTranslation } from "react-i18next";
// import { Link as RouterLink } from "react-router-dom";

export default function PartnersSection() {
const { t } = useTranslation();

return (
<section className="relative container">
  <div className="relative mx-auto max-w-7xl py-16 ltr">
    <div className="fontJokkerBold text-[#1A4FC6] text-[18.73px] capitalize mb-[2%]">~ &nbsp; {t('discoverDifference.text1')}</div>
    <div className="pt-[15px] pb-[15px] rounded-[8px]">
      <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-between">

        <div className="ltr mb-[10px] lg:mb-[0px] md:mb-[10px] flex items-center justify-center p-[12px]">
          <div className="flex flex-col items-start text-left relative">
                     <div className="titlediscover w-[2.59px] h-[67px] bg-[#2A5BCA] absolute top-[10%]"></div>
            <div className="text-[40px] text-[#2A5BCA] fontJokkerBoldwoff mt-[10px] w-[300px] ml-[10px] uppercase">
              Lorem Ipsum is simply
            </div>
            <div className="fontJokkerMedium text-[16px] text-[#64717C] mt-[10px] w-[296.78px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing 
            </div>
          </div>
        </div>
        <div className="w-[200px]  mb-[10px] lg:mb-[0px] md:mb-[10px] flex items-center justify-center  p-[12px]">
         <img  src="../assets/logo7.png" alt="Circular City" className="h-[100%] w-[100%]"/>
        </div>
        <div className="rtl mb-[10px] lg:mb-[0px] md:mb-[10px] flex items-center justify-center  p-[12px]">
          <div className="flex flex-col items-end text-left relative">
             <div className="titlediscover w-[2.59px] h-[67px] bg-[#FF0000] absolute top-[10%]"></div>
            <div className="text-[40px] text-[#FF0000] fontJokkerBoldwoff mt-[10px] w-[300px] ml-[10px] uppercase">
              Lorem Ipsum is simply
            </div>
            <div className="fontJokkerMedium text-[16px] text-[#64717C] mt-[10px] w-[296.78px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing 
            </div>
          </div>
        </div>
     
      </div>

    </div>
  </div>
</section>
);
}
