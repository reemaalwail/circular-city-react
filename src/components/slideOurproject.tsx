import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Link as RouterLink } from "react-router-dom";

type Item = {
  title?: string;
  description?: string;
  english_title?: string;
  egnlish_description?: string;
  image?: string;
};

type ApiRes = { 
    data: Item[];   
};

export default function PartnersSection() {
  const { i18n, t } = useTranslation();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  const raw = localStorage.getItem("slideNewsDataLength");
  const countLoadding = raw || 4;

  useEffect(() => {
    fetch("https://press.fayadev.net/api/pages/15/32")
      .then((res) => res.json())
      .then((json: ApiRes) => {
        setItems(json.data || []);
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false));
  }, []);
  console.log(items)
  
  const settings: Settings = {

  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,
  centerMode: false,
  variableWidth: false,
  responsive: [
    { breakpoint: 9999, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 640,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
} as const;
return (
<section className="relative container">
  <div className="relative mx-auto max-w-7xl  ltr">
          <div className="flex flex-row justify-between items-center">
<div className="fontJokkerBold text-[#1A4FC6] text-[18.73px] capitalize">~ &nbsp; {t('ourProjects.text1')}</div>
<RouterLink  to={`/${i18n.language}/ourProjects`}> 
<div  className="fontJokkerMedium text-[#1A4FC6] text-[15.16px] capitalize font-medium underline">{t('seeAll')}</div>
</RouterLink>
          </div>
    <div className="pt-[15px] pb-[15px] overflow-auto">
      <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-between">
            {loading&& (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length:  Number(countLoadding) }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-40 rounded-xl bg-slate-200" />
              <div className="mt-3 h-5 w-3/4 rounded bg-slate-200" />
              <div className="mt-2 h-4 w-full rounded bg-slate-200" />
              <div className="mt-1 h-4 w-5/6 rounded bg-slate-200" />
            </div>
          ))}
        </div>
      )}
      
        {!loading && (
          <div className="flex flex-row">
                     {items.map((it, idx) => {
                              return (
          <Slider {...settings}  key={idx} className="cardSlide h-[100%] m-[10px] cursor-pointer">
             <div className="flex flex-col">
                    <div className="h-[240px] w-[100%] img-cardSlide overflow-hidden rounded-[10px]">
                        <img  src={it.image} className="w-[100%] h-[240px] object-cover rounded-[10px]"/> 
                    </div>
                      <div className="fontJokkerMedium text-[16px] text-black mt-[10px]">{it.english_title}</div>
                      <div className="fontJokkerMedium description text-[14px]  text-[#737373] mt-[10px]">{it.egnlish_description}</div>
             </div>
              </Slider>

                 );
                 })}
          </div>
           )}
      </div>

    </div>
  </div>
</section>
);
}
