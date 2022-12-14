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
      <TitleGrid top="160px">
        <MainTItleStyle color="#ef7a7f">
          나만의 공간이 필요하시다면 <br />
          상담공간 구축 서비스를 알아보세요!
        </MainTItleStyle>
        <SubTitleStyle color="#333">
          <span style={{ fontWeight: "800", color: "#333" }}>
            상담실부터 외부 공간까지 맞춤 구축이 가능해
            <br />
            기관/단체/학교에서도 필요에 맞게 활용할 수 있습니다.
          </span>
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
            <Image
              src={forest1}
              width={366}
              height={512}
              layout="responsive"
              alt="forest1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={forest2}
              width={366}
              height={512}
              layout="responsive"
              alt="forest2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={forest3}
              width={366}
              height={512}
              layout="responsive"
              alt="forest3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={forest4}
              width={366}
              height={512}
              layout="responsive"
              alt="forest4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={forest5}
              width={366}
              height={512}
              layout="responsive"
              alt="forest5"
            />
          </SwiperSlide>
        </Swiper>
      </SwiperGrid>

      <ButtonLayout>
        <BottomTextLayout color="#ef7a7f">
          지금 구축 서비스를 알아보세요!
        </BottomTextLayout>
        <Button color="#fff" bg="#ef7a7f" margin="0 auto">
          구축문의
        </Button>
      </ButtonLayout>
    </Grid>
  );
}
