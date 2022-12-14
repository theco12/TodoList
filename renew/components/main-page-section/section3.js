import Image from "next/image";
import styled from "styled-components";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import Icon4 from "../../public/image/icon/icon4.png";
import Icon5 from "../../public/image/icon/icon5.png";
import Icon6 from "../../public/image/icon/icon6.png";
import IconGrid from "../common-style/IconGrid";
import TitleGrid from "../common-style/TitleGrid";
import PopupButton from "./PopupButton";
import Grid from "../common-style/Grid";

const IconTitle = styled.h5`
  font-size: 16px;
`;

const IconSubTitle = styled.p`
  font-size: 13px;
  margin-top: 20px;
`;

const IconLayout = styled.div`
  margin: 0 70px;
  @media screen and (max-width: 768px) {
    margin: 50px auto;
  }
`;

export default function Section3() {
  return (
    <Grid bg="#fff" height="1100px" MobileHeight="1700px">
      <TitleGrid top="170px" MobileTop="80px">
        <MainTItleStyle color="#1fa170">
          메타포레스트의 <br />
          메타버스 심리상담은 무엇이 다를까요?
        </MainTItleStyle>
        <SubTitleStyle color="#333">
          <span style={{ fontWeight: "800", color: "#333" }}>
            메타포레스트는 자사의 검증된 기술력
          </span>
          으로
          <br />
          메타버스 심리상담 플랫폼의 기준을 만듭니다.
        </SubTitleStyle>
      </TitleGrid>
      <IconGrid top="350px" MobileTop="170px">
        <IconLayout>
          <Image src={Icon4} width={270} height={270} alt="icon4" />
          <IconTitle>실시간 얼굴 및 표정 트래킹</IconTitle>
          <IconSubTitle>
            웹캠으로 얼굴 및 표정 트래킹 구현 기술 보유
          </IconSubTitle>
        </IconLayout>
        <IconLayout>
          <Image src={Icon5} width={270} height={270} alt="icon5" />
          <IconTitle>메타버스 내 표정 및 음성 데이터 분석</IconTitle>
          <IconSubTitle>
            보이스 필터 음성변조 기술 <br />
            내담자 신원 보호 기술 보유
          </IconSubTitle>
        </IconLayout>
        <IconLayout>
          <Image src={Icon6} width={270} height={270} alt="icon6" />
          <IconTitle>메타버스 개발 전문 인력</IconTitle>
          <IconSubTitle>기술 전담팀 보유</IconSubTitle>
        </IconLayout>
      </IconGrid>
      <PopupButton />
    </Grid>
  );
}
