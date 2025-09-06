import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";

export default function HeroSlick() {
  const settings: Settings = {

  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  autoplaySpeed: 3500,
  speed: 500,
  slidesToShow: 1,
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
    <header className="relative overflow-hidden mt-[-10%]">
          <div className="relative overflow-hidden">
            <Slider {...settings} className="h-[340px] sm:h-[420px]">
                <div className="h-[340px] sm:h-[420px]">
                  <div className="relative h-full w-full p-[10px]">
                    <img src="../assets/test.png" className=" rounded-[12px] h-full w-[100%] object-cover"
                    />
                  </div>
                </div>
            </Slider>

          </div>
    </header>
  );
}
