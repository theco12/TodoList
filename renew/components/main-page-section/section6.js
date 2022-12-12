import Image from "next/image";
import styled from "styled-components";
import MainTItleStyle from "../common-style/MainTItleStyle";
import SubTitleStyle from "../common-style/SubTitleStyle";
import Tablet1 from "../../public/image/tablet_image/tablet1.png";
import Tablet2 from "../../public/image/tablet_image/tablet2.png";
import Tablet3 from "../../public/image/tablet_image/tablet3.png";
import IconGrid from "../common-style/IconGrid";
import TitleGrid from "../common-style/TitleGrid";
import Button from "../common-style/button";
import ButtonLayout from "../common-style/ButtonLayout";
import BottomTextLayout from "../common-style/BottomTextLayout";

const Grid = styled.div`
  width: 100%;
  height: 700px;
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
  margin: 0 25px;
`;

export default function Section6() {
  return (
    <Grid bg="#e8f1e9">
      <TitleGrid top="80px">
        <MainTItleStyle color="#1fa170">
          PC, 모바일, 태블릿
          <br />
          어디서나 편하게 심리상담하세요!
        </MainTItleStyle>
        <SubTitleStyle color="#333">
          쉽게 접속할 수 있는 메타버스 상담실 덕분에 으로
          <br />
          상담센터에 직접 방문해야 하는 부담이 없습니다.
        </SubTitleStyle>
      </TitleGrid>
      <IconGrid top="280px">
        <IconLayout>
          <Image src={Tablet1} width={382} height={216} alt="Tablet1" />
        </IconLayout>
        <IconLayout>
          <Image src={Tablet2} width={382} height={216} alt="Tablet2" />
        </IconLayout>
        <IconLayout>
          <Image src={Tablet3} width={382} height={216} alt="Tablet3" />
        </IconLayout>
      </IconGrid>

      <ButtonLayout>
        <BottomTextLayout color="#1fa170">
          지금 구독 서비스를 알아보세요!
        </BottomTextLayout>
        <Button color="#fff" bg="#1fa170" margin="0 auto">
          구독문의
        </Button>
      </ButtonLayout>
    </Grid>
  );
}
