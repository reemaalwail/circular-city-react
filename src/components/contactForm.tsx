import { useTranslation } from "react-i18next";
import { useState } from "react";
import axios from "axios";

export default function KYCForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    projectName: "",
    companyName: "",
    address: "",
    contact1: "",
    beneficiary: "",
    contact2: "",
    foundUs: "Social Media",
    boq: "",
    request: "",
  });

  const [loading, setLoading] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [validFields, setValidFields] = useState({
    projectName: true,
    companyName: true,
    address: true,
    contact1: true,
    beneficiary: true,
    request: true,
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
      !updatedForm.projectName.trim() ||
      !updatedForm.companyName.trim() ||
      !updatedForm.address.trim() ||
      !updatedForm.contact1.trim() ||
      !updatedForm.beneficiary.trim() ||
      !updatedForm.request.trim();

    setDisabledButton(isEmpty);

    setValidFields({
      projectName: !!updatedForm.projectName.trim(),
      companyName: !!updatedForm.companyName.trim(),
      address: !!updatedForm.address.trim(),
      contact1: !!updatedForm.contact1.trim(),
      beneficiary: !!updatedForm.beneficiary.trim(),
      request: !!updatedForm.request.trim(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://press.fayadev.net/api/contact/form/15", {
        15: formData.projectName,
        13: formData.companyName,
      });

      setFormData({
        projectName: "",
        companyName: "",
        address: "",
        contact1: "",
        beneficiary: "",
        contact2: "",
        foundUs: "Social Media",
        boq: "",
        request: "",
      });

      setDisabledButton(true);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div
        className={`$${
          localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr"
        } flex flex-col lg:flex-row md:flex-row bg-white rounded-xl shadow-lg overflow-hidden p-[10px]`}
      >
        {/* Left Info */}
        <div className="cardInfo bg-[#2A5BCA] text-white p-8 md:w-1/3 flex flex-col justify-between rounded-[8.34px]">
          <div className="z-[2]">
            <div className="text-2xl font-bold mb-4">{t("form.text4")}</div>

            <div className="mb-6 text-[15.01px] leading-relaxed text-[#C9C9C9] capitalize">
              {t("form.text1")}
            </div>
            <br />

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-phone-volume text-[14px] text-[#FFFFFF]"></i>
                +964 077 1234 456
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-envelope  text-[14px] text-[#FFFFFF]"></i>
                info@gmail.com
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot text-[14px] text-[#FFFFFF]"></i>
                {t("form.text3")}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6 z-[2]">
            <a
              href="#"
              className="bg-white text-[#1C50C4] p-2 rounded-full w-[26.76px] h-[26.76px] flex items-center justify-center"
            >
              <i className="fa-brands fa-facebook-f text-[#1C50C4] text-[13.43px]"></i>
            </a>
            <a
              href="#"
              className="bg-white text-[#1C50C4] p-2 rounded-full w-[26.76px] h-[26.76px] flex items-center justify-center"
            >
              <i className="fa-brands fa-instagram text-[#1C50C4] text-[13.43px]"></i>
            </a>
            <a
              href="#"
              className="bg-white text-[#1C50C4] p-2 rounded-full w-[26.76px] h-[26.76px] flex items-center justify-center"
            >
              <i className="fa-brands fa-linkedin text-[#1C50C4] text-[13.43px]"></i>
            </a>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className={`$${
            localStorage.getItem("i18nextLng") === "ar" ? "rtl" : "ltr"
          } relative p-8 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6`}
        >
          <div className="closeForm rounded-[100%] flex items-center justify-center">
            <i className="fa-solid fa-xmark text-[#8D8D8D]"></i>
          </div>

          {/* Project Name */}
          <div
            className={
              localStorage.getItem("i18nextLng") === "ar"
                ? "form-floating rtl"
                : "form-floating ltr"
            }
          >
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleChange}
              placeholder={t("form.text5")}
              className="form-control p-2 outline-none text-[16px] text-[#8D8D8D] capitalize"
              required
            />
            <label
              htmlFor="floatingTextarea"
              className="text-[#6c757d] text-[16px]"
            >
              {t("form.text5")}
            </label>
            {!validFields.projectName && (
              <div
                className={`text-[10px] text-[#ffbaba] font-bold ${
                  localStorage.getItem("i18nextLng") === "ar" ? "ltr" : "rtl"
                }`}
              >
                {t("validText")}
              </div>
            )}
          </div>

          {/* Company Name */}
          <div
            className={
              localStorage.getItem("i18nextLng") === "ar"
                ? "form-floating rtl"
                : "form-floating ltr"
            }
          >
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder={t("form.text6")}
              className="form-control p-2 outline-none text-[16px] text-[#8D8D8D] capitalize"
              required
            />
            <label
              htmlFor="floatingTextarea"
              className="text-[#6c757d] text-[16px]"
            >
              {t("form.text6")}
            </label>
            {!validFields.companyName && (
              <div
                className={`text-[10px] text-[#ffbaba] font-bold ${
                  localStorage.getItem("i18nextLng") === "ar" ? "ltr" : "rtl"
                }`}
              >
                {t("validText")}
              </div>
            )}
          </div>

          {/* Address */}
          <div
            className={
              localStorage.getItem("i18nextLng") === "ar"
                ? "form-floating rtl"
                : "form-floating ltr"
            }
          >
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder={t("form.text7")}
              className="form-control p-2 outline-none text-[16px] text-[#8D8D8D] capitalize"
              required
            />
            <label
              htmlFor="floatingTextarea"
              className="text-[#6c757d] text-[16px]"
            >
              {t("form.text7")}
            </label>
            {!validFields.address && (
              <div
                className={`text-[10px] text-[#ffbaba] font-bold ${
                  localStorage.getItem("i18nextLng") === "ar" ? "ltr" : "rtl"
                }`}
              >
                {t("validText")}
              </div>
            )}
          </div>

          {/* Contact1 */}
          <div
            className={
              localStorage.getItem("i18nextLng") === "ar"
                ? "form-floating rtl"
                : "form-floating ltr"
            }
          >
            <input
              type="text"
              name="contact1"
              value={formData.contact1}
              onChange={handleChange}
              placeholder={t("form.text8")}
              className="form-control p-2 outline-none text-[16px] text-[#8D8D8D] capitalize"
              required
            />
            <label
              htmlFor="floatingTextarea"
              className="text-[#6c757d] text-[16px]"
            >
              {t("form.text8")}
            </label>
            {!validFields.contact1 && (
              <div
                className={`text-[10px] text-[#ffbaba] font-bold ${
                  localStorage.getItem("i18nextLng") === "ar" ? "ltr" : "rtl"
                }`}
              >
                {t("validText")}
              </div>
            )}
          </div>

          {/* Beneficiary */}
          <div
            className={
              localStorage.getItem("i18nextLng") === "ar"
                ? "form-floating rtl"
                : "form-floating ltr"
            }
          >
            <input
              type="text"
              name="beneficiary"
              value={formData.beneficiary}
              onChange={handleChange}
              placeholder={t("form.text9")}
              className="form-control p-2 outline-none text-[16px] text-[#8D8D8D] capitalize"
              required
            />
            <label
              htmlFor="floatingTextarea"
              className="text-[#6c757d] text-[16px]"
            >
              {t("form.text9")}
            </label>
            {!validFields.beneficiary && (
              <div
                className={`text-[10px] text-[#ffbaba] font-bold ${
                  localStorage.getItem("i18nextLng") === "ar" ? "ltr" : "rtl"
                }`}
              >
                {t("validText")}
              </div>
            )}
          </div>

          {/* Message */}
          <div
            className={
              localStorage.getItem("i18nextLng") === "ar"
                ? "form-floating rtl col-span-2"
                : "form-floating ltr col-span-2"
            }
          >
            <textarea
              name="request"
              cols={20}
              onChange={handleChange}
              value={formData.request}
              id="floatingTextarea"
              placeholder={t("form.text12")}
              className="form-control border-b outline-none text-[16px] text-[#8D8D8D] capitalize"
            ></textarea>
            <label
              htmlFor="floatingTextarea"
              className="text-[#6c757d] text-[16px]"
            >
              {t("form.text12")}
            </label>
            {!validFields.request && (
              <div
                className={`text-[10px] text-[#ffbaba] font-bold ${
                  localStorage.getItem("i18nextLng") === "ar" ? "ltr" : "rtl"
                }`}
              >
                {t("validText")}
              </div>
            )}
          </div>

          {/* Submit */}
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              disabled={loading || disabledButton}
              className="buttonForm flex items-center justify-center text-[16px] font w-[114.03px] py-3 bg-[#268B43] text-white rounded-[15px] hover:bg-[#268b43cd] transition pointer"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
