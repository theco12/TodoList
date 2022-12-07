import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Button from "../components/button";
import banner1 from "../public/image/banner1.png";
import banner2 from "../public/image/banner2.png";
import banner3 from "../public/image/banner3.png";

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
          <Image src={banner1} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner2} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={banner3} style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
      </Swiper>

      <Button color="green" background="pink">
        소개영상보기
      </Button>
    </div>
  );
}
