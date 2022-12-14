import Image from "next/image";
import styled from "styled-components";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import Icon1 from "../../public/image/icon/icon1.png";
import Icon2 from "../../public/image/icon/icon2.png";
import Icon3 from "../../public/image/icon/icon3.png";
import IconGrid from "../common-style/IconGrid";
import TitleGrid from "../common-style/TitleGrid";

const Grid = styled.div`
  width: 100%;
  height: 920px;
  margin: 0 auto;
  position: relative;
  background-color: ${(props) => props.bg};

  @media screen and (max-width: 768px) {
    max-width: 400px;
    height: 1200px;
  }
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

export default function Section2() {
  return (
    <Grid bg="#e8f1e9">
      <TitleGrid top="180px">
        <MainTItleStyle color="#1fa170">
          어떻게 메타버스에서도 <br />
          검증된 심리상담이 가능할까요?
        </MainTItleStyle>
        <SubTitleStyle color="#333">
          <span style={{ fontWeight: "800", color: "#333" }}>
            메타포레스트는 멘탈 헬스, 심리상담 전문가
          </span>
          가<br />
          철저한 검증을 거쳐 만들고 있습니다.
        </SubTitleStyle>
      </TitleGrid>
      <IconGrid top="350px">
        <IconLayout>
          <Image src={Icon1} width={280} height={280} alt="icon1" />
          <IconTitle>
            대학과 협약을 통한 공동연구 및 <br />
            메타버스 플랫폼을 활용한 논문 게재
          </IconTitle>
          <IconSubTitle>
            고려대, 계명대, 광운대, 조선대, 호서대 등 협약
            <br /> + 심리상담 2대 메이저 학회 발표 등
          </IconSubTitle>
        </IconLayout>
        <IconLayout>
          <Image src={Icon2} width={280} height={280} alt="icon2" />
          <IconTitle>
            전문가를 통해 검증된
            <br /> 심리검사지
          </IconTitle>
          <IconSubTitle>
            심리상담 전문가의 검증을 거쳐 <br />
            신뢰할 수 있는 심리검사지 사용
          </IconSubTitle>
        </IconLayout>
        <IconLayout>
          <Image src={Icon3} width={280} height={280} alt="icon3" />
          <IconTitle>
            메타버스 심리상담 <br />
            전문 인력
          </IconTitle>
          <IconSubTitle>심리상담 전문가로 구성된 전담팀 보유</IconSubTitle>
        </IconLayout>
      </IconGrid>
    </Grid>
  );
}
