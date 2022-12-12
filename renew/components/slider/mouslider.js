import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Image from "next/image";
import TitleGrid from "../common-style/TitleGrid";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import forest1 from "../../public/image/forest/forest1.png";
import forest2 from "../../public/image/forest/forest2.png";
import forest3 from "../../public/image/forest/forest3.png";
import forest4 from "../../public/image/forest/forest4.png";
import forest5 from "../../public/image/forest/forest5.png";
import Button from "../common-style/button";
import ButtonLayout from "../common-style/ButtonLayout";
import BottomTextLayout from "../common-style/BottomTextLayout";

const MouSlider = () => {
  return (
    <Grid>
      <TitleGrid top="160px">
        <MainTItleStyle color="#1fa170">
          다양한 아바타로 즐겁게! <br />
          실시간 표정인식으로 마음을 표현해보세요!
        </MainTItleStyle>
        <SubTitleStyle color="#333">
          <span style={{ fontWeight: "800", color: "#333" }}>
            메타포레스트로 접속하실 때
          </span>
          <br />
          자신의 아바타를 매번 다르게 선택 할 수 있습니다
        </SubTitleStyle>
      </TitleGrid>

      <SwiperGrid>
        <Swiper
          spaceBetween={100}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          <SwiperSlide>
            <Image src={char1} width={441} height={544} alt="char1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char2} width={441} height={544} alt="char2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char3} width={441} height={544} alt="char3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char4} width={441} height={544} alt="char4" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char5} width={441} height={544} alt="char5" />
          </SwiperSlide>
        </Swiper>
      </SwiperGrid>
    </Grid>
  );
};

export default MouSlider;
