import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

export default function PartnersSection() {
    const { i18n, t } = useTranslation();
          
  return (
    <section className="relative  container border-t-2 border-[#D0D0D0]">
      <div className="relative mx-auto max-w-7xl py-16 ltr">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className=" text-[18.19px] font-bold tracking-[0.3em] text-[#2A5BCA] uppercase">
              {t('partners.text1')}
            </div>

            <div className="text-[40px] font-medium text-black mb-6">
                    {t('partners.text2')}
              <span className="text-[#2A5BCA] ml-[5px] mr-[5px] font-bold">
                 {t('partners.text3')}
              </span>
            </div>

            <div className="text-[16px] max-w-2xl  text-black">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry&apos;s,
            </div>
          </div>

          {/* Right: logos + link */}
          <div className="flex w-full flex-col">
            <div className="flex flex-col lg:flex-row md:flex-row w-full items-center justify-start gap-6 lg:justify-end">
              {/* Logo card 1 */}
              <div className="rounded-[12px] w-[140.01px] h-[132.28px]">
                  <img src="../assets/test.png" alt="image"  className="w-[100%] h-[100%] bg-cover"/>
              </div>

                <div className="rounded-[12px] w-[140.01px] h-[132.28px]">
                  <img src="../assets/test.png" alt="image"  className="w-[100%] h-[100%] bg-cover"/>
              </div>
              
              <div className="rounded-[12px] w-[140.01px] h-[132.28px]">
                  <img src="../assets/test.png" alt="image"  className="w-[100%] h-[100%] bg-cover"/>
              </div>
            </div>

            {/* See more */}
            <div className="mt-4 flex w-full justify-end">
              <RouterLink  to={`/${i18n.language}/ourPartners`}  className="text-[15px] font-medium text-[#2E5DC7] underline underline-offset-4 hover:text-blue-700">
                See More
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
