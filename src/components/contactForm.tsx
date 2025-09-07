import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";

export default function KYCForm() {
const { t } = useTranslation();

const [formData,setFormData] = useState({
Fname: '',
Lname:'',
email:'',
Nphone:'',
message:'',
subject:''
});
const [loading, setLoading] = useState(false);
const [disabledButton, setDisabledButton] = useState(true);
const [validFields, setValidFields] = useState({
Fname: true,
Lname:true,
email:true,
Nphone:true,
message:true,
subject:true
});
const handleChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
  ...prev,
  [name]: value,
  }));

  const updatedForm = { ...formData, [name]: value };

  const isEmpty =
  !updatedForm.Fname.trim()

  setDisabledButton(isEmpty);

  setValidFields({
  Fname: !!updatedForm.Fname.trim(),
  Lname: !!updatedForm.Lname.trim(),
  email: !!updatedForm.Lname.trim(),
  Nphone: !!updatedForm.Lname.trim(),
  message: !!updatedForm.Lname.trim(),
  subject: !!updatedForm.Lname.trim(),
  });
  };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
  await axios.post("https://press.fayadev.net/api/contact/form/15", {
  15: formData.Fname,
  });

  setFormData({
  Fname: "",
  Lname:"",
  email:"",
  Nphone:"",
  message:"",
  subject:""
  });

  setDisabledButton(true);
  } catch (err) {
  alert(err);
  } finally {
  setLoading(false);
  }
  };

  return (
  <div className="w-[100%] bg-[#fff] ">
    <div className="container">
      <div className="bg-[#fff] flex flex-row justify-center rounded-[6.55px] w-[100%] p-[5px]">
        {/* Left Info */}
        <div className="cardInfo overflow-hidden bg-[#2A5BCA] w-[35%] h-[400px] rounded-[6.55px] p-[20px] m-[5px]">
          <div className="flex flex-col justify-between h-[100%]">
            <div>
            <div className="text-[18.35px] text-[#FFFFFF] fontPoppinsSemiBold">{t('form.text4')}</div>
            <div className="fontPoppinsRegular text-[11.79px] text-[#C9C9C9]">{t('form.text1')}</div>
            </div>

            <div className="space-y-4">

              <div className="flex items-center gap-3 cursor-pointer">
                <div><i className="fa-solid fa-phone-volume text-[14px] text-[#FFFFFF]"></i></div>
                <div className="fontPoppinsRegular text-[10.48px] text-[#FFFFFF]">+964 077 1234 456</div>
              </div>

              <div className="flex items-center gap-3 cursor-pointer">
                <div><i className="fa-solid fa-envelope text-[14px] text-[#FFFFFF]"></i></div>
                <div className="fontPoppinsRegular text-[10.48px] text-[#FFFFFF]">info@gmail.com</div>
              </div>

              <div className="flex items-center gap-3 cursor-pointer">
                <div><i className="fa-solid fa-location-dot text-[14px] text-[#FFFFFF]"></i></div>
                <div className="text-[10.48px] text-[#FFFFFF] fontPoppinsRegular">
                  Iraq - Baghdad - Mansour - 14 Ramadan Street
                </div>
              </div>

            </div>
            
            <div className="flex flex-row items-center">
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
        {/* Right Form */}
        <div className="bg-[#FFFFFF] w-[50%] p-[10px] m-[5px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between space-x-[10px] mt-[15px] mb-[15px]">
              {/* first name */}
              <div className="relative w-full ltr">
                <input type="text" name="Fname" value={formData.Fname} onChange={handleChange} id="Fname" placeholder=''
                  className="peer block w-full bg-transparent outline-none
          border-b-[1px]  border-[#8D8D8D] fontPoppinsMedium
          py-3 text-[12px] text-gray-700 
          focus:border-gray-800
          transition" required />
                <label htmlFor="Fname" className="pointer-events-none absolute left-0
          text-gray-400 bg-transparent
          transition-all duration-200 text-[12px]
          top-1/2 -translate-y-1/2 text-base fontPoppinsMedium
          peer-focus:-top-0.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[#2A5BCA]
          peer-[:not(:placeholder-shown)]:-top-0.5 peer-[:not(:placeholder-shown)]:translate-y-0
          peer-[:not(:placeholder-shown)]:text-[12px]">
                  {t('form.text5')}
                </label>
                {!validFields.Fname && (
                <div className={`text-[10px] text-[#ffbaba] font-bold ${ localStorage.getItem("i18nextLng")==="ar"
                  ? "ltr" : "rtl" }`}>
                  {t("validText")}
                </div>
                )}
              </div>
              {/* Last Name */}
              <div className="relative w-full ltr">
                <input type="text" name="Lname" value={formData.Lname} onChange={handleChange} id="Lname" placeholder=''
                  className="peer block w-full bg-transparent outline-none
          border-b-[1px]  border-[#8D8D8D]
          py-3 text-[12px] text-gray-700 fontPoppinsMedium
          focus:border-gray-800
          transition" required />
                <label htmlFor="Lname" className="pointer-events-none absolute left-0
          text-gray-400 bg-transparent
          transition-all duration-200 text-[12px]
          top-1/2 -translate-y-1/2 text-base fontPoppinsMedium
          peer-focus:-top-0.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[#2A5BCA]
          peer-[:not(:placeholder-shown)]:-top-0.5 peer-[:not(:placeholder-shown)]:translate-y-0
          peer-[:not(:placeholder-shown)]:text-[12px]">
                  {t('form.text6')}
                </label>
                {!validFields.Lname && (
                <div className={`text-[10px] text-[#ffbaba] font-bold ${ localStorage.getItem("i18nextLng")==="ar"
                  ? "ltr" : "rtl" }`}>
                  {t("validText")}
                </div>
                )}
              </div>
              
            </div>
            <div className="flex flex-row justify-between space-x-[10px] mt-[15px] mb-[15px]">
              {/* email */}
              <div className="relative w-full ltr">
                <input type="text" name="email" value={formData.email} onChange={handleChange} id="email" placeholder=''
                  className="peer block w-full bg-transparent outline-none
          border-b-[1px]  border-[#8D8D8D] fontPoppinsMedium
          py-3 text-[12px] text-gray-700
          focus:border-gray-800
          transition" required />
                <label htmlFor="email" className="pointer-events-none absolute left-0
          text-gray-400 bg-transparent
          transition-all duration-200 text-[12px]
          top-1/2 -translate-y-1/2 text-base fontPoppinsMedium
          peer-focus:-top-0.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[#2A5BCA]
          peer-[:not(:placeholder-shown)]:-top-0.5 peer-[:not(:placeholder-shown)]:translate-y-0
          peer-[:not(:placeholder-shown)]:text-[12px]">
                  {t('form.text7')}
                </label>
                {!validFields.email && (
                <div className={`text-[10px] text-[#ffbaba] font-bold ${ localStorage.getItem("i18nextLng")==="ar"
                  ? "ltr" : "rtl" }`}>
                  {t("validText")}
                </div>
                )}
              </div>
              {/* Nphone */}
              <div className="relative w-full ltr">
                <input type="text" name="Nphone" value={formData.Nphone} onChange={handleChange} id="Nphone" placeholder=''
                  className="peer block w-full bg-transparent outline-none
          border-b-[1px]  border-[#8D8D8D]
          py-3 text-[12px] text-gray-700 fontPoppinsMedium
          focus:border-gray-800
          transition" required />
                <label htmlFor="Nphone" className="pointer-events-none absolute left-0
          text-gray-400 bg-transparent
          transition-all duration-200 text-[12px]
          top-1/2 -translate-y-1/2 text-base fontPoppinsMedium
          peer-focus:-top-0.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[#2A5BCA]
          peer-[:not(:placeholder-shown)]:-top-0.5 peer-[:not(:placeholder-shown)]:translate-y-0
          peer-[:not(:placeholder-shown)]:text-[12px]">
                  {t('form.text8')}
                </label>
                {!validFields.Nphone && (
                <div className={`text-[10px] text-[#ffbaba] font-bold ${ localStorage.getItem("i18nextLng")==="ar"
                  ? "ltr" : "rtl" }`}>
                  {t("validText")}
                </div>
                )}
              </div>
            </div>
            <div className="relative w-full ltr mt-[15px] mb-[15px]">
              <div className="mb-3 text-[14px] font-semibold leading-none text-[#268B43]">
           {t('form.text12')}
              </div>
              <div className="flex flex-row">
                <label className=" flex flex-row cursor-pointer select-none items-center" style={{ display: "flex" }}>
      <input type="radio" name="subject" defaultChecked className="peer sr-only"/>
      <span className="relative grid h-8 w-8 place-items-center">
        <span className="block size-4 rounded-full bg-[#e2e3e6] peer-checked:hidden" />
        <span className="hidden size-[8.52px] items-center justify-center rounded-full bg-[#21b86b] text-white peer-checked:flex">
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor">
            <path d="M20 6 9 17l-5-5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </span>
      <span className="text-[14px] font-medium leading-none text-[#2A5BCA]">test</span>
    </label>
              </div>
            </div>
<div className="relative w-full ltr mt-[15px] mb-[15px]">
                <textarea   rows={1} name="message" value={formData.message} onChange={handleChange} id="message" placeholder=''
                  className="peer block w-full bg-transparent outline-none
          border-b-[1px]  border-[#8D8D8D]
          py-3 text-[12px] text-gray-700
          focus:border-gray-800 fontPoppinsMedium
          transition" required />
                <label htmlFor="message" className="pointer-events-none absolute left-0
          text-gray-400 bg-transparent
          transition-all duration-200 text-[12px]
          top-1/2 -translate-y-1/2 text-base fontPoppinsMedium
          peer-focus:-top-0.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-[#2A5BCA]
          peer-[:not(:placeholder-shown)]:-top-0.5 peer-[:not(:placeholder-shown)]:translate-y-0
          peer-[:not(:placeholder-shown)]:text-[12px]">
                  {t('form.text9')}
                </label>
                {!validFields.message && (
                <div className={`text-[10px] text-[#ffbaba] font-bold ${ localStorage.getItem("i18nextLng")==="ar"
                  ? "ltr" : "rtl" }`}>
                  {t("validText")}
                </div>
                )}
              </div>
            {/* Submit */}
            <div className="col-span-2 flex justify-end mt-[10px]">
              <button type="submit" disabled={loading || disabledButton}
                className="buttonForm w-[179.03px]  flex items-center justify-center pl-[10px] pr-[10px] h-[45.01px] py-3 bg-[#268B43] rounded-[4.17px] hover:bg-[#268b43cd] transition pointer">
                <div className="text-[12px] font-semibold text-white">{loading ? t('form.text11') : t('form.text10')}</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
  }

  