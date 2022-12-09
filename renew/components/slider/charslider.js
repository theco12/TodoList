import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
import Image from "next/image";
import TitleGrid from "../common-style/TitleGrid";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import char1 from "../../public/image/character/char1.png";
import char2 from "../../public/image/character/char2.png";
import char3 from "../../public/image/character/char3.png";
import char4 from "../../public/image/character/char4.png";
import char5 from "../../public/image/character/char5.png";

const Grid = styled.div`
  width: 100%;
  height: 1100px;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.bg};
`;

const SwiperGrid = styled.div`
  position: relative;
  top: 400px;
`;

export default function CharSlider() {
  return (
    <Grid>
      <TitleGrid top="170px">
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
            <Image src={char1} width={441} height={544} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char2} width={441} height={544} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char3} width={441} height={544} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char4} width={441} height={544} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={char5} width={441} height={544} />
          </SwiperSlide>
        </Swiper>
      </SwiperGrid>
    </Grid>
  );
}
