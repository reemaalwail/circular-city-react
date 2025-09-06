import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import  Form  from "../components/Form";
export default function SiteFooter() {
  const { i18n, t } = useTranslation();
  const isContactPage = location.pathname.includes("/contactUs");

  return (
    <footer className="h-[100%] gradient-bg text-white relative home">
      {/* top */}
      <div className="mx-auto p-[2%] lg:p-[5%] md:p-[5%]">
        <div  className="flex flex-col lg:flex-row md:flex-row space-x-[0%] lg:space-x-[8%] md:space-x-[8%] items-center lg:items-start md:items-start ltr">
          {/* Learn More */}
          <div className="orders flex flex-row justify-center lg:justify-end md:justify-end items-center lg:items-start md:items-start space-x-[40px]  mt-[15%] w-[100%] lg:w-[40%] md:w-[40%]">
          <div className="mb-[10%] lg:mb-[0%] md:mb-[0%]">
            <div className="fontInterSemiBold mb-4 text-[15.95px]">
            {t('footer.text7')}
            </div>
            <div className="space-y-3 flex justify-center  items-center lg:items-start md:items-start  flex-col">
           
                  <RouterLink to={`/${i18n.language}/aboutUs`}>
                   <div className="fontInterRegular item text-[#fff] opacity-[70%] text-[12.4px]  cursor-pointer">{t('footer.text1')}</div>
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/ourServices`}>
                    <div className="fontInterRegular item text-[#fff] opacity-[70%] text-[12.4px]  cursor-pointer">{t('footer.text2')}</div>
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/`}>
                   <div className="fontInterRegular item text-[#fff] opacity-[70%] text-[12.4px]  cursor-pointer">{t('footer.text3')}</div>
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/ourProjects`}>
                     <div className="fontInterRegular item text-[#fff] opacity-[70%] text-[12.4px]  cursor-pointer">{t('footer.text4')}</div>
                  </RouterLink>
                  <RouterLink  to={`/${i18n.language}/ourPartners`}>
                   <div className="fontInterRegular item text-[#fff] opacity-[70%] text-[12.4px]  cursor-pointer">{t('footer.text5')}</div>
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/contactUs`}>
                   <div className="fontInterRegular item text-[#fff] opacity-[70%] text-[12.4px]  cursor-pointer">{t('footer.text6')}</div>
                  </RouterLink>
          
            </div>
          </div>
          {/* Contact Us */}
          <div className="mb-[10%] lg:mb-[0%] md:mb-[0%] flex items-center lg:items-start md:items-start  flex-col">
            <div className="fontInterSemiBold mb-4 text-[15.95px]">
            {t('footer.text6')}
            </div>
            <div className="space-y-3 flex justify-center items-center lg:items-start md:items-start  flex-col">
                  <a href='' className="text-[12.4px] text-white">
                    <div className="flex flex-row">
                      <div className="fontInterRegular text-[12.4px] text-[#ffffffc0] cursor-pointer"> {t('footer.text8')}:</div>
                      <div className="fontInterSemiBold textt-[12.4px] text-[#ffff]">+964 7XX XXXX XXX</div>
                    </div>
                  </a>
                  <a href='' className="text-[12.4px] text-white">
                  <div className="flex flex-row">
                      <div className="fontInterRegular text-[12.4px] text-[#ffffffc0] cursor-pointer"> {t('footer.text9')}:</div>
                      <div className="fontInterSemiBold textt-[12.4px] text-[#ffff]">5663</div>
                    </div>
                  </a>
            </div>
          </div>
          </div>
           <div className="w-[100%]"><Form/></div>
        </div>

        {/* divider spacing */}
        <div className="mt-10 border-t border-white/15" />
        <div className="mt-6 flex flex-col lg:flex-row md:flex-row items-center gap-4 ltr">
          <div className="flex items-center gap-3">
            <div className="leading-tight">
            <img
              src="../assets/logo5.png" 
              alt="Circular City"
              className="h-[40px] w-full"
            />
            </div>
          </div>
          {/* copyright */}
          <a href="https://faya.dev/">
            <div className="fontInterLight text-[10.21px] text-[#7F96D2] cursor-pointer">© 2025 FAYA DEV. CIRCULAR CITY.</div>
          </a>
          <div  className={isContactPage == true ? "hidden" : "flex flex-row items-center"}>
             <a href="">
               <div className="bg-[#fff] w-[36.47px] h-[36.47px] rounded-full flex items-center justify-center m-[10px] cursor-pointer">
                <i className="fa-brands fa-facebook-f text-[#1C50C4] w-[14.59px] h-[14.59px]"></i>
               </div>
             </a>
             <a href="">
               <div className="bg-[#fff] w-[36.47px] h-[36.47px] rounded-full flex items-center justify-center m-[10px] cursor-pointer">
                <i className="fa-brands fa-instagram text-[#1C50C4] w-[14.59px] h-[14.59px]"></i>
               </div>
             </a>
             <a href="">
               <div className="bg-[#fff] w-[36.47px] h-[36.47px] rounded-full flex items-center justify-center m-[10px] cursor-pointer">
                <i className="fa-brands fa-linkedin text-[#1C50C4] w-[14.59px] h-[14.59px]"></i>
               </div>
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
