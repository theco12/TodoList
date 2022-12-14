import Image from "next/image";
import styled from "styled-components";
import MainTItleStyle from "../common-style/MainTItleStyle";
import Icon4 from "../../public/image/icon/icon4.png";
import Icon5 from "../../public/image/icon/icon5.png";
import Icon6 from "../../public/image/icon/icon6.png";
import IconGrid from "../common-style/IconGrid";
import TitleGrid from "../common-style/TitleGrid";
import PopupButton from "./PopupButton";
import FaceMode1 from "../../public/image/char_facemode1.png";
import FaceMode2 from "../../public/image/cahr_facemode2.png";
import styles from "../../styles/Onoff.module.css";
import Line from "../../public/image/line.png";
import Line2 from "../../public/image/line2.png";
import Button from "../common-style/button";
import Grid from "../common-style/Grid";

const StepTitle = styled.h5`
  font-size: 14px;
  color: #fff;
  margin: 20px auto;
`;

const StepSubTitle = styled.p`
  font-size: 14px;
  color: #fff;
  margin: 20px auto;
`;

const IconLayout = styled.div`
  margin: 0 70px;

  @media screen and (max-width: 768px) {
    margin: 70px 70px;
  }
`;

const SubText = styled.div`
  font-size: 20px;
  position: absolute;
  right: 0;
  left: 0;
  top: 490px;
  text-align: center;
  font-weight: 800;
  z-index: 999;
  color: ${(props) => props.color};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    top: 1200px;
  }
`;

export default function Section10() {
  return (
    <Grid bg="#55689d" height="740px" MobileHeight="1500px">
      <TitleGrid top="90px">
        <MainTItleStyle color="#fff">
          메타포레스트 가입과 사용방법이 궁금하신가요?
        </MainTItleStyle>
        <IconGrid top="125px">
          <IconLayout>
            <StepTitle>STEP1</StepTitle>
            <Image src={Line} alt="line" />
            <StepSubTitle>
              메타포레스트 사이트에서 문의를 남겨주세요.
            </StepSubTitle>
            <Image src={Line2} alt="line2" />
            <Button bg="#1fa170" color="#fff" margin="20px auto">
              문의하기
            </Button>
          </IconLayout>
          <IconLayout>
            <StepTitle>STEP1</StepTitle>
            <Image src={Line} alt="line" />
            <StepSubTitle>
              메타포레스트 사이트에서 문의를 남겨주세요.
            </StepSubTitle>
            <Image src={Line2} alt="line2" />
          </IconLayout>
          <IconLayout>
            <StepTitle>STEP1</StepTitle>
            <Image src={Line} alt="line" />
            <StepSubTitle>
              메타포레스트 사이트에서 문의를 남겨주세요.
            </StepSubTitle>
            <Image src={Line2} alt="line2" />
            <Button bg="#ef7a7f" color="#fff" margin="20px auto">
              회원가입
            </Button>
          </IconLayout>
        </IconGrid>
        <SubText color="#b4e2de">
          현재는 학교/기관/업체로 가입이 가능하며 <br />
          일반 고객분들은 메타포레스트를 도입한 기관을 통해
          <br />
          상담을 진행하실 수 있습니다.
        </SubText>
      </TitleGrid>
    </Grid>
  );
}
