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

const Grid = styled.div`
  width: 100%;
  height: 1100px;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.bg};
`;

const IconTitle = styled.h5`
  font-size: 16px;
`;

const IconSubTitle = styled.p`
  font-size: 13px;
  margin-top: 20px;
`;

const IconLayout = styled.div`
  margin: 0 70px;
`;

export default function Section3() {
  return (
    <Grid bg="#fff">
      <TitleGrid top="170px">
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
      <IconGrid top="350px">
        <IconLayout>
          <Image src={Icon4} width={280} height={280} alt="icon4" />
          <IconTitle>실시간 얼굴 및 표정 트래킹</IconTitle>
          <IconSubTitle>
            웹캠으로 얼굴 및 표정 트래킹 구현 기술 보유
          </IconSubTitle>
        </IconLayout>
        <IconLayout>
          <Image src={Icon5} width={280} height={280} alt="icon5" />
          <IconTitle>메타버스 내 표정 및 음성 데이터 분석</IconTitle>
          <IconSubTitle>
            보이스 필터 음성변조 기술 <br />
            내담자 신원 보호 기술 보유
          </IconSubTitle>
        </IconLayout>
        <IconLayout>
          <Image src={Icon6} width={280} height={280} alt="icon6" />
          <IconTitle>메타버스 개발 전문 인력</IconTitle>
          <IconSubTitle>기술 전담팀 보유</IconSubTitle>
        </IconLayout>
      </IconGrid>
      <PopupButton />
    </Grid>
  );
}
