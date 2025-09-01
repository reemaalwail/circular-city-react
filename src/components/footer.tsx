import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function SiteFooter() {
    const { i18n, t } = useTranslation();
  return (
    <footer className="bg-[#2A5BCA] text-white">
      {/* top */}
      <div className="mx-auto p-[5%]">
        <div  className="flex flex-col lg:flex-row md:flex-row space-x-[8%] items-center lg:items-start md:items-start ltr">
          {/* Learn More */}
          <div className="mb-[10%] lg:mb-[0%] md:mb-[0%]">
            <div className="mb-4 text-[15.95px]">
            {t('footer.text7')}
            </div>
            <div className="space-y-3 flex justify-center  items-center lg:items-start md:items-start  flex-col">
           
                  <RouterLink to={`/${i18n.language}/aboutUs`} className="item text-[12.4px] ">
                    {t('footer.text1')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/ourServices`}  className="text-[12.4px] item">
                    {t('footer.text2')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/`}  className="text-[12.4px] item">
                    {t('footer.text3')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/ourProjects`}  className="item text-[12.4px] ">
                    {t('footer.text4')}
                  </RouterLink>
                  <RouterLink  to={`/${i18n.language}/ourPartners`}   className="text-[12.4px] item">
                    {t('footer.text5')}
                  </RouterLink>
                  <RouterLink to={`/${i18n.language}/contactUs`}  className="text-[12.4px] item">
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
                      <div className="text-[12.4px] text-[#ffffffc0]"> {t('footer.text8')}:</div>
                      <div>+964 7XX XXXX XXX</div>
                    </div>
                  </a>
                  <a href='' className="text-[12.4px] text-white">
                  <div className="flex flex-row">
                      <div className="text-[12.4px] text-[#ffffffc0]"> {t('footer.text9')}:</div>
                      <div>5663</div>
                    </div>
                  </a>
            </div>
          </div>
        </div>

        {/* divider spacing */}
        <div className="mt-10 border-t border-white/15" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row ltr">
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
          <a href="https://faya.dev/" className="text-xs text-white/70">
            © 2025 FAYA DEV. CIRCULAR CITY.
          </a>
        </div>
      </div>
    </footer>
  );
}
