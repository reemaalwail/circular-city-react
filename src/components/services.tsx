import { useTranslation } from "react-i18next";
// import { Link as RouterLink } from "react-router-dom";

export default function PartnersSection() {
const { t } = useTranslation();

return (
<section className="relative container">
  <div className="relative mx-auto max-w-7xl py-16 ltr">
    <div className="text-[#1A4FC6] text-[16px] capitalize font-bold mb-[2%]">~ &nbsp; {t('service.text0')}</div>
    <div className=" bg-[#2A5BCA] pt-[15px] pb-[15px] rounded-[8px]">
      <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-evenly">

        <div className="cardService flex items-center justify-center bg-[#ffff] h-[185px] rounded-[6px] w-[251.78px] p-[12px]">
          <div className="flex flex-col items-center text-center justify-center">
            <img src="../assets/icon3.png" alt="image" className="w-[35px] h-[100%] bg-cover" />
            <div className="text-[14px] text-[#2C3847] font-bold mt-[10px]">
              {t('service.text7')}
            </div>
            <div className="text-[10px] text-[#828282] font-bold mt-[10px]">
              {t('service.text8')}
            </div>
          </div>
        </div>
        <div className="cardService flex items-center justify-center bg-[#ffff] h-[185px] rounded-[6px] w-[251.78px] p-[12px]">
          <div className="flex flex-col items-center text-center justify-center">
            <img src="../assets/icon4.png" alt="image" className="w-[35px] h-[100%] bg-cover" />
            <div className="text-[14px] text-[#2C3847] font-bold mt-[10px]">
              {t('service.text5')}
            </div>
            <div className="text-[10px] text-[#828282] font-bold mt-[10px]">
              {t('service.text6')}
            </div>
          </div>
        </div>
        <div className="cardService flex items-center justify-center bg-[#ffff] h-[185px] rounded-[6px] w-[251.78px] p-[12px]">
          <div className="flex flex-col items-center text-center justify-center">
            <img src="../assets/icon5.png" alt="image" className="w-[35px] h-[100%] bg-cover" />
            <div className="text-[14px] text-[#2C3847] font-bold mt-[10px]">
              {t('service.text3')}
            </div>
            <div className="text-[10px] text-[#828282] font-bold mt-[10px]">
              {t('service.text4')}
            </div>
          </div>
        </div>
        <div className="cardService flex items-center justify-center bg-[#ffff] h-[185px] rounded-[6px] w-[251.78px] p-[12px]">
          <div className="flex flex-col items-center text-center justify-center">
            <img src="../assets/icon6.png" alt="image" className="w-[35px] h-[100%] bg-cover" />
            <div className="text-[14px] text-[#2C3847] font-bold mt-[10px]">
              {t('service.text1')}
            </div>
            <div className="text-[10px] text-[#828282] font-bold mt-[10px]">
              {t('service.text2')}
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
);
}
