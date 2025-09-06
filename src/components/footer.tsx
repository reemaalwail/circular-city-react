import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import  Form  from "../components/Form";
export default function SiteFooter() {
    const { i18n, t } = useTranslation();
  return (
    <footer className="h-[100%] gradient-bg text-white relative">
      {/* top */}
      <div className="mx-auto p-[5%]">
        <div  className="flex flex-col lg:flex-row md:flex-row space-x-[8%] items-center lg:items-start md:items-start ltr">
          {/* Learn More */}
          <div className="flex flex-row justify-end items-start space-x-[40px]  mt-[15%] w-[40%]">
          <div className="mb-[10%] lg:mb-[0%] md:mb-[0%]">
            <div className="mb-4 text-[15.95px]">
            {t('footer.text7')}
            </div>
            <div className="space-y-3 flex justify-center  items-center lg:items-start md:items-start  flex-col">
           
                  <RouterLink to={`/${i18n.language}/aboutUs`} className="item text-[12.4px]  cursor-pointer">
                    {t('footer.text1')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/ourServices`}  className="text-[12.4px] item cursor-pointer">
                    {t('footer.text2')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/`}  className="text-[12.4px] item cursor-pointer">
                    {t('footer.text3')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/ourProjects`}  className="item text-[12.4px]  cursor-pointer">
                    {t('footer.text4')}
                  </RouterLink>
                  <RouterLink  to={`/${i18n.language}/ourPartners`}   className="text-[12.4px] item cursor-pointer">
                    {t('footer.text5')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/contactUs`}  className="text-[12.4px] item cursor-pointer">
                    {t('footer.text6')}
                  </RouterLink>
          
            </div>
          </div>
          {/* Contact Us */}
          <div className="mb-[10%] lg:mb-[0%] md:mb-[0%] flex items-center lg:items-start md:items-start  flex-col">
            <div className="mb-4 text-[15.95px]">
            {t('footer.text6')}
            </div>
            <div className="space-y-3 flex justify-center items-center lg:items-start md:items-start  flex-col">
                  <a href='' className="text-[12.4px] text-white">
                    <div className="flex flex-row">
                      <div className="text-[12.4px] text-[#ffffffc0] cursor-pointer"> {t('footer.text8')}:</div>
                      <div>+964 7XX XXXX XXX</div>
                    </div>
                  </a>
                  <a href='' className="text-[12.4px] text-white">
                  <div className="flex flex-row">
                      <div className="text-[12.4px] text-[#ffffffc0] cursor-pointer"> {t('footer.text9')}:</div>
                      <div>5663</div>
                    </div>
                  </a>
            </div>
          </div>
          </div>
            <Form/>
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
            <div className="text-[10.21px] text-[#7F96D2] cursor-pointer">© 2025 FAYA DEV. CIRCULAR CITY.</div>
          </a>
          <div className="flex flex-row items-center ">
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
