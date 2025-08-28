import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`${localStorage.getItem('i18nextLng') === 'ar'?'ltr':'rtl'} flex justify-between items-center h-20`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="./assets/logo1.png" 
              alt="Circular City"
              className="h-10 w-auto"
            />
          </div>

          {/* Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-600 font-medium">
              {t('navbar.text1')}
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              {t('navbar.text2')}
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
              {t('navbar.text3')}
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
             {t('navbar.text4')}
            </a>
            <a href="#" className="text-gray-800 hover:text-blue-600">
             {t('navbar.text5')}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
