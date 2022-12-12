import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import banner1 from "../../public/image/banner/banner1.png";
import banner2 from "../../public/image/banner/banner2.png";
import banner3 from "../../public/image/banner/banner3.png";

export default function MainSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <Image
            src={banner1}
            style={{ width: "100%", height: "95vh", objectFit: "cover" }}
            alt="banner1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner2}
            style={{ width: "100%", height: "95vh", objectFit: "cover" }}
            alt="banner2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner3}
            style={{ width: "100%", height: "95vh", objectFit: "cover" }}
            alt="banner3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
