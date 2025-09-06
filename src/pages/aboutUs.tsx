import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

type aboutUs = {
  image: string;
  name: string;
};

type ApiResponse = {
  data: aboutUs[];
};
export default function AboutUs() {
 const {  t } = useTranslation();
  const [AboutUs, setAboutUs] = useState<aboutUs[]>([]);
  const [loading, setLoading] = useState(true);
  const raw = localStorage.getItem("AboutUsDataLength");
  const countLoadding = raw || 4;
  useEffect(() => {
    fetch("https://press.fayadev.net/api/pages/15/39")
      .then((res) => res.json())
      .then((json: ApiResponse) => {
        setAboutUs(json.data || []);
      })
      .catch(() => setAboutUs([]))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section>
    <div className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       <div className="flex flex-col lg:flex-row md:flex-row ltr justify-between">

       <div className="flex flex-col">

        <div>
          <div className="text-[#268B43] text-[41.68px] font-bold">{t('about.text6')}</div>
          <div className="text-[#64717C] text-[16.67px] font-medium mt-[5%]">description</div>
        </div>
        
        <div className="flex flex-col justify-between mt-[8%]">
          <div className="flex flex-col lg:flex-row md:flex-row justify-between w-[100%] items-center">
            <div className="flex items-center text-center  lg:!text-left md:!text-left lg:items-start md:items-start  flex-col mr-[10px] w-[100%]">
              <div className="text-[#268B43] text-[48.35px] font-bold">1.</div>
              <div className="text-[#2A5BCA] text-[20.01px] font-bold">{t('about.text7')}</div>
              <div className="text-[#64717C] text-[13.34px] w-[227px]">test test test test test test test test test test test test test </div>
            </div>
            <div className="flex flex-col  items-center text-center  lg:!text-left md:!text-left lg:items-start md:items-start mr-[10px] w-[100%]">
              <div className="text-[#268B43] text-[48.35px] font-bold">2.</div>
              <div className="text-[#2A5BCA] text-[20.01px] font-bold">{t('about.text8')}</div>
              <div className="text-[#64717C] text-[13.34px] w-[227px]">test test test test test test test test test test test test test </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row justify-between w-[100%] items-center">
            <div className="flex flex-col  items-center text-center  lg:!text-left md:!text-left lg:items-start md:items-start mr-[10px] w-[100%]">
              <div className="text-[#268B43] text-[48.35px] font-bold">3.</div>
              <div className="text-[#2A5BCA] text-[20.01px] font-bold">{t('about.text9')}</div>
              <div className="text-[#64717C] text-[13.34px] w-[227px]">test test test test test test test test test test test test test </div>
            </div>
            <div className="flex flex-col  items-center text-center  lg:!text-left md:!text-left lg:items-start md:items-start mr-[10px] w-[100%]">
              <div className="text-[#268B43] text-[48.35px] font-bold">4.</div>
              <div className="text-[#2A5BCA] text-[20.01px] font-bold">{t('about.text10')}</div>
              <div className="text-[#64717C] text-[13.34px] w-[227px]">test test test test test test test test test test test test test </div>
            </div>
          </div>
        </div>


        </div>
        <div className="flex flex-row justify-evenly lg:justify-between md:justify-between mt-[10%] lg:mt-[0%] md:mt-[0%]">
        <div className="ml-[10px] mr-[10px]">
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[63px] bg-cover"/></figure>
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[188px] bg-cover"/></figure>
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[104px] bg-cover"/></figure>
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[188px] bg-cover"/></figure>
        </div>
        <div className="ml-[10px] mr-[10px]">
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[101px] bg-cover"/></figure>
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[104px] bg-cover"/></figure>
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[188px] bg-cover"/></figure>
        <figure><img src="../assets/test.png" alt="image" className="w-[208px] h-[104px] bg-cover"/></figure>
        </div>
       
        </div>

       </div>
      </div>
    </div>
      {/* Pillars */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-10 md:grid-cols-3 items-end">
            <div className="p-6 text-left">
              <div className="mb-3 flex flex-col items-end titleLine1">
                <img src="../assets/icon9.png" alt="icon" className="w-[45.76238250732422px]"/>
                <div className="mt-[15px] text-[#FF0000] text-[40px] font-extrabold uppercase leading-tight text-left">Lorem Ipsum  is simply</div>
              </div>
              <div className="text-[16.67px] leading-6 text-[#64717C]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing </div>
            </div>
            <div className="p-6 text-left">
              <div className="mb-3 flex flex-col items-end titleLine2">
                <img src="../assets/icon8.png" alt="icon" className="w-[37.591739654541016px]"/>
                <div className="mt-[15px] text-[#2A5BCA] text-[40px] font-extrabold uppercase leading-tight text-left">Lorem Ipsum  is simply</div>
              </div>
              <div className="text-[16.67px] leading-6 text-[#64717C]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing </div>
            </div>
            <div className="p-6 text-left">
              <div className="mb-3 flex flex-col items-end titleLine3">
                <img src="../assets/icon7.png" alt="icon" className="w-[40px]"/>
                <div className="mt-[15px] text-[#268B43] text-[40px] font-extrabold uppercase leading-tight text-left">Lorem Ipsum  is simply</div>
              </div>
              <div className="text-[16.67px] leading-6 text-[#64717C]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing </div>
            </div>
        
        </div>
      </div>
      {/* Timeline */}
      <div className="mx-auto p-[10px]">
        <div className="relative flex flex-col lg:flex-row md:flex-row flex-wrap items-center w-[100%] justify-center text-center">
          {/*1*/}
            <div className="flex flex-col items-center lg:items-start md:items-start mb-[20px] lg:mb-[0px] md:mb-[0px]">
                <div className="text-[21.66px] font-bold text-[#2A5BCA] relative mb-2">
                2023
              </div>
              <div className="w-[183.71775817871094px] h-[35px] flex items-center justify-center rounded-[5.44px] border border-[#E5E5E5] px-3 py-1 text-[12.92px] text-[#242424] bg-white">
              {t('about.text1')}
              </div>
            </div>
            <div className="itemY  items-end mb-[16px] hidden lg:flex md:flex ml-[10px] mr-[10px] h-[60px]"><img src="../assets/line.png" className="w-[50px]"/></div>
            {/*2*/}
            <div className="flex flex-col  items-center lg:items-start md:items-start mb-[20px] lg:mb-[0px] md:mb-[0px]">
                <div className="text-[21.66px] font-bold text-[#2A5BCA] relative mb-2">
                2020
              </div>
              <div className="w-[164.5822296142578px] h-[35px] flex items-center justify-center rounded-[5.44px] border border-[#E5E5E5] px-3 py-1 text-[12.92px] text-[#242424] bg-white">
              {t('about.text2')}
              </div>
            </div>
            <div className="itemY items-end mb-[16px] hidden lg:flex md:flex ml-[10px] mr-[10px] h-[60px]"><img src="../assets/line.png" className="w-[50px]"/></div>
         {/*3*/}
         <div className="flex flex-col items-center lg:items-start md:items-start mb-[20px] lg:mb-[0px] md:mb-[0px]">
                <div className="text-[21.66px] font-bold text-[#2A5BCA] relative mb-2">
                2015
              </div>
              <div className="w-[164.5822296142578px] h-[35px] flex items-center justify-center rounded-[5.44px] border border-[#E5E5E5] px-3 py-1 text-[12.92px] text-[#242424] bg-white">
              {t('about.text3')}
              </div>
            </div>
            <div className="itemY  hidden lg:flex md:flex items-end mb-[16px]  ml-[10px] mr-[10px] h-[60px]"><img src="../assets/line.png" className="w-[50px]"/></div>
         {/*4*/}
 <div className="flex flex-col  items-center lg:items-start md:items-start mb-[20px] lg:mb-[0px] md:mb-[0px]">
                <div className="text-[21.66px] font-bold text-[#2A5BCA] relative mb-2">
                2010
              </div>
              <div className="w-[164.5822296142578px] h-[35px] flex items-center justify-center rounded-[5.44px] border border-[#E5E5E5] px-3 py-1 text-[12.92px] text-[#242424] bg-white">
              {t('about.text4')}
              </div>
            </div>
            <div className="itemY  hidden lg:flex md:flex items-end mb-[16px] ml-[10px] mr-[10px] h-[60px]"><img src="../assets/line.png" className="w-[50px]"/></div>

      {/*5*/}
      <div className="flex flex-col  items-center lg:items-start md:items-start mb-[20px] lg:mb-[0px] md:mb-[0px]">
                <div className="text-[21.66px] font-bold text-[#2A5BCA] relative mb-2">
                2006
              </div>
              <div className="w-[164.5822296142578px] h-[35px] flex items-center justify-center rounded-[5.44px] border border-[#E5E5E5] px-3 py-1 text-[12.92px] text-[#242424] bg-white">
              {t('about.text5')}
              </div>
            </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6 mt-[5%]">
        {loading ? (
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: Number(countLoadding) }).map((_, i) => (
            <div key={i} className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm animate-pulse">
              <div className="h-20 w-20 mb-2 bg-slate-200 rounded" />
              <div className="h-3 w-16 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      ) : (
<div className="grid gap-6 md:grid-cols-3">
        {AboutUs.map((p, i) => (
            <figure key={i}>
            <img src={p.image} className="w-[100%] object-cover"/>
            </figure>
        ))}
        </div>
      )}
      </div>

      <div className="mb-[5%] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-[16.67px]  text-[#64717C] text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </div>
      </div>
    </section>
  );
};

