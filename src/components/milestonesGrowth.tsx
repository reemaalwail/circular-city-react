import { useTranslation } from "react-i18next";
// import { Link as RouterLink } from "react-router-dom";

export default function PartnersSection() {
    const { t } = useTranslation();
        
type Milestone = {
  year: string;
  text: string;
};

const MILESTONES: Milestone[] = [
  { year: "2006", text: "Company founding" },
  { year: "2010", text: "Service expansion" },
  { year: "2015", text: "Exclusive partnerships" },
  { year: "2020", text: "200+ projects" },
  { year: "2023", text: "Reputation enhancement" },
];  
  return (
    <section className="relative container">
      <div className="relative mx-auto max-w-7xl py-16 ltr">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
          <img src="../assets/logo6.png" alt="image" className="w-[251.24px] h-[54.68px] bg-cover" />
            <div className="text-[16px] max-w-2xl  text-black">
            <div className="text-[#1A4FC6] font-bold text-[16px] max-w-2xl mt-[4%]">
              {t('milestonesGrowth.text1')}
            </div>

<div className="flex flex-row items-center mt-[4%]">
  <div className="text-black text-[16px]  font-bold"><span className="text-[#2A5BCA]">-</span> 2006 : </div>  
  <div className="text-[16px] max-w-2xl text-black">{t('milestonesGrowth.text2')}</div>
</div>
<div className="flex flex-row items-center">
  <div className="text-black text-[16px]  font-bold"><span className="text-[#2A5BCA]">-</span> 2010 : </div>  
  <div className="text-[16px] max-w-2xl text-black">{t('milestonesGrowth.text3')}</div>
</div>
<div>
  <div className="text-black text-[16px]  w-[100%] font-bold"><span className="text-[#2A5BCA]">-</span> 2015 : 
   <div className="text-[16px] font-medium max-w-2xl text-black">{t('milestonesGrowth.text4')}</div>
  </div>  
</div>
<div className="flex flex-row items-center">
  <div className="text-black text-[16px]  font-bold"><span className="text-[#2A5BCA]">-</span> 2020 : </div>  
  <div className="text-[16px] max-w-2xl text-black">{t('milestonesGrowth.text5')}</div>
</div>
<div className="flex flex-row items-center">
  <div className="text-black text-[16px]  font-bold"><span className="text-[#2A5BCA]">-</span> 2023 : </div>  
  <div className="text-[16px] max-w-2xl text-black">{t('milestonesGrowth.text6')}</div>
</div>

</div>
          </div>

          <div className="flex w-full flex-col">
                   
                              
                              <div className="flex flex-row-reverse items-end">
                                 <div className="flex flex-col items-start ltr">
                                <div className="text-[#2A5BCA] text-[24px] font-bold">
                                 2006
                              </div>
                                 <div className="flex items-center border-[#E5E5E5] h-[39.29px] border-[0.61px] p-[10px] rounded-[6.14px]">
                                 <div className="text-[#242424] text-[14px] font-medium">Company founding</div>
                                 </div>
                               </div>
                                 <div className="mr-[10px]">
                                  <img src="../assets/line2.png" alt="line icon" className="w-[100%] h-[53.42px] bg-cover" />      
                                 </div>
                              </div>
                              
                    

          </div>
        </div>
      </div>
    </section>
  );
}
