import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  const { i18n, t } = useTranslation();
  return (
    <header>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`${localStorage.getItem('i18nextLng') === 'ar'?'ltr':'rtl'} flex justify-between items-center h-20`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="../assets/logo1.png" 
              alt="Circular City"
              className="h-10 w-auto"
            />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex space-x-8">
            <RouterLink  to={`/${i18n.language}`}  className="fontInter text-[#242424] text-[14px]">
              {t('navbar.text1')}
            </RouterLink>
            <RouterLink  to={`/${i18n.language}/aboutUs`}  className="fontInter text-[#242424] text-[14px]">
              {t('navbar.text2')}
            </RouterLink>
            <RouterLink  to={`/${i18n.language}/ourProjects`}   className="fontInter text-[#242424] text-[14px]">
              {t('navbar.text3')}
            </RouterLink>
            <RouterLink  to={`/${i18n.language}/ourServices`} className="fontInter text-[#242424] text-[14px]">
             {t('navbar.text4')}
            </RouterLink>
            <RouterLink  to={`/${i18n.language}/contactUs`}  className="fontInter text-[#242424] text-[14px]">
             {t('navbar.text5')}
            </RouterLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
